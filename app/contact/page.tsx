import { Navigation } from "@/components/navigation"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />

      <div className="py-14 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-4 lg:mx-auto rounded-3xl h-[40vh] overflow-hidden mb-10 bg-[#001B1D]">
        <iframe className="p-4 rounded-4xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d806.2808915320675!2d73.02411165171303!3d33.692724411862926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfe201537939%3A0x8862e17e7dbcd172!2sPAKLAND%20TOWER%202!5e0!3m2!1sen!2s!4v1758867069214!5m2!1sen!2s" width="100%" height="100%" loading="lazy"></iframe>
      </div>
    </main>
  )
}
