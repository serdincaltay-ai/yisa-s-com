"use client"

import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"

const packages = [
  {
    name: "Standart Paket",
    price: "3.000₺",
    period: "ay",
    desc: "Yazılım altyapısı + token sistemi",
    features: [
      "Yapay zeka destekli yönetim paneli",
      "Tüm robot özellikleri",
      "Sporcu gelişim takibi",
      "Veli paneli erişimi",
      "Antrenör paneli",
      "Temel raporlama",
      "Token ile özelleştirme",
    ],
    popular: false,
    cta: "Başvur",
  },
  {
    name: "Premium Paket",
    price: "3.000₺",
    period: "ay",
    desc: "Şablon + logo + renk + token dahil",
    features: [
      "Standart paketteki her şey",
      "Özel şablon tasarımı",
      "Özel logo tasarımı",
      "Özel renk paleti",
      "Token paketi dahil",
      "Gelişmiş performans analizi",
      "Öncelikli destek",
      "Franchise hazırlık desteği",
    ],
    popular: true,
    cta: "Demo Talep Et",
  },
  {
    name: "Kurumsal Paket",
    price: "Özel Fiyat",
    period: "",
    desc: "Çoklu tesis, özel entegrasyon",
    features: [
      "Premium paketteki her şey",
      "Sınırsız tesis",
      "Özel API entegrasyonu",
      "7/24 özel destek",
      "Eğitim ve danışmanlık",
      "Beyaz etiket çözüm",
      "Özel robot geliştirme",
      "SLA garantisi",
      "Yıllık sözleşme indirimi",
    ],
    popular: false,
    cta: "Bizimle Konuşun",
  },
]

export function Pricing() {
  const { ref, visible } = useInView()

  return (
    <section id="pricing" className="py-24 md:py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="text-xs font-mono tracking-[0.3em] text-[#818cf8] uppercase mb-4 block">Fiyatlandırma</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
            Net Fiyatlar, Güçlü Altyapı
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-pretty">
            Yapay zeka destekli antrenman programı, sporcu gelişim takibi ve veli paneli tüm paketlere dahildir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col p-6 md:p-8 rounded-xl border transition-all hover:-translate-y-1 ${
                pkg.popular ? "border-[#818cf8]/50 bg-[#818cf8]/5 shadow-lg shadow-[#818cf8]/10 scale-[1.02]" : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 rounded-full bg-[#818cf8] text-white text-xs font-mono font-bold tracking-wider">
                  <Star className="w-3 h-3" />
                  EN POPÜLER
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white font-mono">{pkg.name}</h3>
                <p className="text-sm text-white/40 mt-1">{pkg.desc}</p>
              </div>

              <div className="mb-6">
                <span className="text-3xl md:text-4xl font-bold text-white">{pkg.price}</span>
                {pkg.period && <span className="text-sm text-white/40 ml-2">/ {pkg.period}</span>}
                {pkg.name === "Premium Paket" && <span className="ml-2 text-xs text-emerald-400 font-mono">şablon + logo dahil</span>}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-white/50">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full font-mono tracking-wider min-h-[44px] transition-all ${pkg.popular ? "bg-[#818cf8] text-white hover:bg-[#818cf8]/80 hover:shadow-lg hover:shadow-[#818cf8]/20" : "bg-white/10 text-white hover:bg-white/15"}`}
                onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
              >
                {pkg.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-white/30 mt-8 font-mono">
          Token sistemi: Logo, renk, şablon seçimi token harcar. Tüm paketlere dahil: yapay zeka destekli antrenman, sporcu takibi, veli paneli.
        </p>
      </div>
    </section>
  )
}
