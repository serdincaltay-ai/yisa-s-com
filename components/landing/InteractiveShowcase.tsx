'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  LayoutDashboard,
  ClipboardCheck,
  CreditCard,
  TrendingUp,
  Bot,
} from 'lucide-react'
import { SHOWCASE_SCREENS } from '@/lib/knowledge/yisas'
import { useInView } from '@/hooks/use-in-view'

const SCREEN_ICONS = [LayoutDashboard, ClipboardCheck, CreditCard, TrendingUp, Bot]

/* ─── Mock screen renderers ─── */

function DashboardScreen() {
  const stats = [
    { label: '\u00D6\u011Frenci', value: '248', color: '#00d4ff' },
    { label: 'Antren\u00F6r', value: '12', color: '#10b981' },
    { label: 'Bran\u015F', value: '6', color: '#818cf8' },
    { label: 'Aidat', value: '%92', color: '#f59e0b' },
  ]
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3">
            <p className="text-[#64748b] text-xs">{s.label}</p>
            <p className="text-2xl font-bold mt-1" style={{ color: s.color }}>{s.value}</p>
          </div>
        ))}
      </div>
      {/* Mini chart */}
      <div className="flex items-end gap-1 h-20 px-1">
        {[45, 60, 52, 78, 68, 82, 55, 90, 72, 85, 65, 95].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="flex-1 rounded-t"
            style={{ background: `linear-gradient(to top, rgba(0,212,255,0.3), rgba(0,212,255,0.8))` }}
          />
        ))}
      </div>
    </div>
  )
}

