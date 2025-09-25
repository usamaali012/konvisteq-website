"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Trophy } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ShowcaseSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-4">
              <p className="text-[#0193A3] font-medium text-sm uppercase tracking-wider">who we are.</p>
              <h2 className="font-[Kanit] text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                LEADING NATIONAL
                <br />
                DEVELOPERS AND
                <br />
                ADVISORS
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-xl">
                As a national leader in our industry, we are revolutionizing what you expect from a contractor.
              </p>
              <p className="text-lg">
                Our clients cover a wide range of sectors including local, state, territory and
                government contracts, retail and sales, hospitality, commercial, health and aged care, industrial and
                manufacturing, civil works and defence, as well as medium-density residential, in the Capitol City.
              </p>
            </div>

            <Button className="bg-black hover:bg-gray-800 text-white text-lg py-5 rounded-full group transition-all duration-300">
              More About Us
              <ArrowRight className="ml-3 !h-5 !w-7 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Content - Image with Statistics */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/construction-site-workers-on-concrete-foundation-w.jpg"
                alt="Construction workers on site"
                className="w-full h-[500px] object-cover"
              />

              {/* Statistics Cards */}
              <div className="absolute top-6 right-6 space-y-4">
                {/* Completed Projects Card */}
                <div
                  className={`bg-black text-white p-6 rounded-xl shadow-lg transition-all duration-700 delay-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Building2 className="h-8 w-8 text-white" />
                    <div>
                      <div className="text-3xl font-bold">50+</div>
                      <div className="text-sm text-gray-300">
                        Completed
                        <br />
                        Projects
                      </div>
                    </div>
                  </div>
                </div>

                {/* Awards Card */}
                <div
                  className={`bg-[#001B1D] text-white p-6 rounded-xl shadow-lg transition-all duration-700 delay-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Trophy className="h-8 w-8 text-white" />
                    <div>
                      <div className="text-3xl font-bold">18+</div>
                      <div className="text-sm text-orange-100">
                        Awards
                        <br />
                        Winning
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
