"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Phone, Mail, Globe, Facebook, Instagram, Twitter, Youtube, ChevronUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#146f79] text-white relative">
      {/* Orange top border */}
      <div className="h-1 bg-[#58595B]"></div>

      {/* Contact info section */}
      <div className="container mx-auto px-6 py-10">
        <div className="grid justify-between grid-cols-1 md:grid-cols-3 gap-6 lg:gap-16 border-b border-gray-700 pb-16">

          {/* Address */}
          <div className="group flex items-center gap-4 cursor-pointer">
            <div
              className="w-14 h-14 bg-[#2CC0D0] rounded-full flex items-center justify-center 
                        transition-all duration-300 group-hover:bg-gray-100 group-hover:rotate-6 group-hover:scale-110">
              <Globe className="w-8 h-8 text-gray-100 transition-all duration-300 group-hover:text-[#2CC0D0]" />
            </div>
            <div>
              <p className="text-gray-900 text-md font-semibold">Head Office</p>
              <p className="text-white font-semibold text-lg">
                New Blue Area, (F-9/G-9) Islamabad
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="group flex items-center gap-4 cursor-pointer">
            <div
              className="w-14 h-14 bg-[#2CC0D0] rounded-full flex items-center justify-center
                        transition-all duration-300 group-hover:bg-gray-100 group-hover:-rotate-6 group-hover:scale-110">
              <Phone className="w-7 h-7 text-gray-100 transition-all duration-300 group-hover:text-[#2CC0D0]" />
            </div>
            <div>
              <p className="text-gray-900 text-md font-semibold">Call Us</p>
              <p className="text-white font-semibold text-lg">051-1234567</p>
            </div>
          </div>

          {/* Email */}
          <div className="group flex items-center gap-4 cursor-pointer">
            <div
              className="w-14 h-14 bg-[#2CC0D0] rounded-full flex items-center justify-center
                        transition-all duration-300 group-hover:bg-gray-100 group-hover:rotate-6 group-hover:scale-110">
              <Mail className="w-8 h-8 text-gray-100 transition-all duration-300 group-hover:text-[#2CC0D0]" />
            </div>
            <div>
              <p className="text-gray-900 text-md font-semibold">Need Support</p>
              <p className="text-white font-semibold text-lg">info@konvisteq.com</p>
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
              <img src="/files/logo-w.svg" alt="Logo-white" className="w-[45%] lg:w-[75%]" />
            </div>

            {/* Social media icons */}
            <div className="flex gap-8">
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Facebook className="w-5 h-5 text-gray-100" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-5 h-5 text-gray-100" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-5 h-5 text-gray-100" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Youtube className="w-5 h-5 text-gray-100" />
              </Link>
            </div>
          </div>

          {/* Solutions column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-200 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-200 hover:text-white transition-colors">
                  Meet Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-200 hover:text-white transition-colors">
                  Customer Testimonials
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-200 hover:text-white transition-colors">
                  Outsourcing
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-200 hover:text-white transition-colors">
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
                <Link href="/services" className="text-gray-200 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-200 hover:text-white transition-colors">
                  HR Training
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-200 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-200 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Need to reach us?</h3>
            <p className="text-gray-100 mb-6 leading-relaxed">
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
            <p className="text-gray-100 text-sm">
              © 2025 <span className="text-[#001B1D]">Konvisteq</span>. All Rights Reserved
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-100 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-gray-100 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="#" className="text-gray-100 hover:text-white transition-colors">
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
