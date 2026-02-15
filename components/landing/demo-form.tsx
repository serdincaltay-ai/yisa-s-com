"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"

export function DemoForm() {
  const [form, setForm] = useState({ ad: "", email: "", telefon: "", kurum: "", brans: "", mesaj: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const { ref, visible } = useInView()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("success")
        setForm({ ad: "", email: "", telefon: "", kurum: "", brans: "", mesaj: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <section id="demo" className="py-24 md:py-32 relative">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Talebiniz Alındı!</h2>
          <p className="text-white/50 mb-6">
            YİSA-S ekibi en kısa sürede sizinle iletişime geçecektir.
            Demo görüşmesi için takviminizi kontrol edin.
          </p>
          <Button variant="outline" onClick={() => setStatus("idle")} className="font-mono border-white/20 text-white bg-transparent min-h-[44px]">
            Yeni Talep Oluştur
          </Button>
        </div>
      </section>
    )
  }

  return (
    <section id="demo" className="py-24 md:py-32 relative" ref={ref}>
      <div className={`max-w-4xl mx-auto px-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] text-[#818cf8] uppercase mb-4 block">İletişim</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Demo Talep Edin, Farkı Görün
            </h2>
            <p className="text-white/50 leading-relaxed mb-8 text-pretty">
              30 dakikalık canlı demo görüşmesinde sistemi yakından tanıyın.
              Kulübünüze özel çözümleri keşfedelim.
            </p>

            <div className="space-y-4">
              {[
                { title: "Canlı Demo", desc: "Gerçek verilerle canlı sistem gösterimi" },
                { title: "Özel Analiz", desc: "Kulübünüze özel ihtiyaç analizi" },
                { title: "Fiyat Teklifi", desc: "Kullanım senaryonuza göre fiyatlandırma" },
                { title: "Hızlı Başlangıç", desc: "24 saat içinde sisteminiz hazır" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-[#818cf8]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#818cf8]/20 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#818cf8]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-white/40">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-xl border border-white/10 bg-white/[0.02]">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-white/40 font-mono block mb-1.5">Ad Soyad *</label>
                  <Input value={form.ad} onChange={(e) => setForm({ ...form, ad: e.target.value })} required placeholder="Adınız Soyadınız" className="min-h-[44px]" />
                </div>
                <div>
                  <label className="text-xs text-white/40 font-mono block mb-1.5">Telefon</label>
                  <Input value={form.telefon} onChange={(e) => setForm({ ...form, telefon: e.target.value })} placeholder="05XX XXX XX XX" className="min-h-[44px]" />
                </div>
              </div>
              <div>
                <label className="text-xs text-white/40 font-mono block mb-1.5">E-posta *</label>
                <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required placeholder="email@kurum.com" className="min-h-[44px]" />
              </div>
              <div>
                <label className="text-xs text-white/40 font-mono block mb-1.5">Kurum / Kulüp Adı</label>
                <Input value={form.kurum} onChange={(e) => setForm({ ...form, kurum: e.target.value })} placeholder="Spor okulu veya kulübünüzün adı" className="min-h-[44px]" />
              </div>
              <div>
                <label className="text-xs text-white/40 font-mono block mb-1.5">İlgilendiğiniz Branş</label>
                <select
                  value={form.brans}
                  onChange={(e) => setForm({ ...form, brans: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-white/10 bg-[#060a13] text-white text-sm min-h-[44px]"
                >
                  <option value="">Seçin...</option>
                  <option value="cimnastik">Cimnastik</option>
                  <option value="voleybol">Voleybol</option>
                  <option value="basketbol">Basketbol</option>
                  <option value="futbol">Futbol</option>
                  <option value="tenis">Tenis</option>
                  <option value="yuzme">Yüzme</option>
                  <option value="coklu">Birden Fazla Branş</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-white/40 font-mono block mb-1.5">Mesajınız</label>
                <textarea
                  value={form.mesaj}
                  onChange={(e) => setForm({ ...form, mesaj: e.target.value })}
                  rows={3}
                  placeholder="İhtiyaçlarınızı kısa bir şekilde anlatabilirsiniz..."
                  className="w-full px-3 py-2 rounded-md border border-white/10 bg-[#060a13] text-white text-sm resize-none placeholder:text-white/20"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-xs text-red-400">
                  <AlertCircle className="w-4 h-4" />
                  Bir hata oluştu. Lütfen tekrar deneyin.
                </div>
              )}

              <Button type="submit" disabled={status === "loading"} className="w-full bg-[#818cf8] text-white hover:bg-[#818cf8]/80 font-mono tracking-wider min-h-[44px]">
                {status === "loading" ? "Gönderiliyor..." : "Demo Talep Et"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
