import { NavigationOP } from "@/components/navbar2"
import { PrivacyHero } from "@/components/privacy-hero"
import { PrivacyContent } from "@/components/privacy-content"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <NavigationOP />
      <PrivacyHero />
      <PrivacyContent />
    </main>
  )
}
