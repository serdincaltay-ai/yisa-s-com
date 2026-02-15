'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Mail, Phone, MapPin, Calendar } from 'lucide-react'

export type BayilikKayit = {
  id: string
  ad: string | null
  soyad: string | null
  email: string | null
  telefon: string | null
  il: string | null
  ilce: string | null
  deneyim: string | null
  yatirim_butcesi: string | null
  motivasyon: string | null
  durum: string | null
  olusturma_tarihi: string | null
}

const DURUM_ETIKET: { [key: string]: string } = {
  yeni: 'Yeni',
  inceleniyor: 'İnceleniyor',
  gorusme: 'Görüşme',
  onaylandi: 'Onaylandı',
  reddedildi: 'Reddedildi',
}

type Props = {
  liste: BayilikKayit[]
  yukleniyor: boolean
  hata: string
}

export function BayilikListesiView(props: Props) {
  const { liste, yukleniyor, hata } = props
  return React.createElement('div', { className: 'min-h-[80vh] px-4 py-8 sm:py-12' },
    React.createElement('div', { className: 'max-w-5xl mx-auto' },
      React.createElement(Link, {
        href: '/panel',
        className: 'inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6',
      }, React.createElement(ArrowLeft, { size: 18 }), ' Panele dön'),
      React.createElement('h1', { className: 'text-2xl font-bold text-white mb-2' }, 'Bayilik Başvuruları'),
      React.createElement('p', { className: 'text-slate-400 mb-6' }, 'Bayilik başvuru formundan gelen kayıtlar.'),
      yukleniyor && React.createElement('div', { className: 'text-slate-400 py-8' }, 'Yükleniyor...'),
      !yukleniyor && liste.length === 0 && React.createElement('div', {
        className: 'bg-slate-900/50 border border-slate-800 rounded-xl p-8 text-center text-slate-500',
      }, hata
        ? React.createElement(React.Fragment, null,
          React.createElement('p', null, hata),
          React.createElement('p', { className: 'mt-2 text-sm' },
            'Supabase\'te ', React.createElement('code', { className: 'text-slate-400' }, 'franchise_applications'),
            ' tablosu ve gerekirse ', React.createElement('code', { className: 'text-slate-400' }, 'SUPABASE_SERVICE_ROLE_KEY'), ' tanımlı olmalı.'))
        : 'Henüz bayilik başvurusu yok.'),
      !yukleniyor && liste.length > 0 && React.createElement('div', {
        className: 'bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden',
      }, React.createElement('div', { className: 'overflow-x-auto' },
        React.createElement('table', { className: 'w-full text-left text-sm' },
          React.createElement('thead', null,
            React.createElement('tr', { className: 'border-b border-slate-800 bg-slate-800/50' },
              React.createElement('th', { className: 'px-4 py-3 text-slate-300 font-medium' }, 'Ad Soyad'),
              React.createElement('th', { className: 'px-4 py-3 text-slate-300 font-medium' }, 'E-posta'),
              React.createElement('th', { className: 'px-4 py-3 text-slate-300 font-medium' }, 'Telefon'),
              React.createElement('th', { className: 'px-4 py-3 text-slate-300 font-medium' }, 'İl / İlçe'),
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
                  k.il || k.ilce ? React.createElement('span', { className: 'flex items-center gap-1' }, React.createElement(MapPin, { size: 14 }), ' ', [k.il, k.ilce].filter(Boolean).join(' / ')) : '—'),
                React.createElement('td', { className: 'px-4 py-3' },
                  React.createElement('span', {
                    className: `px-2 py-1 rounded-lg text-xs font-medium ${k.durum === 'yeni' ? 'bg-amber-500/20 text-amber-400' : k.durum === 'onaylandi' ? 'bg-emerald-500/20 text-emerald-400' : k.durum === 'reddedildi' ? 'bg-red-500/20 text-red-400' : 'bg-slate-700 text-slate-400'}`,
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
