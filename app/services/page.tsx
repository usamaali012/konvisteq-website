import { Navigation } from "@/components/navigation"
import { ServiceHero } from "@/components/service-hero"
import { ServiceDetails } from "@/components/service-details"
import { ServiceProcess } from "@/components/service-process"
import { ServiceCTA } from "@/components/service-cta"

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ServiceHero />
      <ServiceDetails />
      <ServiceProcess />
      <ServiceCTA />
    </main>
  )
}
