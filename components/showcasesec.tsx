"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Trophy } from "lucide-react"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export function ShowcaseSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,     // Run only once per scroll
      easing: "ease-in-out",
    })
  }, [])

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className="space-y-6"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="space-y-4">
              <h2 className="font-[Kanit] text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                LEADING NATIONAL
                <br />
                BUILDERS AND
                <br />
                ADVISORS
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-xl text-left" data-aos="fade-up" data-aos-delay="200">
                As a national leader in our industry, we are revolutionizing what you expect from a contractor.
              </p>
              <p className="text-lg lg:text-xl text-left" data-aos="fade-up" data-aos-delay="400">
                Our clients cover a wide range of sectors including local, state, territory and
                government contracts, retail and sales, hospitality, commercial, health and aged care,
                industrial and manufacturing, civil works and defence, as well as medium-density residential,
                in the Capital City.
              </p>
            </div>

            <div data-aos="zoom-in" data-aos-delay="600">
              <Button className="bg-black hover:bg-gray-800 text-white text-lg py-6 rounded-full group transition-all duration-300">
                <span className="ml-3 text-xl">More About Us</span>
                <ArrowRight className="mx-4 !h-6 !w-7 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Content - Image with Statistics */}
          <div
            className="relative"
            data-aos="fade-left"
            data-aos-delay="300"
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
                  className="bg-[#3B8288] text-white p-6 rounded-xl shadow-lg"
                  data-aos="fade-down"
                  data-aos-delay="500"
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
                  className="bg-[#23737A]/90 text-white p-6 rounded-xl shadow-lg"
                  data-aos="fade-down"
                  data-aos-delay="700"
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