function YoklamaScreen() {
  const students = [
    { name: 'Elif Ayd\u0131n', status: true },
    { name: 'Can Demir', status: true },
    { name: 'Zeynep Kara', status: false },
    { name: 'Ahmet Y\u0131lmaz', status: true },
    { name: 'Selin \u00D6zt\u00FCrk', status: true },
    { name: 'Burak \u00C7elik', status: false },
  ]
  return (
    <div className="space-y-2">
      {students.map((s, i) => (
        <div key={i} className="flex items-center justify-between px-3 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.04]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center text-xs text-[#94a3b8] font-medium">
              {s.name.split(' ').map(n => n[0]).join('')}
            </div>
            <span className="text-sm text-[#f1f5f9]">{s.name}</span>
          </div>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
            s.status
              ? 'bg-[#10b981]/10 text-[#10b981]'
              : 'bg-[#ef4444]/10 text-[#ef4444]'
          }`}>
            {s.status ? 'Kat\u0131ld\u0131' : 'Kat\u0131lmad\u0131'}
          </span>
        </div>
      ))}
    </div>
  )
}

function OdemeScreen() {
  const rows = [
    { name: 'Ocak 2026', amount: '$250', status: '\u00D6dendi', sc: 'cyan' },
    { name: '\u015Eubat 2026', amount: '$250', status: '\u00D6dendi', sc: 'cyan' },
    { name: 'Mart 2026', amount: '$250', status: 'Bekliyor', sc: 'amber' },
    { name: 'Nisan 2026', amount: '$250', status: 'Bekliyor', sc: 'amber' },
    { name: 'May\u0131s 2026', amount: '$250', status: 'Gecikmi\u015F', sc: 'red' },
  ]
  const colorMap: Record<string, string> = {
    cyan: 'bg-[#00d4ff]/10 text-[#00d4ff]',
    amber: 'bg-[#f59e0b]/10 text-[#f59e0b]',
    red: 'bg-[#ef4444]/10 text-[#ef4444]',
  }
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-3 text-xs text-[#64748b] px-3 py-2 border-b border-white/[0.06]">
        <span>D\u00F6nem</span>
        <span className="text-right">Tutar</span>
        <span className="text-right">Durum</span>
      </div>
      {rows.map((r, i) => (
        <div key={i} className="grid grid-cols-3 items-center px-3 py-2.5 rounded-lg bg-white/[0.03]">
          <span className="text-sm text-[#f1f5f9]">{r.name}</span>
          <span className="text-sm text-[#94a3b8] text-right">{r.amount}</span>
          <span className="text-right">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${colorMap[r.sc]}`}>
              {r.status}
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}

function GelisimScreen() {
  const months = ['Oca', '\u015Eub', 'Mar', 'Nis', 'May', 'Haz']
  const lines = [
    { label: 'Boy (cm)', color: '#00d4ff', data: [135, 136, 137, 138, 140, 142] },
    { label: 'Kilo (kg)', color: '#e94560', data: [32, 32.5, 33, 33.5, 34, 34.5] },
    { label: 'Esneklik', color: '#10b981', data: [60, 65, 68, 72, 75, 80] },
  ]
  const maxVal = 142
  const minVal = 30
  const toY = (v: number) => 100 - ((v - minVal) / (maxVal - minVal)) * 100

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-4 mb-2">
        {lines.map((l) => (
          <div key={l.label} className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 rounded-full" style={{ background: l.color }} />
            <span className="text-xs text-[#64748b]">{l.label}</span>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 300 120" className="w-full h-auto">
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((y) => (
          <line key={y} x1="30" y1={y * 1.1 + 5} x2="290" y2={y * 1.1 + 5} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        ))}
        {/* Lines */}
        {lines.map((line) => {
          const points = line.data.map((v, i) => `${30 + i * 52},${toY(v) * 1.1 + 5}`).join(' ')
          return (
            <g key={line.label}>
              <polyline fill="none" stroke={line.color} strokeWidth="2" points={points} strokeLinecap="round" strokeLinejoin="round" />
              {line.data.map((v, i) => (
                <circle key={i} cx={30 + i * 52} cy={toY(v) * 1.1 + 5} r="3" fill={line.color} />
              ))}
            </g>
          )
        })}
        {/* X labels */}
        {months.map((m, i) => (
          <text key={m} x={30 + i * 52} y="118" textAnchor="middle" fill="#64748b" fontSize="8">{m}</text>
        ))}
      </svg>
    </div>
  )
}

function BeyinScreen() {
  const msgs = [
    { role: 'user', text: 'Elif\'in esneklik geli\u015Fimini analiz et' },
    { role: 'ai', text: 'Elif\'in son 3 ayl\u0131k esneklik verileri incelendi. %18 art\u0131\u015F g\u00F6zleniyor. Antrenman yo\u011Funlu\u011Fu optimize edilmeli.' },
    { role: 'user', text: 'PHV d\u00F6nemine ne kadar kald\u0131?' },
    { role: 'ai', text: 'Mevcut b\u00FCy\u00FCme h\u0131z\u0131na g\u00F6re tahmini 8-10 ay i\u00E7inde PHV d\u00F6nemine girecek. Antrenman plan\u0131n\u0131 \u015Fimdiden uyarlaman\u0131z\u0131 \u00F6neriyorum.' },
  ]
  return (
    <div className="space-y-3">
      {/* Motor selector */}
      <div className="flex items-center gap-2 mb-3">
        {['Motor A', 'Motor B', 'Motor C'].map((m, i) => (
          <button
            key={m}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              i === 0
                ? 'bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20'
                : 'bg-white/[0.03] text-[#64748b] border border-white/[0.04]'
            }`}
          >
            {m}
          </button>
        ))}
      </div>
      {/* Chat bubbles */}
      {msgs.map((m, i) => (
        <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div
            className={`max-w-[80%] rounded-xl px-3 py-2 text-xs leading-relaxed ${
              m.role === 'user'
                ? 'bg-[#0f3460]/40 text-[#f1f5f9] rounded-br-md'
                : 'bg-white/[0.04] text-[#94a3b8] rounded-bl-md'
            }`}
          >
            {m.text}
          </div>
        </div>
      ))}
    </div>
  )
}

const SCREEN_RENDERERS = [DashboardScreen, YoklamaScreen, OdemeScreen, GelisimScreen, BeyinScreen]

export default function InteractiveShowcase() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [modalIdx, setModalIdx] = useState<number | null>(null)
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.2 })

  // Auto cycle
  useEffect(() => {
    if (modalIdx !== null) return
    const t = setInterval(() => setActiveIdx((i) => (i + 1) % 5), 5000)
    return () => clearInterval(t)
  }, [modalIdx])

  const ActiveScreen = SCREEN_RENDERERS[activeIdx]
  const ModalScreen = modalIdx !== null ? SCREEN_RENDERERS[modalIdx] : null

  return (
    <section ref={ref} className="section relative overflow-hidden">
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 text-balance">
            {'Platformu Ke\u015Ffedin'}
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto text-pretty">
            {'YiSA-S panelinin ger\u00E7ek ekran g\u00F6r\u00FCnt\u00FCleri. T\u0131klayarak detayl\u0131 inceleyebilirsiniz.'}
          </p>
        </motion.div>

        {/* Monitor frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl border border-white/[0.08] bg-[#0c1220] overflow-hidden neon-border-cyan">
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-[#0a0e1a]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                <span className="w-3 h-3 rounded-full bg-[#10b981]" />
                <span className="ml-4 text-xs text-[#64748b] font-mono hidden sm:inline">app.yisa-s.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-xs font-semibold text-[#10b981]">CANLI</span>
              </div>
            </div>

            {/* Screen */}
            <div
              className="relative min-h-[340px] sm:min-h-[380px] p-5 sm:p-6 cursor-pointer"
              onClick={() => setModalIdx(activeIdx)}
              role="button"
              tabIndex={0}
              aria-label={'B\u00FCy\u00FCt\u00FCp inceleyin'}
              onKeyDown={(e) => e.key === 'Enter' && setModalIdx(activeIdx)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35 }}
                >
                  <ActiveScreen />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 pb-4">
              {SHOWCASE_SCREENS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label={`Ekran ${i + 1}`}
                >
                  <span className={`block rounded-full transition-all ${
                    i === activeIdx ? 'w-6 h-2 bg-[#00d4ff]' : 'w-2 h-2 bg-white/20'
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Mini cards */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-6">
            {SHOWCASE_SCREENS.map((s, i) => {
              const Icon = SCREEN_ICONS[i]
              return (
                <motion.button
                  key={s.id}
                  onClick={() => setActiveIdx(i)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all min-h-[44px] ${
                    i === activeIdx
                      ? 'bg-[#00d4ff]/10 border-[#00d4ff]/30 text-[#00d4ff]'
                      : 'bg-white/[0.02] border-white/[0.06] text-[#64748b] hover:text-[#00d4ff] hover:border-[#00d4ff]/20'
                  }`}
                >
                  <Icon size={20} />
                  <span className="text-xs font-medium text-center">{s.label}</span>
                </motion.button>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalIdx !== null && ModalScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setModalIdx(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl rounded-2xl border border-white/[0.08] bg-[#0c1220] overflow-hidden"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
                <h3 className="text-white font-semibold">{SHOWCASE_SCREENS[modalIdx].label}</h3>
                <button
                  onClick={() => setModalIdx(null)}
                  className="p-2 text-[#64748b] hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Kapat"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 sm:p-8">
                <ModalScreen />
              </div>
              <div className="px-6 pb-5">
                <p className="text-sm text-[#94a3b8]">{SHOWCASE_SCREENS[modalIdx].description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
