import { Navigation } from "@/components/navigation"
import { PrivacyHero } from "@/components/privacy-hero"
import { PrivacyContent } from "@/components/privacy-content"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <PrivacyHero />
      <PrivacyContent />
    </main>
  )
}
