// Demo talebini reddet: durum → iptal
import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase-admin'

export async function POST(request: Request) {
  if (!supabaseAdmin) {
    return NextResponse.json(
      { error: 'Sunucu yapılandırması eksik.' },
      { status: 503 }
    )
  }
  let body: { demoRequestId?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Geçersiz istek.' }, { status: 400 })
  }
  const demoRequestId = body.demoRequestId
  if (!demoRequestId) {
    return NextResponse.json({ error: 'demoRequestId gerekli.' }, { status: 400 })
  }

  const { error } = await supabaseAdmin
    .from('demo_requests')
    .update({ durum: 'iptal' })
    .eq('id', demoRequestId)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ ok: true, message: 'Talep reddedildi.' })
}
