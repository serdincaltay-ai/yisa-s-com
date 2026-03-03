"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { Button } from "@/components/ui/button"

type Kategori = "web" | "logo" | "panel"

const WEB_TEMALARI = [
  { id: "klasik", ad: "Klasik", aciklama: "Sade ve güven veren kurumsal görünüm." },
  { id: "modern", ad: "Modern", aciklama: "Minimal ve çağdaş tasarım." },
  { id: "spor", ad: "Spor", aciklama: "Dinamik ve enerji dolu arayüz." },
]

const LOGO_STILLERI = [
  { id: "minimalist", ad: "Minimalist", aciklama: "Sade çizgiler, akılda kalıcı." },
  { id: "dinamik", ad: "Dinamik", aciklama: "Hareket ve güç vurgusu." },
  { id: "kurumsal", ad: "Kurumsal", aciklama: "Profesyonel ve güvenilir." },
]

const PANEL_TEMALARI = [
  { id: "koyu", ad: "Koyu", aciklama: "Göz yormayan koyu tema." },
  { id: "acik", ad: "Açık", aciklama: "Ferah ve aydınlık panel." },
  { id: "renkli", ad: "Renkli", aciklama: "Branşa göre renkli modüller." },
]

function Kart({
  ad,
  aciklama,
  gradient,
}: {
  ad: string
  aciklama: string
  gradient: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-[#00d4ff]/30 transition-colors">
      <div className={`h-36 ${gradient}`} />
      <div className="p-4">
        <h3 className="font-semibold text-white mb-1">{ad}</h3>
        <p className="text-sm text-white/60 mb-4">{aciklama}</p>
        <Link href="/#demo">
          <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10 w-full">
            Demo İste
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default function SablonlarPage() {
  const [kategori, setKategori] = useState<Kategori>("web")

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white">
      <Navbar />
      <main className="pt-20">
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tesisiniz İçin Hazır Şablonlar
            </h1>
            <p className="text-white/60">
              Web sitesi, logo ve panel temalarıyla hızlıca başlayın.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center gap-2 mb-10 flex-wrap">
              <button
                type="button"
                onClick={() => setKategori("web")}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  kategori === "web"
                    ? "bg-[#0f3460] text-white"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                Web Sitesi Temaları
              </button>
              <button
                type="button"
                onClick={() => setKategori("logo")}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  kategori === "logo"
                    ? "bg-[#0f3460] text-white"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                Logo Stilleri
              </button>
              <button
                type="button"
                onClick={() => setKategori("panel")}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  kategori === "panel"
                    ? "bg-[#0f3460] text-white"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                Panel Temaları
              </button>
            </div>

            {kategori === "web" && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {WEB_TEMALARI.map((t) => (
                  <Kart
                    key={t.id}
                    ad={t.ad}
                    aciklama={t.aciklama}
                    gradient="bg-gradient-to-br from-[#0f3460] to-[#00d4ff]/40"
                  />
                ))}
              </div>
            )}
            {kategori === "logo" && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {LOGO_STILLERI.map((t) => (
                  <Kart
                    key={t.id}
                    ad={t.ad}
                    aciklama={t.aciklama}
                    gradient="bg-gradient-to-br from-[#e94560]/30 to-[#0f3460]"
                  />
                ))}
              </div>
            )}
            {kategori === "panel" && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PANEL_TEMALARI.map((t) => (
                  <Kart
                    key={t.id}
                    ad={t.ad}
                    aciklama={t.aciklama}
                    gradient="bg-gradient-to-br from-[#0a0a1a] via-[#0f3460]/50 to-[#00d4ff]/30"
                  />
                ))}
              </div>
            )}

            <div className="mt-12 text-center">
              <Link href="/#demo">
                <Button
                  size="lg"
                  className="bg-[#e94560] hover:bg-[#e94560]/90 text-white font-medium px-8 py-6 rounded-xl"
                >
                  Demo İste
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
