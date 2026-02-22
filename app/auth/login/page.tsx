'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabaseClient } from '@/lib/supabase-client'
import { BRAND } from '@/lib/knowledge/yisas'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.yisa-s.com'

function getRedirectForRole(role: string | undefined): string {
  switch (role?.toLowerCase()) {
    case 'patron':
      return APP_URL
    case 'franchise':
      return '/franchise/dashboard'
    case 'antrenör':
    case 'antrenor':
      return '/antrenor'
    case 'veli':
      return '/veli'
    default:
      return '/franchise/dashboard'
  }
}

export default function AuthLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [noConfig, setNoConfig] = useState(false)

  useEffect(() => {
    setNoConfig(!supabaseClient)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!supabaseClient) {
      setError('Giriş yapılandırması eksik. .env.local dosyasında Supabase URL ve anahtar tanımlı olmalı.')
      return
    }
    setLoading(true)
    try {
      const { data, error: signInError } = await supabaseClient.auth.signInWithPassword({ email, password })
      if (signInError) {
        setError(signInError.message === 'Invalid login credentials' ? 'E-posta veya şifre hatalı.' : signInError.message)
        setLoading(false)
        return
      }
      const role = (data?.user?.user_metadata?.role as string) ?? (data?.user?.app_metadata?.role as string)
      const redirect = getRedirectForRole(role)
      if (redirect.startsWith('http')) {
        window.location.href = redirect
      } else {
        router.push(redirect)
        router.refresh()
      }
    } catch {
      setError('Giriş yapılırken bir hata oluştu.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">Giriş Yap</h1>
            <p className="text-slate-400 text-sm">{BRAND.name} — Franchise, antrenör veya veli hesabınızla giriş yapın.</p>
          </div>

          {noConfig && (
            <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-400 text-sm mb-4">
              Supabase yapılandırması eksik. <code className="text-amber-300">.env.local</code> içinde <code className="text-amber-300">NEXT_PUBLIC_SUPABASE_URL</code> ve <code className="text-amber-300">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> tanımlı olmalı.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm text-slate-400 mb-1.5">E-posta</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="ornek@eposta.com"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm text-slate-400 mb-1.5">Şifre</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:border-amber-500 focus:outline-none"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || noConfig}
              className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 text-slate-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-amber-500/30 transition-all disabled:opacity-50"
            >
              {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
            </button>
          </form>

          <p className="mt-6 text-center text-slate-500 text-sm">
            <Link href="/" className="text-amber-400 hover:text-amber-300">Ana sayfaya dön</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
