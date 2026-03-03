"use client"

import Link from "next/link"
import { QrCode, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FuarBanner() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f3460]/30 via-[#00d4ff]/5 to-transparent" />
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="rounded-2xl border border-[#00d4ff]/20 bg-white/[0.02] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-[#00d4ff]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Fuar & Tanıtım</h3>
              <p className="text-sm text-white/50">
                Tesis potansiyeli hesaplayıcı ve 90 saniyelik demo turu. Fuarda QR ile paylaşın.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/fuar">
              <Button variant="outline" className="border-white/20 text-white bg-transparent hover:bg-white/5">
                Hesaplama
              </Button>
            </Link>
            <Link href="/fuar/tour">
              <Button className="bg-[#0f3460] hover:bg-[#0f3460]/90 text-white gap-2">
                <QrCode className="w-4 h-4" />
                90 sn Tur (QR)
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
