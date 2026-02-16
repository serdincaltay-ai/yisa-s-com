"use client"

import Link from "next/link"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { Button } from "@/components/ui/button"
import {
  Cpu,
  TrendingUp,
  CreditCard,
  ClipboardCheck,
  Users,
  ShoppingBag,
  Check,
} from "lucide-react"

const PAKETLER = [
  {
    ad: "BAŞLANGIÇ",
    fiyat: "3.000 ₺",
    ozellikler: ["1 web sitesi", "1 panel", "Temel robotlar", "100 token/ay"],
  },
  {
    ad: "PRO",
    fiyat: "5.000 ₺",
    ozellikler: [
      "2 web sitesi",
      "Gelişmiş panel",
      "4 robot",
      "500 token/ay",
      "Gelişim takibi",
    ],
  },
  {
    ad: "ELİT",
    fiyat: "8.000 ₺",
    ozellikler: [
      "Sınırsız web",
      "Özel tasarım",
      "Tüm robotlar",
      "1000 token/ay",
      "Öncelikli destek",
    ],
  },
]

const OZELLIKLER = [
  {
    baslik: "AI Destekli Yönetim",
    aciklama: "Yapay zeka ile planlama, raporlama ve karar destek.",
    ikon: Cpu,
  },
  {
    baslik: "Çocuk Gelişim Takibi",
    aciklama: "PHV ve 900 alan değerlendirmesi ile güvenli gelişim.",
    ikon: TrendingUp,
  },
  {
    baslik: "Dijital Kredi Sistemi",
    aciklama: "Aidat, ödeme ve paket yönetimi tek panelde.",
    ikon: CreditCard,
  },
  {
    baslik: "Otomatik Yoklama",
    aciklama: "Ders ve sporcu bazlı yoklama, raporlama.",
    ikon: ClipboardCheck,
  },
  {
    baslik: "Veli Paneli",
    aciklama: "Veliler gelişim ve program bilgisine güvenle erişir.",
    ikon: Users,
  },
  {
    baslik: "Token Mağazası",
    aciklama: "AI kullanımı için esnek token paketleri.",
    ikon: ShoppingBag,
  },
]

export default function FranchisePage() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-20 md:py-28 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[#0f3460]/20 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#00d4ff]/5 to-transparent" />
          <div className="max-w-4xl mx-auto relative text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Spor Okulunuzu Dijitale Taşıyın
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8">
              YİSA-S ile tesisinizi AI destekli yönetin
            </p>
            <Link href="/#demo">
              <Button
                size="lg"
                className="bg-[#e94560] hover:bg-[#e94560]/90 text-white font-medium px-8 py-6 rounded-xl"
              >
                Demo İste
              </Button>
            </Link>
          </div>
        </section>

        {/* Paket karşılaştırma */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Paket Karşılaştırma
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {PAKETLER.map((p) => (
                <div
                  key={p.ad}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col"
                >
                  <h3 className="text-lg font-bold text-[#00d4ff] mb-2">{p.ad}</h3>
                  <p className="text-2xl font-bold text-white mb-6">{p.fiyat}</p>
                  <ul className="space-y-3 flex-1">
                    {p.ozellikler.map((o) => (
                      <li key={o} className="flex items-center gap-2 text-sm text-white/80">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        {o}
                      </li>
                    ))}
                  </ul>
                  <Link href="/#demo" className="mt-6 block">
                    <Button
                      variant="outline"
                      className="w-full border-[#0f3460] text-white hover:bg-[#0f3460]/30"
                    >
                      Demo İste
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Özellikler */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Özellikler
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {OZELLIKLER.map((o) => (
                <div
                  key={o.baslik}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:border-[#00d4ff]/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0f3460]/50 flex items-center justify-center mb-4">
                    <o.ikon className="w-6 h-6 text-[#00d4ff]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{o.baslik}</h3>
                  <p className="text-sm text-white/60">{o.aciklama}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Link href="/#demo">
              <Button
                size="lg"
                className="bg-[#e94560] hover:bg-[#e94560]/90 text-white font-medium px-8 py-6 rounded-xl"
              >
                Demo İste
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
