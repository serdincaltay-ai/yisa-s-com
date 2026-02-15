'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, Monitor, BarChart3, FileText, Zap } from 'lucide-react'
import { BRANCHES } from '@/lib/knowledge/yisas'
import { useInView } from '@/hooks/use-in-view'

const BENEFITS = [
  { icon: Monitor, title: 'Canl\u0131 Demo', desc: 'Ger\u00e7ek panel \u00fczerinden canl\u0131 tan\u0131t\u0131m' },
  { icon: BarChart3, title: '\u00d6zel Analiz', desc: 'Kul\u00fcb\u00fcn\u00fcze \u00f6zel ihtiya\u00e7 analizi' },
  { icon: FileText, title: 'Fiyat Teklifi', desc: 'Detayl\u0131 ve \u015feffaf fiyatland\u0131rma' },
  { icon: Zap, title: 'H\u0131zl\u0131 Ba\u015flang\u0131\u00e7', desc: '48 saat i\u00e7inde sistemi kullanmaya ba\u015flay\u0131n' },
]

interface FormData {
  name: string
  phone: string
  email: string
  company: string
  branch: string
  message: string
}

export default function DemoForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    company: '',
    branch: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setIsSuccess(true)
      }
    } catch {
      // silently handle
    } finally {
      setIsSubmitting(false)
    }
  }

  const updateField = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  if (isSuccess) {
    return (
      <section id="demo" className="section">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto text-center p-8 sm:p-12 rounded-2xl bg-[#10b981]/5 border border-[#10b981]/20"
          >
            <CheckCircle size={56} className="mx-auto text-[#10b981] mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3">
              {'Talebiniz Al\u0131nd\u0131'}
            </h3>
            <p className="text-[#94a3b8] leading-relaxed">
              {'Demo talebiniz ba\u015far\u0131yla iletildi. Ekibimiz en k\u0131sa s\u00fcrede sizinle ileti\u015fime ge\u00e7ecektir.'}
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section ref={ref} id="demo" className="section relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 text-balance">
            {'\u00dccretsiz Demo Talep Edin'}
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto text-pretty">
            {'Formu doldurun, ekibimiz 24 saat i\u00e7inde sizinle ileti\u015fime ge\u00e7sin.'}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 max-w-5xl mx-auto">
          {/* Left - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:w-2/5 space-y-5"
          >
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0f3460]/30 border border-[#00d4ff]/10 flex items-center justify-center shrink-0">
                  <b.icon size={20} className="text-[#00d4ff]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">{b.title}</h4>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:w-3/5"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0c1220]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="demo-name" className="block text-sm font-medium text-[#94a3b8] mb-1.5">
                    {'Ad Soyad'}
                  </label>
                  <input
                    id="demo-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-[#64748b] focus:border-[#00d4ff]/40 focus:outline-none transition-colors min-h-[44px]"
                    placeholder="Ad\u0131n\u0131z Soyad\u0131n\u0131z"
                  />
                </div>
                <div>
                  <label htmlFor="demo-phone" className="block text-sm font-medium text-[#94a3b8] mb-1.5">
                    {'Telefon'}
                  </label>
                  <input
                    id="demo-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-[#64748b] focus:border-[#00d4ff]/40 focus:outline-none transition-colors min-h-[44px]"
                    placeholder="05XX XXX XX XX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="demo-email" className="block text-sm font-medium text-[#94a3b8] mb-1.5">
                    {'E-posta'}
                  </label>
                  <input
                    id="demo-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-[#64748b] focus:border-[#00d4ff]/40 focus:outline-none transition-colors min-h-[44px]"
                    placeholder="ornek@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="demo-company" className="block text-sm font-medium text-[#94a3b8] mb-1.5">
                    {'Kurum'}
                  </label>
                  <input
                    id="demo-company"
                    type="text"
                    value={form.company}
                    onChange={(e) => updateField('company', e.target.value)}
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-[#64748b] focus:border-[#00d4ff]/40 focus:outline-none transition-colors min-h-[44px]"
                    placeholder="Kul\u00fcb / Okul ad\u0131"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="demo-branch" className="block text-sm font-medium text-[#94a3b8] mb-1.5">
                  {'Bran\u015f Se\u00e7imi'}
                </label>
                <select
                  id="demo-branch"
                  value={form.branch}
                  onChange={(e) => updateField('branch', e.target.value)}
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white focus:border-[#00d4ff]/40 focus:outline-none transition-colors min-h-[44px] appearance-none"
                >
                  <option value="" className="bg-[#0c1220] text-[#64748b]">
                    {'Bran\u015f se\u00e7in'}
                  </option>
                  {BRANCHES.map((b) => (
                    <option key={b.id} value={b.id} className="bg-[#0c1220] text-white">
                      {b.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="demo-message" className="block text-sm font-medium text-[#94a3b8] mb-1.5">
                  {'Mesaj'}
                </label>
                <textarea
                  id="demo-message"
                  rows={3}
                  value={form.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-[#64748b] focus:border-[#00d4ff]/40 focus:outline-none transition-colors resize-none"
                  placeholder="Eklemek istedi\u011finiz notlar..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 text-base py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>{'G\u00f6nderiliyor...'}</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>{'Demo Talep Et'}</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
