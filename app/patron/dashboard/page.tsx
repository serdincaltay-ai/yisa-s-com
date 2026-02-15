'use client'

import React, { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Mail, Building2, Calendar, CheckCircle, XCircle } from 'lucide-react'
import { supabaseClient } from '@/lib/supabase-client'

type DemoKayit = {
  id: string
  ad: string | null
  soyad: string | null
  email: string | null
  telefon: string | null
  sirket_adi: string | null
  sporcu_sayisi: number | null
  ilgilendigi_paket: string | null
  mesaj: string | null
  durum: string | null
  olusturma_tarihi: string | null
}

const DURUM_ETIKET: Record<string, string> = {
  yeni: 'Yeni',
  iletisimde: 'İletişimde',
  demo_yapildi: 'Tanıtım yapıldı',
  donustu: 'Dönüştü',
  iptal: 'İptal',
}

export default function PatronDashboardPage() {
  const router = useRouter()
  const [liste, setListe] = useState<DemoKayit[]>([])
  const [yukleniyor, setYukleniyor] = useState(true)
  const [hata, setHata] = useState('')
  const [toast, setToast] = useState<{ mesaj: string; basarili: boolean } | null>(null)
  const [isleyenId, setIsleyenId] = useState<string | null>(null)

  const listeyiGetir = useCallback(async () => {
    try {
      const res = await fetch('/api/panel/demo-listesi')
      if (res.status === 401) {
        router.replace('/giris')
        return
      }
      const json = await res.json()
      setListe(Array.isArray(json.list) ? json.list : [])
      if (json.error && !json.list?.length) setHata(json.error)
    } catch {
      setHata('Liste alınamadı.')
    } finally {
      setYukleniyor(false)
    }
  }, [router])

  useEffect(() => {
    const fn = async () => {
      if (!supabaseClient) {
        router.replace('/giris')
        return
      }
      const { data: { session } } = await supabaseClient.auth.getSession()
      if (!session?.user) {
        router.replace('/giris')
        return
      }
      setYukleniyor(true)
      await listeyiGetir()
    }
    fn()
  }, [router, listeyiGetir])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 4000)
    return () => clearTimeout(t)
  }, [toast])

  const onayla = async (k: DemoKayit) => {
    if (k.durum === 'donustu') return
    setIsleyenId(k.id)
    try {
      const res = await fetch('/api/approve-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ demoRequestId: k.id }),
      })
      const json = await res.json()
      if (!res.ok) {
        setToast({ mesaj: json.error || 'Onaylama başarısız.', basarili: false })
        return
      }
      setToast({
        mesaj: json.message || `${k.sirket_adi || 'Firma'} başarıyla oluşturuldu.`,
        basarili: true,
      })
      await listeyiGetir()
    } catch {
      setToast({ mesaj: 'Bağlantı hatası.', basarili: false })
    } finally {
      setIsleyenId(null)
    }
  }

  const reddet = async (k: DemoKayit) => {
    if (k.durum === 'iptal') return
    setIsleyenId(k.id)
    try {
      const res = await fetch('/api/reject-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ demoRequestId: k.id }),
      })
      const json = await res.json()
      if (!res.ok) {
        setToast({ mesaj: json.error || 'Reddetme başarısız.', basarili: false })
        return
      }
      setToast({ mesaj: 'Talep reddedildi.', basarili: true })
      await listeyiGetir()
    } catch {
      setToast({ mesaj: 'Bağlantı hatası.', basarili: false })
    } finally {
      setIsleyenId(null)
    }
  }

  if (!supabaseClient) return null

  return (
    <div className="min-h-[80vh] px-4 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/panel"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6"
        >
          <ArrowLeft size={18} />
          Panele dön
        </Link>
        <h1 className="text-2xl font-bold text-white mb-2">Patron – Tanıtım Talepleri</h1>
        <p className="text-slate-400 mb-6">
          Talepleri onaylayarak otomatik tenant, franchise sahibi kullanıcı ve STARTER aboneliği oluşturabilirsiniz.
        </p>

        {toast && (
          <div
            className={`mb-4 px-4 py-3 rounded-xl border ${
              toast.basarili
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
            }`}
          >
            {toast.mesaj}
          </div>
        )}

        {yukleniyor && <div className="text-slate-400 py-8">Yükleniyor...</div>}

        {!yukleniyor && liste.length === 0 && (
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 text-center text-slate-500">
            {hata || 'Henüz tanıtım talebi yok.'}
          </div>
        )}

        {!yukleniyor && liste.length > 0 && (
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-800/50">
                    <th className="px-4 py-3 text-slate-300 font-medium">Ad Soyad</th>
                    <th className="px-4 py-3 text-slate-300 font-medium">E-posta</th>
                    <th className="px-4 py-3 text-slate-300 font-medium">Firma</th>
                    <th className="px-4 py-3 text-slate-300 font-medium">Tarih</th>
                    <th className="px-4 py-3 text-slate-300 font-medium">Durum</th>
                    <th className="px-4 py-3 text-slate-300 font-medium text-right">İşlem</th>
                  </tr>
                </thead>
                <tbody>
                  {liste.map((k) => (
                    <tr key={k.id} className="border-b border-slate-800/50 hover:bg-slate-800/30">
                      <td className="px-4 py-3 text-white">
                        {[k.ad, k.soyad].filter(Boolean).join(' ') || '—'}
                      </td>
                      <td className="px-4 py-3 text-slate-300">
                        {k.email ? (
                          <a href={`mailto:${k.email}`} className="text-amber-400 hover:underline flex items-center gap-1">
                            <Mail size={14} /> {k.email}
                          </a>
                        ) : '—'}
                      </td>
                      <td className="px-4 py-3 text-slate-300">
                        {k.sirket_adi ? (
                          <span className="flex items-center gap-1">
                            <Building2 size={14} /> {k.sirket_adi}
                          </span>
                        ) : '—'}
                      </td>
                      <td className="px-4 py-3 text-slate-400">
                        {k.olusturma_tarihi ? (
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {new Date(k.olusturma_tarihi).toLocaleDateString('tr-TR', {
                              day: '2-digit',
                              month: '2-digit',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </span>
                        ) : '—'}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded-lg text-xs font-medium ${
                            k.durum === 'yeni'
                              ? 'bg-amber-500/20 text-amber-400'
                              : k.durum === 'donustu'
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : k.durum === 'iptal'
                              ? 'bg-red-500/20 text-red-400'
                              : 'bg-slate-700 text-slate-400'
                          }`}
                        >
                          {DURUM_ETIKET[k.durum ?? ''] ?? k.durum ?? '—'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        {k.durum === 'yeni' && (
                          <span className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => onayla(k)}
                              disabled={isleyenId === k.id}
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium disabled:opacity-50"
                            >
                              <CheckCircle size={14} /> Onayla
                            </button>
                            <button
                              onClick={() => reddet(k)}
                              disabled={isleyenId === k.id}
                              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm font-medium disabled:opacity-50"
                            >
                              <XCircle size={14} /> Reddet
                            </button>
                          </span>
                        )}
                        {k.durum !== 'yeni' && <span className="text-slate-500">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
