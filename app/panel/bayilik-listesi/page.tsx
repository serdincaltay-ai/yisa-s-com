'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabaseClient } from '@/lib/supabase-client'
import { BayilikListesiView, type BayilikKayit } from './BayilikListesiView'

export default function BayilikListesiPage() {
  const router = useRouter()
  const [liste, setListe] = useState<BayilikKayit[]>([])
  const [yukleniyor, setYukleniyor] = useState(true)
  const [hata, setHata] = useState('')

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
      try {
        const res = await fetch('/api/panel/bayilik-listesi')
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
    }
    fn()
  }, [router])

  return React.createElement(BayilikListesiView, {
    liste,
    yukleniyor,
    hata,
  })
}
