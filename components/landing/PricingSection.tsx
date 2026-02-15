'use client'

import { motion } from 'framer-motion'
import { Check, X, ArrowRight } from 'lucide-react'
import { PACKAGES } from '@/lib/knowledge/yisas'
import { useInView } from '@/hooks/use-in-view'

export default function PricingSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} id="fiyatlar" className="section relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 text-balance">
            {'Fiyatland\u0131rma'}
          </h2>
          <p className="text-[#94a3b8] max-w-2xl mx-auto text-pretty">
            {'\u0130htiyac\u0131n\u0131za uygun paketi se\u00e7in. T\u00fcm paketlerde 4 robot aktif.'}
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative flex flex-col rounded-2xl border overflow-hidden ${
                pkg.popular
                  ? 'border-[#e94560]/40 bg-[#0c1220] neon-border-accent'
                  : 'border-white/[0.08] bg-[#0c1220]'
              }`}
            >
              {/* Popular badge */}
              {pkg.popular && (
                <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-xl bg-[#e94560] text-white text-xs font-bold">
                  {'EN POP\u00dcLER'}
                </div>
              )}

              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                {/* Name & description */}
                <h3 className="text-xl font-bold text-white mb-1">{pkg.name}</h3>
                <p className="text-sm text-[#64748b] mb-6">{pkg.description}</p>

                {/* Price */}
                <div className="mb-6">
                  {pkg.price === -1 ? (
                    <div>
                      <span className="text-3xl font-bold text-white">
                        {'\u00d6zel Fiyat'}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">
                        {pkg.currency}{pkg.price.toLocaleString('tr-TR')}
                      </span>
                      <span className="text-[#64748b]">/ {pkg.period}</span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-3 flex-1">
                  {pkg.features.map((feature, fi) => (
                    <div key={fi} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check size={16} className="text-[#10b981] mt-0.5 shrink-0" />
                      ) : (
                        <X size={16} className="text-[#64748b] mt-0.5 shrink-0" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? 'text-[#f1f5f9]' : 'text-[#64748b]'
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() =>
                    document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className={`mt-8 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold transition-all min-h-[44px] ${
                    pkg.popular
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Token note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 max-w-3xl mx-auto"
        >
          <div className="p-4 rounded-xl bg-[#0f3460]/10 border border-[#0f3460]/20 text-center">
            <p className="text-sm text-[#94a3b8]">
              {'Token hakk\u0131nda: Yapay zeka motorlar\u0131 token bazl\u0131 \u00e7al\u0131\u015f\u0131r. Standart pakette token \u00fccretleri ayr\u0131ca yans\u0131t\u0131l\u0131r, Premium pakette belirli bir token kotasnna dahildir.'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
