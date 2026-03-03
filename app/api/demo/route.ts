// /app/api/demo/route.ts
// Vitrin ve /demo sayfasından gelen talepler; body'de source: 'vitrin' ile işaretlenebilir.
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

function normalizeName(body: Record<string, unknown>): string {
  const nameStr = String(body.name ?? body.ad ?? '').trim()
  if (nameStr) return nameStr
  const ad = String(body.ad ?? '').trim()
  const soyad = String(body.soyad ?? '').trim()
  return [ad, soyad].filter(Boolean).join(' ') || 'Belirtilmemiş'
}

export async function POST(request: NextRequest) {
  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json({ error: 'Yapılandırma eksik. Supabase URL ve anahtar tanımlı olmalı.' }, { status: 503 })
  }
  try {
    const body = await request.json()
    const email = (body.email ?? '').toString().trim()
    if (!email) {
      return NextResponse.json({ error: 'E-posta zorunludur.' }, { status: 400 })
    }

    const name = normalizeName(body)
    const phone = body.phone != null ? String(body.phone).trim() : (body.telefon != null ? String(body.telefon).trim() : null)
    const company_name = body.company_name != null ? String(body.company_name).trim() : (body.kurum != null ? String(body.kurum).trim() : null)
    const athlete_count = body.athlete_count != null ? parseInt(String(body.athlete_count), 10) : null
    const interested_package = body.interested_package ?? body.package ?? body.brans ?? null
    const message = body.message != null ? String(body.message).trim() : (body.mesaj != null ? String(body.mesaj).trim() : null)
    const source = body.source ?? null
    const utm_source = source ? String(source) : (body.utm_source ? String(body.utm_source).trim() : null)
    const utm_medium = body.utm_medium ? String(body.utm_medium).trim() : null
    const utm_campaign = body.utm_campaign ? String(body.utm_campaign).trim() : null

    const supabase = createClient(supabaseUrl!, supabaseKey!)
    const { data, error } = await supabase
      .from('demo_requests')
      .insert({
        name: name || 'Belirtilmemiş',
        email,
        phone: phone || null,
        company_name: company_name || null,
        athlete_count: Number.isNaN(athlete_count) ? null : athlete_count,
        interested_package: interested_package ? String(interested_package).trim() : null,
        message: message || null,
        utm_source: utm_source || null,
        utm_medium: utm_medium || null,
        utm_campaign: utm_campaign || null,
        status: 'new',
      })
      .select()
      .single()

    if (error) {
      console.error('Tanıtım talep hatası:', error)
      return NextResponse.json(
        { error: error.code === '23502' ? 'Zorunlu alanlar eksik. Ad ve e-posta doldurulmalı.' : 'Veritabanı hatası' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (err) {
    console.error('Tanıtım API hatası:', err)
    return NextResponse.json({ error: 'Sunucu hatası' }, { status: 500 })
  }
}
