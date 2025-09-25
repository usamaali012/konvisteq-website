"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Phone, Mail, Globe, Facebook, Instagram, Twitter, Youtube, ChevronUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#187C87] text-white relative">
      {/* Orange top border */}
      <div className="h-1 bg-[#58595B]"></div>

      {/* Contact info section */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-gray-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Call Us</p>
              <p className="text-white font-semibold text-lg">(084) 123 - 456 88</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-gray-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Need Support</p>
              <p className="text-white font-semibold text-lg">support@example.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
              <Globe className="w-6 h-6 text-gray-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Head Office</p>
              <p className="text-white font-semibold text-lg">
                2972 Westheimer Rd.,
                <br />
                Illinois 85486
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company branding */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/files/logo-w.svg" alt="Logo-white" className="w-[%]" />
            </div>

            {/* Social media icons */}
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Facebook className="w-5 h-5 text-gray-400" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-5 h-5 text-gray-400" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-5 h-5 text-gray-400" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Youtube className="w-5 h-5 text-gray-400" />
              </Link>
            </div>
          </div>

          {/* Solutions column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Meet Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  HR Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Customer Testimonials
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Outsourcing
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">About Us</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  HR Training
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Need to reach us?</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We're here to answer all your questions. Fill out our contact form and we'll connect you with the people
              who can help.
            </p>
            <Button
              asChild
              className="bg-transparent border border-gray-600 text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Contact Us
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 <span className="text-orange-500">Avencio</span>. All Rights Reserved
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors z-50"
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6 text-white" />
      </button>
    </footer>
  )
}
