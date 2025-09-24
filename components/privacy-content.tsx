"use client"

import { Card, CardContent } from "@/components/ui/card"

const privacySections = [
  {
    title: "Information We Collect",
    content: [
      "Personal Information: We collect information you provide directly to us, such as when you create an account, request our services, or contact us. This may include your name, email address, phone number, address, and other contact information.",
      "Service Information: When you use our construction, interior design, investment advisory, or financial consultation services, we may collect information related to your projects, preferences, and service requirements.",
      "Communication Records: We maintain records of our communications with you, including emails, phone calls, and meeting notes, to provide better service and maintain project continuity.",
      "Technical Information: We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, and usage patterns.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "Service Delivery: We use your information to provide, maintain, and improve our construction, interior design, investment advisory, and financial consultation services.",
      "Communication: We use your contact information to communicate with you about your projects, appointments, service updates, and respond to your inquiries.",
      "Business Operations: We may use your information for internal business purposes, including project management, quality assurance, and service improvement.",
      "Legal Compliance: We may use your information to comply with applicable laws, regulations, and legal processes.",
    ],
  },
  {
    title: "Information Sharing and Disclosure",
    content: [
      "Service Providers: We may share your information with trusted third-party service providers who assist us in delivering our services, such as contractors, suppliers, and professional consultants.",
      "Legal Requirements: We may disclose your information if required by law, regulation, legal process, or governmental request.",
      "Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.",
      "Consent: We may share your information with your explicit consent or at your direction.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "Protection Measures: We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
      "Access Controls: We limit access to your personal information to employees and contractors who need it to perform their job functions.",
      "Regular Reviews: We regularly review and update our security practices to ensure the ongoing protection of your information.",
      "Incident Response: In the event of a data breach, we will notify affected individuals and relevant authorities as required by applicable law.",
    ],
  },
  {
    title: "Your Rights and Choices",
    content: [
      "Access and Correction: You have the right to access and correct your personal information. Contact us to request access to or correction of your information.",
      "Data Portability: You may request a copy of your personal information in a structured, commonly used format.",
      "Deletion: You may request deletion of your personal information, subject to certain legal and business requirements.",
      "Marketing Communications: You can opt out of receiving marketing communications from us by following the unsubscribe instructions in our emails or contacting us directly.",
    ],
  },
  {
    title: "Cookies and Tracking Technologies",
    content: [
      "Cookie Usage: Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyze website usage.",
      "Types of Cookies: We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a specified period).",
      "Cookie Control: You can control cookie settings through your browser preferences, though disabling cookies may affect website functionality.",
      "Analytics: We use analytics tools to understand how visitors interact with our website and improve our services.",
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "Age Restrictions: Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.",
      "Parental Notice: If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information promptly.",
      "Parental Rights: Parents or guardians who believe their child has provided personal information to us may contact us to request deletion of such information.",
    ],
  },
  {
    title: "International Data Transfers",
    content: [
      "Cross-Border Transfers: Your information may be transferred to and processed in countries other than your country of residence, which may have different data protection laws.",
      "Safeguards: When we transfer your information internationally, we implement appropriate safeguards to protect your information in accordance with applicable law.",
      "Legal Basis: We ensure that international transfers are conducted in compliance with applicable data protection regulations.",
    ],
  },
  {
    title: "Changes to This Privacy Policy",
    content: [
      "Policy Updates: We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law.",
      "Notification: We will notify you of material changes to this Privacy Policy by posting the updated policy on our website and updating the 'Last Updated' date.",
      "Continued Use: Your continued use of our services after any changes to this Privacy Policy constitutes your acceptance of the updated policy.",
    ],
  },
  {
    title: "Contact Information",
    content: [
      "Questions and Concerns: If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:",
      "Email: privacy@avencio.com",
      "Phone: +1 (555) 123-4567",
      "Address: 123 Business District, Downtown City, State 12345, United States",
      "Response Time: We will respond to your privacy-related inquiries within 30 days of receipt.",
    ],
  },
]

export function PrivacyContent() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {privacySections.map((section, index) => (
            <Card key={index} className="glass border-0">
              <CardContent className="p-8">
                <h2 className="font-display font-bold text-2xl md:text-3xl mb-6">{section.title}</h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className="text-muted-foreground leading-relaxed text-pretty">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glass border-0 mt-12">
          <CardContent className="p-8 text-center">
            <h3 className="font-display font-bold text-xl mb-4">Need More Information?</h3>
            <p className="text-muted-foreground mb-6">
              If you have any questions about our privacy practices or this policy, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@avencio.com"
                className="inline-flex items-center justify-center px-6 py-3 glass rounded-lg hover:bg-primary/10 transition-colors"
              >
                Email Us
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 glass rounded-lg hover:bg-primary/10 transition-colors"
              >
                Contact Form
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
