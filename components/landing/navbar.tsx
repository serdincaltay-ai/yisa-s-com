"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  { label: "Özellikler", href: "#features" },
  { label: "Branşlar", href: "#branches" },
  { label: "Fiyatlar", href: "#pricing" },
  { label: "Demo", href: "/demo" },
  { label: "Mağaza", href: "/magaza" },
  { label: "Franchise", href: "/franchise" },
  { label: "Fuar", href: "/fuar" },
  { label: "Şablonlar", href: "/sablonlar" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [logoLoaded, setLogoLoaded] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLogoLoaded(true), 300)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navigate = (href: string) => {
    setOpen(false)
    if (href.startsWith("#")) {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: "smooth" })
    } else {
      window.location.href = href
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${scrolled ? "border-white/10 bg-[#060a13]/95 backdrop-blur-md shadow-lg shadow-black/20" : "border-transparent bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <div
          className={`flex items-center gap-2 cursor-pointer group transition-all duration-700 ${logoLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="relative w-10 h-10 rounded-lg bg-[#818cf8]/10 flex items-center justify-center overflow-hidden group-hover:bg-[#818cf8]/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
            <span className="text-base font-bold text-[#818cf8] font-mono relative z-10">Y</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white font-mono tracking-tight group-hover:tracking-wide transition-all duration-500">
              YiSA<span className="text-[#e94560] group-hover:text-[#00d4ff] transition-colors duration-500">-S</span>
            </span>
            <span className="text-[9px] text-white/30 font-mono tracking-widest">yisa-s.com</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => navigate(link.href)}
              className="text-sm text-white/50 hover:text-white transition-colors font-mono relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#818cf8] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" className="font-mono text-xs tracking-wider border-white/20 text-white bg-transparent hover:bg-white/5" onClick={() => navigate("/auth/login")}>
            Giriş Yap
          </Button>
          <Button size="sm" className="bg-[#818cf8] text-white hover:bg-[#818cf8]/80 font-mono text-xs tracking-wider" onClick={() => navigate("#demo")}>
            Demo Talep Et
          </Button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#060a13]/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <button key={link.label} onClick={() => navigate(link.href)} className="block w-full text-left text-sm text-white/60 hover:text-white font-mono py-2 min-h-[44px]">
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-white/10 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1 font-mono text-xs bg-transparent border-white/20 text-white min-h-[44px]" onClick={() => navigate("/auth/login")}>
                Giriş Yap
              </Button>
              <Button size="sm" className="flex-1 bg-[#818cf8] text-white font-mono text-xs min-h-[44px]" onClick={() => navigate("#demo")}>
                Demo Talep Et
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
