import IntroOverlay from '@/components/landing/IntroOverlay'

export default function HomePage() {
  console.log("[v0] HomePage with IntroOverlay rendering")
  return (
    <div>
      <IntroOverlay />
      <h1 className="text-4xl font-bold text-white text-center py-20">Landing Yukleniyor...</h1>
    </div>
  )
}
