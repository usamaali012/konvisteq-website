"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const privacySections = [
  {
    title: "Introduction",
    content: `Konvisteq respects your privacy and is committed to protecting your personal data. 
This policy describes how we collect, use, and safeguard information when you interact with our services, including:
• B2B consultation and technology solutions
• E-commerce platforms and online store setups
• Financial management web, Android, and iOS applications
• Investment and financial advisory opportunities
• Real estate development and property projects`,
  },
  {
    title: "Personal Data We Collect",
    content: `Depending on the services you use, we may collect:
• Basic contact details (name, email, phone, business information)
• Account credentials and authentication data
• Transaction details, payment history, and investment records
• Business project information shared during consultations
• Device information and app usage analytics
• Location data for property or real estate inquiries`,
  },
  {
    title: "How We Use Your Information",
    content: `Your data helps us deliver and improve our services:
• Provide B2B solutions and manage client projects
• Develop, host, and maintain e-commerce platforms
• Operate and secure our financial management apps
• Process transactions and investment opportunities
• Send updates, invoices, and service-related communications
• Personalize user experience and recommend relevant services
• Meet legal, tax, and regulatory obligations`,
  },
  {
    title: "Information Sharing",
    content: `We do not sell your personal information. 
However, we may share it with:
• Trusted service providers (cloud hosting, payment processors, analytics) under strict confidentiality agreements
• Financial institutions or regulators when required by law
• Partners involved in property transactions or joint projects
• Third parties only with your explicit consent or when legally required`,
  },
  {
    title: "Data Security",
    content: `We employ robust technical and organizational measures to keep your data safe:
• End-to-end encryption of sensitive data
• Multi-factor authentication for app logins
• Regular vulnerability testing and security audits
• Encrypted backups and disaster recovery procedures`,
  },
  {
    title: "Mobile App Privacy",
    content: `Our Android and iOS financial management apps may collect:
• Device identifiers and performance metrics
• User activity to enhance app functionality
• Push notification preferences
No banking credentials or card details are stored on our servers.`,
  },
  {
    title: "Retention & Deletion",
    content: `We retain personal data only as long as necessary:
• Financial and transaction records are kept for regulatory compliance
• Business and project data is retained during active engagements
• Marketing preferences remain until you opt out
• You may request account deletion or data removal at any time, subject to legal obligations`,
  },
  {
    title: "Your Rights",
    content: `You have the right to:
• Access and receive a copy of your personal data
• Correct or update inaccurate information
• Request deletion of your data (where legally allowed)
• Restrict or object to processing for marketing
• Withdraw consent at any time
To exercise these rights, contact us at info@konvisteq.com`,
  },
  {
    title: "International Data Transfers",
    content: `If you access our services from outside Pakistan, your data may be processed in countries that may not offer the same data protection laws. We take steps to ensure adequate safeguards for cross-border transfers.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this policy to reflect changes in our services or legal requirements. 
Significant updates will be posted on our website and, where appropriate, notified via email or in-app alerts.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions or concerns regarding this Privacy Policy, please contact:

Email: info@konvisteq.com  
Phone: +92 (51) 6129688  

Office Address:  
Office No.808, 8th Floor, Pakland Tower-2, New Blue Area (F-9/G-9), Islamabad, Pakistan`,
  },
]
export function PrivacyContent() {
  // Initialize with all indices to have all sections open by default
  const [expandedSections, setExpandedSections] = useState<number[]>(
    privacySections.map((_, index) => index)
  )

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) 
        : [...prev, index]               
    )
  }

  return (
    <section className="py-16 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-2">
          {privacySections.map((section, index) => {
            const isExpanded = expandedSections.includes(index)

            return (
              <div
                key={index}
                className="border-2 border-gray-400 bg-white rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-inset"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {index + 1}. {section.title}
                  </span>
                  {isExpanded ? (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-4">
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {section.content}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Last updated: 26-09-2025</p>
        </div>
      </div>
    </section>
  )
}
