// /app/page.tsx — Sıra: Hero → YİSA-S Robotu → Hizmetler → Branşlar → Demo → (mevcut bölümler) → Footer (layout)
import HeroSection from '@/components/home/HeroSection'
import RobotFaceSection from '@/components/home/RobotFaceSection'
import HizmetlerSection from '@/components/home/HizmetlerSection'
import BranslarSection from '@/components/home/BranslarSection'
import DemoVideoSection from '@/components/home/DemoVideoSection'
import StatsSection from '@/components/home/StatsSection'
import FeaturesSection from '@/components/home/FeaturesSection'
import AIEnginesSection from '@/components/home/AIEnginesSection'
import PHVSection from '@/components/home/PHVSection'
import PricingPreview from '@/components/home/PricingPreview'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <RobotFaceSection />
      <HizmetlerSection />
      <BranslarSection />
      <DemoVideoSection />
      <StatsSection />
      <FeaturesSection />
      <AIEnginesSection />
      <PHVSection />
      <PricingPreview />
      <CTASection />
    </>
  )
}
