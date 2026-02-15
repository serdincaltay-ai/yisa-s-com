// Demo talebini onayla → tenant + franchise sahibi kullanıcı + STARTER abonelik oluştur
// POST { demoRequestId: string (UUID) }
// SUPABASE_SERVICE_ROLE_KEY ile çalışır; tüm işlemler sırayla, hata olursa erken dönüş

import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

const TURKCE_SESLI: Record<string, string> = {
  ş: 's', ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ü: 'u',
  Ş: 's', Ç: 'c', Ğ: 'g', İ: 'i', Ö: 'o', Ü: 'u',
}

function slugify(firmaAdi: string): string {
  if (!firmaAdi || typeof firmaAdi !== 'string') return 'tenant-' + Date.now()
  let s = firmaAdi.trim()
  for (const [k, v] of Object.entries(TURKCE_SESLI)) {
    s = s.split(k).join(v)
  }
  s = s.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '') || 'tenant'
  return s || 'tenant-' + Date.now()
}

export async function POST(request: Request) {
  if (!supabaseAdmin) {
    return NextResponse.json(
      { error: 'Sunucu yapılandırması eksik (Supabase service role).' },
      { status: 503 }
    )
  }

  let body: { demoRequestId?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Geçersiz istek gövdesi.' }, { status: 400 })
  }

  const demoRequestId = body.demoRequestId
  if (!demoRequestId || typeof demoRequestId !== 'string') {
    return NextResponse.json({ error: 'demoRequestId (UUID) gerekli.' }, { status: 400 })
  }

  // 1) Demo kaydını al
  const { data: demo, error: demoErr } = await supabaseAdmin
    .from('demo_requests')
    .select('id, ad, soyad, email, telefon, sirket_adi, durum')
    .eq('id', demoRequestId)
    .single()

  if (demoErr || !demo) {
    return NextResponse.json({ error: 'Tanıtım talebi bulunamadı.' }, { status: 404 })
  }
  if (demo.durum === 'donustu') {
    return NextResponse.json({ error: 'Bu talep zaten onaylanmış.' }, { status: 400 })
  }

  const email = (demo.email || '').trim().toLowerCase()
  if (!email) {
    return NextResponse.json({ error: 'Talepte e-posta yok.' }, { status: 400 })
  }

  // 2) Aynı e-posta ile kullanıcı var mı? (tek tenant sahibi)
  const { data: mevcutUser } = await supabaseAdmin
    .from('users')
    .select('id')
    .eq('email', email)
    .maybeSingle()

  if (mevcutUser) {
    return NextResponse.json(
      { error: 'Bu e-posta adresi ile zaten bir franchise kaydı var.' },
      { status: 409 }
    )
  }

  // 3) STARTER paket id
  const { data: pkg, error: pkgErr } = await supabaseAdmin
    .from('packages')
    .select('id')
    .eq('kod', 'STARTER')
    .maybeSingle()

  if (pkgErr || !pkg?.id) {
    return NextResponse.json(
      { error: 'STARTER paketi bulunamadı. Veritabanında packages tablosunu kontrol edin.' },
      { status: 502 }
    )
  }

  const firmaAdi = (demo.sirket_adi || '').trim() || 'Yeni Tesis'
  const sahipAdi = [demo.ad, demo.soyad].filter(Boolean).join(' ').trim() || email

  // 4) Tenant kodu: slug, benzersiz olmalı
  let tenantKod = slugify(firmaAdi)
  const { data: mevcutTenant } = await supabaseAdmin
    .from('tenants')
    .select('id')
    .eq('kod', tenantKod)
    .maybeSingle()

  if (mevcutTenant) {
    tenantKod = tenantKod + '-' + Date.now().toString(36).slice(-6)
  }

  // 5) demo_requests.durum → donustu
  const { error: updateDemoErr } = await supabaseAdmin
    .from('demo_requests')
    .update({ durum: 'donustu' })
    .eq('id', demoRequestId)

  if (updateDemoErr) {
    return NextResponse.json(
      { error: 'Talep durumu güncellenemedi: ' + updateDemoErr.message },
      { status: 500 }
    )
  }

  // 6) Tenant ekle
  const { data: newTenant, error: tenantErr } = await supabaseAdmin
    .from('tenants')
    .insert({
      kod: tenantKod,
      isim: firmaAdi,
      sahip_adi: sahipAdi,
      sahip_email: email,
      sahip_telefon: (demo.telefon || '').trim() || null,
      durum: 'aktif',
    })
    .select('id')
    .single()

  if (tenantErr || !newTenant?.id) {
    return NextResponse.json(
      { error: 'Tenant oluşturulamadı: ' + (tenantErr?.message || 'Bilinmeyen hata') },
      { status: 500 }
    )
  }

  // 7) Franchise sahibi kullanıcı (ROL-1)
  const { error: userErr } = await supabaseAdmin
    .from('users')
    .insert({
      tenant_id: newTenant.id,
      email,
      ad: (demo.ad || '').trim() || sahipAdi.split(' ')[0] || 'Franchise',
      soyad: (demo.soyad || '').trim() || sahipAdi.split(' ').slice(1).join(' ') || 'Sahibi',
      rol_kodu: 'ROL-1',
      durum: 'aktif',
    })

  if (userErr) {
    return NextResponse.json(
      { error: 'Kullanıcı oluşturulamadı: ' + userErr.message },
      { status: 500 }
    )
  }

  // 8) STARTER abonelik
  const baslangicTarihi = new Date().toISOString().slice(0, 10)
  const { error: subErr } = await supabaseAdmin
    .from('subscriptions')
    .insert({
      tenant_id: newTenant.id,
      package_id: pkg.id,
      baslangic_tarihi: baslangicTarihi,
      durum: 'aktif',
    })

  if (subErr) {
    return NextResponse.json(
      { error: 'Abonelik oluşturulamadı: ' + subErr.message },
      { status: 500 }
    )
  }

  return NextResponse.json({
    ok: true,
    message: `${firmaAdi} başarıyla oluşturuldu.`,
    tenant_id: newTenant.id,
    tenant_kod: tenantKod,
  })
}
