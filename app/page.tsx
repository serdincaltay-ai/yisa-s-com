"use client"

import { useState, useCallback } from "react"
import { IntroAnimation } from "@/components/intro/IntroAnimation"
import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Showcase } from "@/components/landing/showcase"
import { Branches } from "@/components/landing/branches"
import { Features } from "@/components/landing/features"
import { ClubPreview } from "@/components/landing/club-preview"
import { Pricing } from "@/components/landing/pricing"
import { DemoForm } from "@/components/landing/demo-form"
import { Footer } from "@/components/landing/footer"
import { Chatbot } from "@/components/landing/chatbot"

export default function HomePage() {
  const [introComplete, setIntroComplete] = useState(false)

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true)
  }, [])

  return (
    <>
      {!introComplete && <IntroAnimation onComplete={handleIntroComplete} />}
      <main className={`min-h-screen bg-[#060a13] text-white transition-opacity duration-500 ${introComplete ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
        <Hero />
        <Showcase />
        <Branches />
        <Features />
        <ClubPreview />
        <Pricing />
        <DemoForm />
        <Footer />
        <Chatbot />
      </main>
    </>
  )
}
