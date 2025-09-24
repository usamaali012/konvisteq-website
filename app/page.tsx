import { Navigation } from "@/components/navigation"
import { HeroCarousel } from "@/components/hero-carousel"
import { ServicesPreview } from "@/components/services-preview"
import { TrustSection } from "@/components/trust-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroCarousel />
      <ServicesPreview />
      <TrustSection />
    </main>
  )
}
