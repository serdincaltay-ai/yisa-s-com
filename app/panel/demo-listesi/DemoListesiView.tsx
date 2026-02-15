'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Mail, Phone, Building2, Calendar } from 'lucide-react'

export type DemoKayit = {
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

const DURUM_ETIKET: { [key: string]: string } = {
  yeni: 'Yeni',
  iletisimde: 'İletişimde',
  demo_yapildi: 'Tanıtım yapıldı',
  donustu: 'Dönüştü',
  iptal: 'İptal',
}

type Props = {
  liste: DemoKayit[]
  yukleniyor: boolean
  hata: string
}

export function DemoListesiView(props: Props) {
  const { liste, yukleniyor, hata } = props
  return React.createElement('div', { className: 'min-h-[80vh] px-4 py-8 sm:py-12' },
    React.createElement('div', { className: 'max-w-5xl mx-auto' },
      React.createElement(Link, {
        href: '/panel',
        className: 'inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6',
      }, React.createElement(ArrowLeft, { size: 18 }), ' Panele dön'),
      React.createElement('h1', { className: 'text-2xl font-bold text-white mb-2' }, 'Tanıtım Talepleri'),
      React.createElement('p', { className: 'text-slate-400 mb-6' }, 'Tanıtım talep formundan gelen başvurular.'),
      yukleniyor && React.createElement('div', { className: 'text-slate-400 py-8' }, 'Yükleniyor...'),
      !yukleniyor && liste.length === 0 && React.createElement('div', {
        className: 'bg-slate-900/50 border border-slate-800 rounded-xl p-8 text-center text-slate-500',
      }, hata
        ? React.createElement(React.Fragment, null,
          React.createElement('p', null, hata),
          React.createElement('p', { className: 'mt-2 text-sm' },
            'Supabase\'te ', React.createElement('code', { className: 'text-slate-400' }, 'demo_requests'),
            ' tablosu ve gerekirse ', React.createElement('code', { className: 'text-slate-400' }, 'SUPABASE_SERVICE_ROLE_KEY'), ' tanımlı olmalı.'))
        : 'Henüz tanıtım talebi yok.'),
      !yukleniyor && liste.length > 0 && React.createElement('div', {
        className: 'bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden',
      }, React.createElement('div', { className: 'overflow-x-auto' },
        React.createElement('table', { className: 'w-full text-left text-sm' },
          React.createElement('thead', null,
            React.createElement('tr', { className: 'border-b border-slate-800 bg-slate-800/50' },
              React.createElement('th', { className: 'px-4 py-3 text-slate-300 font-medium' }, 'Ad Soyad'),
              React.createElement('th', { className: 'px-4 py-3 text-slate-300 font-medium' }, 'E-posta'),
              React.createElement('th', { className: 'px-4 py-3 text-slate-300 font-medium' }, 'Telefon'),
              React.createElement('th', { className: 'px-4 py-3 text-slate-300 font-medium' }, 'Kurum'),
              React.createElement('th', { className: 'px-4 py-3 text-slate-300 font-medium' }, 'Paket'),
              React.createElement('th', { className: 'px-4 py-3 text-slate-300 font-medium' }, 'Durum'),
              React.createElement('th', { className: 'px-4 py-3 text-slate-300 font-medium' }, 'Tarih'))),
          React.createElement('tbody', null,
            ...liste.map((k) =>
              React.createElement('tr', { key: k.id, className: 'border-b border-slate-800/50 hover:bg-slate-800/30' },
                React.createElement('td', { className: 'px-4 py-3 text-white' },
                  [k.ad, k.soyad].filter(Boolean).join(' ') || '—'),
                React.createElement('td', { className: 'px-4 py-3 text-slate-300' },
                  k.email
                    ? React.createElement('a', { href: `mailto:${k.email}`, className: 'text-amber-400 hover:underline flex items-center gap-1' },
                      React.createElement(Mail, { size: 14 }), ' ', k.email)
                    : '—'),
                React.createElement('td', { className: 'px-4 py-3 text-slate-300' },
                  k.telefon ? React.createElement('span', { className: 'flex items-center gap-1' }, React.createElement(Phone, { size: 14 }), ' ', k.telefon) : '—'),
                React.createElement('td', { className: 'px-4 py-3 text-slate-300' },
                  k.sirket_adi ? React.createElement('span', { className: 'flex items-center gap-1' }, React.createElement(Building2, { size: 14 }), ' ', k.sirket_adi) : '—'),
                React.createElement('td', { className: 'px-4 py-3 text-slate-300' }, k.ilgilendigi_paket ?? '—'),
                React.createElement('td', { className: 'px-4 py-3' },
                  React.createElement('span', {
                    className: `px-2 py-1 rounded-lg text-xs font-medium ${k.durum === 'yeni' ? 'bg-amber-500/20 text-amber-400' : k.durum === 'donustu' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-700 text-slate-400'}`,
                  }, DURUM_ETIKET[k.durum ?? ''] ?? k.durum ?? '—')),
                React.createElement('td', { className: 'px-4 py-3 text-slate-400' },
                  k.olusturma_tarihi
                    ? React.createElement('span', { className: 'flex items-center gap-1' },
                      React.createElement(Calendar, { size: 14 }),
                      new Date(k.olusturma_tarihi).toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }))
                    : '—')))))))
    )
  )
}
