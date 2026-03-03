"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { Button } from "@/components/ui/button"
import { Sparkles, QrCode, Clock, ChevronRight } from "lucide-react"

const TOUR_DURATION_SEC = 90
const STEPS = [
  { title: "YİSA-S Nedir?", desc: "Yapay zeka destekli çocuk sporcu analiz ve spor okulu yönetim sistemi.", duration: 15 },
  { title: "900 Alan Değerlendirme", desc: "30 kategori × 30 alt alan ile Türkiye'nin en kapsamlı sporcu değerlendirmesi.", duration: 15 },
  { title: "6 AI Motoru", desc: "Claude, GPT, Gemini, LLaMA, Together ve Ollama ile analiz ve raporlama.", duration: 15 },
  { title: "PHV Takibi", desc: "Büyüme plağı koruması ile sakatlık önleme ve bilimsel antrenman planı.", duration: 15 },
  { title: "Veli & Eğitmen Paneli", desc: "Yoklama, aidat, gelişim raporu ve mesajlaşma tek platformda.", duration: 15 },
  { title: "Demo Talep Et", desc: "14 gün ücretsiz deneyin. Hemen aşağıdaki butondan veya ana siteden talep edin.", duration: 15 },
]

export default function FuarTourPage() {
  const [remaining, setRemaining] = useState(TOUR_DURATION_SEC)
  const [stepIndex, setStepIndex] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!started) return
    let t: ReturnType<typeof setInterval>
    t = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          if (t) clearInterval(t)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(t)
  }, [started])

  useEffect(() => {
    if (!started) return
    const elapsed = TOUR_DURATION_SEC - remaining
    const newIndex = Math.min(Math.floor(elapsed / 15), STEPS.length - 1)
    setStepIndex(newIndex)
  }, [remaining, started])

  const tourUrl = typeof window !== "undefined" ? window.location.href : ""
  const qrUrl = tourUrl
    ? `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(tourUrl)}`
    : ""

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white">
      <Navbar />
      <main className="pt-20 pb-16">
        <section className="px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-[#00d4ff]" />
                  <span className="text-xs font-mono text-[#00d4ff] uppercase tracking-wider">Fuar Demo Modu</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  90 Saniyede YİSA-S
                </h1>
                <p className="text-white/60 mb-8">
                  Fuarda bu sayfayı açın; 90 saniyelik özet tur otomatik başlar. Aşağıdaki QR kodu ziyaretçilere gösterin.
                </p>

                {!started ? (
                  <Button
                    onClick={() => setStarted(true)}
                    className="bg-[#0f3460] hover:bg-[#0f3460]/90 text-white font-medium px-8 py-6 rounded-xl flex items-center gap-2"
                  >
                    <Clock className="w-5 h-5" />
                    Turu Başlat (90 sn)
                  </Button>
                ) : (
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-[#0f3460]/50 border border-[#00d4ff]/20 flex items-center justify-center">
                        <span className="text-xl font-bold text-[#00d4ff] font-mono">{remaining}</span>
                      </div>
                      <div>
                        <p className="text-xs text-white/50 uppercase tracking-wider">Kalan süre</p>
                        <p className="text-white font-medium">saniye</p>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
                      <p className="text-xs font-mono text-[#00d4ff] uppercase tracking-wider mb-2">
                        Adım {stepIndex + 1} / {STEPS.length}
                      </p>
                      <h2 className="text-xl font-bold text-white mb-2">{STEPS[stepIndex].title}</h2>
                      <p className="text-white/70">{STEPS[stepIndex].desc}</p>
                    </div>
                    {remaining === 0 && (
                      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">
                        <p className="text-emerald-400 font-medium mb-3">Tur tamamlandı.</p>
                        <Link href="/#demo">
                          <Button className="bg-emerald-600 hover:bg-emerald-500 text-white">
                            Demo Talep Et
                            <ChevronRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="w-full md:w-64 shrink-0 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col items-center">
                <QrCode className="w-8 h-8 text-[#00d4ff]/70 mb-3" />
                <p className="text-xs text-white/50 uppercase tracking-wider mb-3">Fuar QR Kodu</p>
                {qrUrl ? (
                  <img src={qrUrl} alt="90 sn tur sayfası QR kodu" className="w-40 h-40 rounded-lg bg-white" />
                ) : (
                  <div className="w-40 h-40 rounded-lg bg-white/10 flex items-center justify-center text-white/40 text-sm">
                    Yükleniyor...
                  </div>
                )}
                <p className="text-[10px] text-white/40 mt-3 text-center break-all max-w-[200px]">
                  Bu sayfanın linki
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="/fuar">
                <Button variant="outline" className="border-white/20 text-white bg-transparent">
                  Fuar Hesaplama
                </Button>
              </Link>
              <Link href="/#demo">
                <Button className="bg-[#e94560] hover:bg-[#e94560]/90 text-white">
                  Demo Talep Et
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="border-white/20 text-white bg-transparent">
                  Ana Sayfa
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
