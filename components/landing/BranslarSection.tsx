'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'
import { BRANCHES } from '@/lib/knowledge/yisas'
import { useInView } from '@/hooks/use-in-view'

export default function BranslarSection() {
  const [activeIdx, setActiveIdx] = useState(0)
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })
  const active = BRANCHES[activeIdx]

  return (
    <section ref={ref} id="branslar" className="section relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 text-balance">
            {'6 Bran\u015f, Tek Platform'}
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto text-pretty">
            {'Her bran\u015fa \u00f6zel hareket havuzu, parametre seti ve geli\u015fim analizi.'}
          </p>
        </motion.div>

        {/* Branch cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {BRANCHES.map((branch, i) => (
            <motion.button
              key={branch.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              onClick={() => setActiveIdx(i)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`flex flex-col items-center gap-3 p-4 sm:p-5 rounded-xl border transition-all min-h-[44px] ${
                i === activeIdx
                  ? 'border-opacity-40 bg-opacity-10'
                  : 'border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04]'
              }`}
              style={
                i === activeIdx
                  ? {
                      borderColor: `${branch.color}60`,
                      backgroundColor: `${branch.color}15`,
                    }
                  : undefined
              }
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold"
                style={{ backgroundColor: `${branch.color}20`, color: branch.color }}
              >
                {branch.moves}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{branch.name}</p>
                <p className="text-xs text-[#64748b] mt-0.5">{branch.ageGroup}</p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Active branch detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-white/[0.08] bg-[#0c1220] p-6 sm:p-8"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: active.color }}
                  />
                  <h3 className="text-2xl font-bold text-white">{active.name}</h3>
                </div>
                <p className="text-[#94a3b8] leading-relaxed mb-6">{active.description}</p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                    <p className="text-xs text-[#64748b]">Hareket</p>
                    <p className="text-xl font-bold" style={{ color: active.color }}>
                      {active.moves}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                    <p className="text-xs text-[#64748b]">Parametre</p>
                    <p className="text-xl font-bold" style={{ color: active.color }}>
                      {active.params}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                    <p className="text-xs text-[#64748b]">{'Ya\u015f Grubu'}</p>
                    <p className="text-sm font-semibold text-white mt-1">{active.ageGroup}</p>
                  </div>
                </div>
              </div>

              {/* Right - abilities chart */}
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-[#94a3b8] mb-4 uppercase tracking-wide">
                  {'Sporcu Geli\u015fim Analizi'}
                </h4>
                <div className="space-y-4">
                  {active.abilities.map((ability) => (
                    <div key={ability.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-[#f1f5f9]">{ability.name}</span>
                        <span className="text-sm font-semibold" style={{ color: active.color }}>
                          {ability.value}%
                        </span>
                      </div>
                      <div className="h-2.5 rounded-full bg-white/[0.06] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${ability.value}%` }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: active.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Early detection warning */}
            <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-[#f59e0b]/5 border border-[#f59e0b]/20">
              <AlertTriangle size={20} className="text-[#f59e0b] shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-[#f59e0b] mb-1">
                  {'Erken Tespit Sistemi'}
                </p>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  {'YiSA-S, sporcu geli\u015fimindeki anormallikleri erken tespit eder. PHV (b\u00fcy\u00fcme pla\u011f\u0131) d\u00f6nemlerinde antrenman yo\u011funlu\u011funu otomatik olarak ayarlar ve sakatl\u0131k riskini en aza indirir.'}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
