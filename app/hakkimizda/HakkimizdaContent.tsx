'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Mail, MapPin } from 'lucide-react'

export default function HakkimizdaContent() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="text-gradient">Hakkımızda</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              YİSA-S ekibi, misyonumuz ve iletişim bilgileri.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Misyonumuz</h2>
            <p className="text-slate-400 mb-6">
              Çocuk sporcuların bilimsel verilerle değerlendirilmesi, gelişim takibi ve doğru yönlendirme ile sporda sürdürülebilir başarıyı hedefliyoruz.
            </p>
            <h2 className="text-2xl font-bold text-white mb-4">İletişim</h2>
            <p className="text-slate-400 flex items-center gap-2">
              <Mail size={18} className="text-amber-400" />
              E-posta: iletişim için formu kullanabilirsiniz.
            </p>
            <p className="text-slate-400 flex items-center gap-2 mt-2">
              <MapPin size={18} className="text-amber-400" />
              Adres bilgisi için bizimle iletişime geçin.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-xl transition-colors"
          >
            Tanıtım Talebi <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
