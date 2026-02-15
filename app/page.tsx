import IntroOverlay from '@/components/landing/IntroOverlay'
import HeroSection from '@/components/landing/HeroSection'
import InteractiveShowcase from '@/components/landing/InteractiveShowcase'
import BranslarSection from '@/components/landing/BranslarSection'
import FeaturesSection from '@/components/landing/FeaturesSection'
import ClubPreview from '@/components/landing/ClubPreview'
import PricingSection from '@/components/landing/PricingSection'
import DemoForm from '@/components/landing/DemoForm'

export default function HomePage() {
  return (
    <>
      <IntroOverlay />
      <HeroSection />
      <InteractiveShowcase />
      <BranslarSection />
      <FeaturesSection />
      <ClubPreview />
      <PricingSection />
      <DemoForm />
    </>
  )
}
