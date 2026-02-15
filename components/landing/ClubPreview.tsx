'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Bot, Users, BarChart3, Settings, CreditCard, ClipboardCheck } from 'lucide-react'
import { CLUB_PREVIEWS } from '@/lib/knowledge/yisas'
import { useInView } from '@/hooks/use-in-view'

export default function ClubPreview() {
  const [activeIdx, setActiveIdx] = useState(0)
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })
  const club = CLUB_PREVIEWS[activeIdx]

  return (
    <section ref={ref} className="section relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 text-balance">
            {'Kul\u00fcb\u00fcn\u00fcz\u00fc Se\u00e7in, Paneli G\u00f6r\u00fcn'}
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto text-pretty">
            {'Her kul\u00fcbe \u00f6zel renkler, logolar ve dashboard. Tamamen \u00f6zelle\u015ftirilebilir.'}
          </p>
        </motion.div>

        {/* Club selectors */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {CLUB_PREVIEWS.map((c, i) => (
            <motion.button
              key={c.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08 }}
              onClick={() => setActiveIdx(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border transition-all min-h-[44px] ${
                i === activeIdx
                  ? 'border-white/20 shadow-lg'
                  : 'border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04]'
              }`}
              style={
                i === activeIdx
                  ? { backgroundColor: `${c.color}20`, borderColor: `${c.color}40` }
                  : undefined
              }
            >
              <div
                className="w-6 h-6 rounded-full border-2"
                style={{ borderColor: c.color, backgroundColor: i === activeIdx ? c.color : 'transparent' }}
              />
              <span className="text-sm font-medium text-white">{c.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Mock dashboard */}
        <motion.div
          key={activeIdx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto rounded-2xl border border-white/[0.08] bg-[#0c1220] overflow-hidden"
        >
          {/* Dashboard header */}
          <div
            className="px-5 py-4 flex items-center justify-between"
            style={{ backgroundColor: club.color }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <span className="font-bold text-sm" style={{ color: club.textColor }}>
                  {club.name[0]}
                </span>
              </div>
              <span className="font-semibold text-sm" style={{ color: club.textColor }}>
                {club.name}
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20">
              <Bot size={14} style={{ color: club.textColor }} />
              <span className="text-xs font-medium" style={{ color: club.textColor }}>
                {'Robotlar Aktif'}
              </span>
            </div>
          </div>

          {/* Dashboard body */}
          <div className="p-5 space-y-4">
            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: '\u00d6\u011frenci', value: '186', icon: Users },
                { label: 'Aidat', value: '%94', icon: CreditCard },
                { label: 'Yoklama', value: '%87', icon: ClipboardCheck },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <stat.icon size={14} className="text-[#64748b]" />
                    <span className="text-xs text-[#64748b]">{stat.label}</span>
                  </div>
                  <p className="text-xl font-bold" style={{ color: club.color }}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Menu rows */}
            {[
              { icon: BarChart3, label: 'Geli\u015fim Raporlar\u0131', badge: 'Yeni' },
              { icon: Settings, label: 'Sistem Ayarlar\u0131', badge: '' },
              { icon: Bot, label: 'Beyin Tak\u0131m\u0131', badge: 'AI' },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <row.icon size={16} className="text-[#64748b]" />
                  <span className="text-sm text-[#f1f5f9]">{row.label}</span>
                </div>
                {row.badge && (
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${club.color}20`, color: club.color }}
                  >
                    {row.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-[#64748b] mt-8 max-w-xl mx-auto"
        >
          {'12+ haz\u0131r web sitesi \u015fablonu, 15+ dashboard \u015fablonu, 25+ Instagram \u015fablonu dahildir.'}
        </motion.p>
      </div>
    </section>
  )
}
