"use client"

import { useState } from "react"
import { ArrowRight, ArrowLeft, Check, Building2, User, Mail, Phone, MapPin, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"
import VitrinAvatar from "@/components/tablet/VitrinAvatar"

const BRANCHES = [
  "Cimnastik",
  "Voleybol",
  "Basketbol",
  "Futbol",
  "Tenis",
  "Yüzme",
  "Jimnastik",
  "Pilates",
  "Boks",
  "Diğer",
]

const STEPS = [
  { title: "Tesis Bilgileri", icon: Building2 },
  { title: "İletişim", icon: User },
  { title: "Branşlar", icon: Dumbbell },
  { title: "Onay", icon: Check },
]

interface FormData {
  tesis_adi: string
  sehir: string
  ilce: string
  adres: string
  ad_soyad: string
  email: string
  telefon: string
  branslar: string[]
  sporcu_sayisi: string
  not: string
}

export default function KurPage() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState<FormData>({
    tesis_adi: "",
    sehir: "",
    ilce: "",
    adres: "",
    ad_soyad: "",
    email: "",
    telefon: "",
    branslar: [],
    sporcu_sayisi: "",
    not: "",
  })

  const update = (field: keyof FormData, value: string | string[]) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const toggleBranch = (branch: string) => {
    setForm((prev) => ({
      ...prev,
      branslar: prev.branslar.includes(branch)
        ? prev.branslar.filter((b) => b !== branch)
        : [...prev.branslar, branch],
    }))
  }

  const canProceed = () => {
    if (step === 0) return form.tesis_adi && form.sehir
    if (step === 1) return form.ad_soyad && form.email
    if (step === 2) return form.branslar.length > 0
    return true
  }

  const handleSubmit = async () => {
    setSubmitting(true)
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.ad_soyad,
          email: form.email,
          phone: form.telefon,
          company_name: form.tesis_adi,
          message: `Self-servis kurulum: ${form.sehir}/${form.ilce}, ${form.branslar.join(", ")}, ~${form.sporcu_sayisi || "?"} sporcu. ${form.not || ""}`.trim(),
          source: "self-servis-kur",
          athlete_count: form.sporcu_sayisi || undefined,
        }),
      })
      if (res.ok) {
        setSubmitted(true)
      }
    } catch {
      // Network error — request was NOT sent
      alert("Bağlantı hatası. Lütfen tekrar deneyin.")
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#060a13] flex flex-col items-center justify-center p-6 text-center">
        <div className="mb-6">
          <VitrinAvatar size={100} />
        </div>
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6">
          <Check className="w-8 h-8 text-emerald-500" />
        </div>
        <h1 className="text-2xl font-bold text-white font-mono mb-3">Başvurunuz Alındı!</h1>
        <p className="text-sm text-white/50 font-mono max-w-md mb-2">
          <strong className="text-white/70">{form.tesis_adi}</strong> için kurulum başvurunuz başarıyla kaydedildi.
        </p>
        <p className="text-xs text-white/40 font-mono max-w-md mb-8">
          Ekibimiz en kısa sürede sizinle iletişime geçecek. Ortalama dönüş süresi 24 saattir.
        </p>
        <Button
          onClick={() => (window.location.href = "/")}
          className="bg-[#818cf8] text-white hover:bg-[#818cf8]/80 font-mono"
        >
          Ana Sayfaya Dön
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#060a13] flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#818cf8]/10 flex items-center justify-center">
              <span className="text-sm font-bold text-[#818cf8] font-mono">Y</span>
            </div>
            <div>
              <span className="text-lg font-bold text-white font-mono">
                YiSA<span className="text-[#e94560]">-S</span>
              </span>
              <span className="text-[9px] text-white/30 font-mono ml-2">Tesis Kurulumu</span>
            </div>
          </div>
          <button
            onClick={() => (window.location.href = "/")}
            className="text-xs font-mono text-white/40 hover:text-white transition-colors"
          >
            ← Ana Sayfa
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center px-6 py-8">
        <div className="max-w-3xl w-full">
          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <VitrinAvatar size={80} />
          </div>

          <h1 className="text-2xl font-bold text-white font-mono text-center mb-2">
            Tesisinizi Kurun
          </h1>
          <p className="text-sm text-white/40 font-mono text-center mb-8">
            4 adımda tesisinizi YİSA-S sistemine kaydedin
          </p>

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {STEPS.map((s, i) => {
              const Icon = s.icon
              const isActive = i === step
              const isDone = i < step
              return (
                <div key={s.title} className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                      isDone
                        ? "bg-emerald-500/20 border border-emerald-500/40"
                        : isActive
                          ? "bg-[#818cf8]/20 border border-[#818cf8]/40"
                          : "bg-white/5 border border-white/10"
                    }`}
                  >
                    {isDone ? (
                      <Check size={14} className="text-emerald-500" />
                    ) : (
                      <Icon size={14} className={isActive ? "text-[#818cf8]" : "text-white/30"} />
                    )}
                  </div>
                  <span className={`text-[10px] font-mono hidden sm:inline ${isActive ? "text-white" : "text-white/30"}`}>
                    {s.title}
                  </span>
                  {i < STEPS.length - 1 && (
                    <div className={`w-8 h-px ${isDone ? "bg-emerald-500/40" : "bg-white/10"}`} />
                  )}
                </div>
              )
            })}
          </div>

          {/* Form steps */}
          <div className="bg-white/5 rounded-2xl border border-white/10 p-6 md:p-8">
            {step === 0 && (
              <div className="space-y-5">
                <h2 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                  <Building2 size={18} className="text-[#818cf8]" />
                  Tesis Bilgileri
                </h2>
                <div>
                  <label className="block text-xs font-mono text-white/50 mb-1.5">Tesis Adı *</label>
                  <input
                    type="text"
                    value={form.tesis_adi}
                    onChange={(e) => update("tesis_adi", e.target.value)}
                    placeholder="Örn: Tuzla Cimnastik Spor Okulu"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm font-mono text-white placeholder-white/20 outline-none focus:border-[#818cf8]/40 transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-white/50 mb-1.5">
                      <MapPin size={12} className="inline mr-1" />
                      Şehir *
                    </label>
                    <input
                      type="text"
                      value={form.sehir}
                      onChange={(e) => update("sehir", e.target.value)}
                      placeholder="İstanbul"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm font-mono text-white placeholder-white/20 outline-none focus:border-[#818cf8]/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-white/50 mb-1.5">İlçe</label>
                    <input
                      type="text"
                      value={form.ilce}
                      onChange={(e) => update("ilce", e.target.value)}
                      placeholder="Tuzla"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm font-mono text-white placeholder-white/20 outline-none focus:border-[#818cf8]/40 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono text-white/50 mb-1.5">Adres</label>
                  <textarea
                    value={form.adres}
                    onChange={(e) => update("adres", e.target.value)}
                    placeholder="Tesis adresi (opsiyonel)"
                    rows={2}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm font-mono text-white placeholder-white/20 outline-none focus:border-[#818cf8]/40 transition-colors resize-none"
                  />
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-5">
                <h2 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                  <User size={18} className="text-[#818cf8]" />
                  İletişim Bilgileri
                </h2>
                <div>
                  <label className="block text-xs font-mono text-white/50 mb-1.5">Ad Soyad *</label>
                  <input
                    type="text"
                    value={form.ad_soyad}
                    onChange={(e) => update("ad_soyad", e.target.value)}
                    placeholder="Tesis sahibi ad soyad"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm font-mono text-white placeholder-white/20 outline-none focus:border-[#818cf8]/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-white/50 mb-1.5">
                    <Mail size={12} className="inline mr-1" />
                    E-posta *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="ornek@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm font-mono text-white placeholder-white/20 outline-none focus:border-[#818cf8]/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-white/50 mb-1.5">
                    <Phone size={12} className="inline mr-1" />
                    Telefon
                  </label>
                  <input
                    type="tel"
                    value={form.telefon}
                    onChange={(e) => update("telefon", e.target.value)}
                    placeholder="05XX XXX XX XX"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm font-mono text-white placeholder-white/20 outline-none focus:border-[#818cf8]/40 transition-colors"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <h2 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                  <Dumbbell size={18} className="text-[#818cf8]" />
                  Branş Seçimi
                </h2>
                <p className="text-xs font-mono text-white/40">
                  Tesisinizde sunmak istediğiniz branşları seçin (en az 1)
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {BRANCHES.map((branch) => {
                    const selected = form.branslar.includes(branch)
                    return (
                      <button
                        key={branch}
                        type="button"
                        onClick={() => toggleBranch(branch)}
                        className={`px-4 py-3 rounded-xl text-sm font-mono transition-all border ${
                          selected
                            ? "bg-[#818cf8]/15 border-[#818cf8]/40 text-white"
                            : "bg-white/5 border-white/10 text-white/50 hover:bg-white/8 hover:text-white/70"
                        }`}
                      >
                        {selected && <Check size={12} className="inline mr-1.5 text-[#818cf8]" />}
                        {branch}
                      </button>
                    )
                  })}
                </div>
                <div>
                  <label className="block text-xs font-mono text-white/50 mb-1.5">Tahmini Sporcu Sayısı</label>
                  <input
                    type="number"
                    value={form.sporcu_sayisi}
                    onChange={(e) => update("sporcu_sayisi", e.target.value)}
                    placeholder="100"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm font-mono text-white placeholder-white/20 outline-none focus:border-[#818cf8]/40 transition-colors"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5">
                <h2 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                  <Check size={18} className="text-emerald-500" />
                  Başvuru Özeti
                </h2>
                <div className="bg-white/5 rounded-xl border border-white/10 p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-xs font-mono text-white/40">Tesis</span>
                    <span className="text-xs font-mono text-white">{form.tesis_adi}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs font-mono text-white/40">Konum</span>
                    <span className="text-xs font-mono text-white">{form.sehir}{form.ilce ? ` / ${form.ilce}` : ""}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs font-mono text-white/40">İletişim</span>
                    <span className="text-xs font-mono text-white">{form.ad_soyad}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs font-mono text-white/40">E-posta</span>
                    <span className="text-xs font-mono text-white">{form.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs font-mono text-white/40">Branşlar</span>
                    <span className="text-xs font-mono text-[#818cf8]">{form.branslar.join(", ")}</span>
                  </div>
                  {form.sporcu_sayisi && (
                    <div className="flex justify-between">
                      <span className="text-xs font-mono text-white/40">Sporcu</span>
                      <span className="text-xs font-mono text-white">~{form.sporcu_sayisi}</span>
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-mono text-white/50 mb-1.5">Ek Not (opsiyonel)</label>
                  <textarea
                    value={form.not}
                    onChange={(e) => update("not", e.target.value)}
                    placeholder="Eklemek istediğiniz bilgi..."
                    rows={2}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm font-mono text-white placeholder-white/20 outline-none focus:border-[#818cf8]/40 transition-colors resize-none"
                  />
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => setStep((s) => s - 1)}
                disabled={step === 0}
                className="font-mono text-xs border-white/20 text-white bg-transparent hover:bg-white/5 disabled:opacity-30"
              >
                <ArrowLeft size={14} className="mr-1" />
                Geri
              </Button>

              {step < STEPS.length - 1 ? (
                <Button
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canProceed()}
                  className="bg-[#818cf8] text-white hover:bg-[#818cf8]/80 font-mono text-xs disabled:opacity-30"
                >
                  İleri
                  <ArrowRight size={14} className="ml-1" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="bg-emerald-600 text-white hover:bg-emerald-500 font-mono text-xs disabled:opacity-50"
                >
                  {submitting ? "Gönderiliyor..." : "Başvuruyu Gönder"}
                  <Check size={14} className="ml-1" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
