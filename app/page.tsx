import { Navigation } from "@/components/navigation"
import { HeroCarousel } from "@/components/hero-carousel"
import { ServicesPreview } from "@/components/services-preview"
import { TrustSection } from "@/components/trust-section"
import { Footer } from "@/components/footer"
import {AboutSection} from "@/components/aboutsection"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroCarousel />
      <AboutSection />
      <ServicesPreview />
      <TrustSection />
      <Footer/>
    </main>
  )
}
