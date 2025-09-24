"use client"

import { useEffect, useRef } from "react"
import { Briefcase, Sparkles } from "lucide-react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
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
          <div className="relative fade-in">
            {/* Main Image Container */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500">
                <img
                  src="/business-consultation-meeting-with-charts-and-fina.jpg"
                  alt="Business consultation meeting"
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-6 -left-6 bg-teal-500 text-white p-6 rounded-2xl shadow-xl z-10 duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="text-lg font-bold">10+ Years of</div>
                <div className="text-sm opacity-90">experience</div>
              </div>

              {/* Secondary Image */}
              <div className="absolute -bottom-8 -right-8 w-48 h-32 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/professional-financial-advisor-meeting-with-client.jpg"
                  alt="Professional consultation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 fade-in">
            {/* Section Header */}
            <div className="flex items-center gap-2 text-teal-600">
              <Sparkles className="w-5 h-5" />
              <span className="text-4xl font-semibold uppercase tracking-wider">About us</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              The core mission behind all our work
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
               Konvisteq is a dynamic and reputable company involved in various business sectors such as Construction,
              Interior Designing, E-Commerce, B2B Solutions, and Investment Advisory Services. Our team of talented
              professionals is committed to delivering top-quality results.
            </p>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-8 pt-8">
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

      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .fade-in.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}
