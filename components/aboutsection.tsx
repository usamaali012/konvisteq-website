"use client"

import { useEffect } from "react"
import { Briefcase } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animate only once per scroll
      easing: "ease-in-out",
    })
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-gray-300 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-gray-300 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-gray-300 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-gray-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Images */}
          <div className="relative" data-aos="fade-right">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden transform transition-transform duration-500">
                <img
                  src="/financialmeeting1.jpeg"
                  alt="Business consultation meeting"
                  className="w-full h-70 md:h-120 object-cover opacity-90"
                />
              </div>

              {/* Experience Badge */}
              <div
                className="absolute -top-6 -left-6 bg-teal-500 text-white p-6 rounded-2xl z-10 duration-300 border-8 border-gray-50"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="text-lg font-bold">10+ Years of</div>
                <div className="text-sm opacity-90">experience</div>
              </div>

              {/* Secondary Image */}
              <div
                className="absolute -bottom-8 -right-6 md:-right-8 w-48 h-32 rounded-3xl overflow-hidden border-[11px] border-white"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <img
                  src="/professional-financial-advisor-meeting-with-client.jpg"
                  alt="Professional consultation"
                  className="w-full h-full object-cover opacity-85"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8" data-aos="fade-left">
            {/* Section Header */}
            <div className="flex items-center gap-2 text-teal-600">
              <span className="font-[Kanit] text-5xl font-extrabold uppercase tracking-wider">
                About us
              </span>
            </div>

            {/* Main Heading */}
            <h2
              className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              The core mission behind all our work
            </h2>

            {/* Description */}
            <p
              className="text-gray-600 text-lg leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Konvisteq is a dynamic and reputable company involved in various business sectors
              such as Construction, Interior Designing, E-Commerce, B2B Solutions, and Investment
              Advisory Services. Our team of talented professionals is committed to delivering
              top-quality results.
            </p>

            {/* Statistics */}
            <div
              className="grid grid-cols-2 gap-8 pt-8 justify-items-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="text-center lg:text-left">
                <div className="text-4xl lg:text-5xl font-bold text-teal-600 mb-2">
                  130 <span className="text-3xl">+</span>
                </div>
                <div className="text-gray-600 font-medium">Companies helped</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl lg:text-5xl font-bold text-teal-600 mb-2">
                  230 <span className="text-3xl">+</span>
                </div>
                <div className="text-gray-600 font-medium">Revenue generated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
