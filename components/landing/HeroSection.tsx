'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Play,
  ChevronLeft,
  ChevronRight,
  Bot,
  Users,
  Building2,
  Dumbbell,
  UserCheck,
} from 'lucide-react'
import { STATS, HERO_SLOGANS } from '@/lib/knowledge/yisas'

const PANELS = [
  { label: 'Patron Paneli', icon: Building2, desc: 'T\u00FCm verileri tek ekrandan y\u00F6netin' },
  { label: 'Antren\u00F6r Paneli', icon: Dumbbell, desc: 'Antrenman planla, sporcu takip et' },
  { label: 'Tesis Y\u00F6netimi', icon: Building2, desc: 'Bran\u015F, saha ve ekipman y\u00F6netimi' },
  { label: 'Sporcu Takibi', icon: UserCheck, desc: '900 alanl\u0131 geli\u015Fim analizi' },
  { label: 'Veli Paneli', icon: Users, desc: '\u00C7ocu\u011Funuzun geli\u015Fimini izleyin' },
]

export default function HeroSection() {
  const [sloganIdx, setSloganIdx] = useState(0)
  const [panelIdx, setPanelIdx] = useState(0)

  // Rotate slogans
  useEffect(() => {
    const t = setInterval(() => setSloganIdx((i) => (i + 1) % HERO_SLOGANS.length), 3500)
    return () => clearInterval(t)
  }, [])

  // Auto-slide panels
  useEffect(() => {
    const t = setInterval(() => setPanelIdx((i) => (i + 1) % PANELS.length), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f3460]/20 via-[#060a13] to-[#060a13]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00d4ff]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#e94560]/5 rounded-full blur-[120px]" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left - Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f3460]/30 border border-[#00d4ff]/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
              <span className="text-[#00d4ff] text-xs sm:text-sm font-medium tracking-wide">
                {'TUZLA C\u0130MNAST\u0130K SPOR OKULU & HOB\u0130 GYM'}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-balance leading-tight mb-4"
            >
              <span className="text-gradient neon-cyan">
                {'Teknolojiyi Spora'}
              </span>
              <br />
              <span className="text-white">
                {'Ba\u015Flatt\u0131k'}
              </span>
            </motion.h1>

            {/* Rotating slogan */}
            <div className="h-8 mb-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={sloganIdx}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-[#94a3b8] text-base sm:text-lg"
                >
                  {HERO_SLOGANS[sloganIdx]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[#94a3b8] text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              {'YiSA-S, \u00E7ocuk sporcular\u0131n geli\u015Fimini 900 farkl\u0131 alanda takip eden, yapay zeka destekli analiz ve PHV (b\u00FCy\u00FCme pla\u011F\u0131) takibi yapan T\u00FCrkiye\'nin \u00F6nc\u00FC sporcu de\u011Ferlendirme sistemidir.'}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-10"
            >
              <button
                onClick={() => document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary w-full sm:w-auto text-base px-8 py-4"
              >
                {'\u00DCcretsiz Demo'}
              </button>
              <button className="btn-secondary w-full sm:w-auto text-base px-8 py-4 flex items-center justify-center gap-2">
                <Play size={18} />
                {'Tan\u0131t\u0131m \u0130zle'}
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  className="text-center lg:text-left p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                >
                  <p className="text-2xl font-bold text-[#00d4ff]">
                    {stat.value}{stat.suffix}
                  </p>
                  <p className="text-xs text-[#64748b] mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Panel Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex-1 w-full max-w-lg lg:max-w-xl"
          >
            <div className="relative rounded-2xl border border-white/[0.08] bg-[#0c1220] overflow-hidden neon-border-cyan">
              {/* Top bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-[#0c1220]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                  <span className="w-3 h-3 rounded-full bg-[#10b981]" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                  <span className="text-xs font-medium text-[#10b981]">CANLI</span>
                </div>
              </div>

              {/* Panel content */}
              <div className="relative h-[320px] sm:h-[360px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={panelIdx}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 p-6 flex flex-col"
                  >
                    {/* Panel header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#0f3460]/40 border border-[#00d4ff]/20 flex items-center justify-center">
                        {(() => {
                          const Icon = PANELS[panelIdx].icon
                          return <Icon size={24} className="text-[#00d4ff]" />
                        })()}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">{PANELS[panelIdx].label}</h3>
                        <p className="text-[#64748b] text-sm">{PANELS[panelIdx].desc}</p>
                      </div>
                    </div>

                    {/* Mock content */}
                    <div className="flex-1 space-y-3">
                      {[1, 2, 3, 4].map((row) => (
                        <div key={row} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06]" />
                          <div className="flex-1 space-y-1.5">
                            <div className="h-3 rounded-full bg-white/[0.06]" style={{ width: `${65 + row * 8}%` }} />
                            <div className="h-2 rounded-full bg-white/[0.03]" style={{ width: `${40 + row * 10}%` }} />
                          </div>
                          <div
                            className="px-2.5 py-1 rounded-full text-[10px] font-medium"
                            style={{
                              background: row % 2 === 0 ? 'rgba(0,212,255,0.1)' : 'rgba(16,185,129,0.1)',
                              color: row % 2 === 0 ? '#00d4ff' : '#10b981',
                            }}
                          >
                            {row % 2 === 0 ? 'Aktif' : 'Tamam'}
                          </div>
                        </div>
                      ))}

                      {/* Mini chart */}
                      <div className="mt-4 flex items-end gap-1.5 h-16 px-2">
                        {[40, 65, 55, 80, 45, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: 0.1 * i, duration: 0.4 }}
                            className="flex-1 rounded-t bg-gradient-to-t from-[#00d4ff]/40 to-[#00d4ff]/80"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation arrows + dots */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-white/[0.06] bg-[#0c1220]">
                <button
                  onClick={() => setPanelIdx((i) => (i - 1 + PANELS.length) % PANELS.length)}
                  className="p-2 text-[#64748b] hover:text-[#00d4ff] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="\u00D6nceki panel"
                >
                  <ChevronLeft size={18} />
                </button>
                <div className="flex items-center gap-2">
                  {PANELS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPanelIdx(i)}
                      className={`w-2 h-2 rounded-full transition-all min-w-[44px] min-h-[44px] flex items-center justify-center ${
                        i === panelIdx ? '' : ''
                      }`}
                      aria-label={`Panel ${i + 1}`}
                    >
                      <span className={`w-2 h-2 rounded-full transition-all ${
                        i === panelIdx ? 'bg-[#00d4ff] w-4' : 'bg-white/20'
                      }`} />
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setPanelIdx((i) => (i + 1) % PANELS.length)}
                  className="p-2 text-[#64748b] hover:text-[#00d4ff] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Sonraki panel"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
