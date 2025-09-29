"use client"

import { useState, useEffect } from "react"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import AOS from "aos";
import "aos/dist/aos.css";

const carouselImages = [
  {
    src: "/herosec/buildingconst.jpg",
    alt: "Construction Services",
    title: "Expert Construction",
    highlight: "Business Growth",
  },
  {
    src: "/elegant-modern-interior-design-living-room-with-lu.jpg",
    alt: "Interior Design Services",
    title: "Interior Design",
    highlight: "Design & Philosophy",
  },
  {
    src: "/herosec/presentation.jpg",
    alt: "Financial Advisory Services",
    title: "Investment Advisory",
    highlight: "Financial Insights",
  },
  {
    src: "/business-consultation-meeting-with-charts-and-fina.jpg",
    alt: "Financial Consultation",
    title: "Financial Consultation",
    highlight: "Strategic Financial Planning",
  },
  {
    src: "/ecomm.jpg",
    alt: "E-commerce Solutions",
    title: "E-commerce",
    highlight: "Enterprise Commerce Solutions",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    })
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/90" />
        </div>
      ))}

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center text-left">
        <div className="text-center text-white max-w-7xl px-4">
          <div
            className="bg-slate-900/0 rounded-2xl p-8 md:p-12"
            data-aos="fade-up"        // <-- AOS animation
          >
            <div
              className="flex flex-col text-left font-display font-semibold text-4xl md:text-6xl lg:text-6xl mb-6 leading-tight"
              data-aos="fade-right"   // <-- Animate heading
            >
              <div>Ready to take your</div>
              <div className="text-[#02adc0d8] transition-all duration-700">
                {carouselImages[currentSlide].highlight}
              </div>
              <div>to the next level?</div>
            </div>

            {/* Button */}
            <div
              className="absolute flex flex-row items-center justify-center group transition-all duration-300"
              data-aos="zoom-in"      // <-- Animate button
            >
              <a href="/contact/">
                <Button className="group bg-white text-black rounded-full flex items-center justify-between text-lg gap-5 px-4 py-5.5 border shadow-sm hover:border-white hover:text-white transition-colors duration-300">
                  <span className="-ml-2 flex items-center justify-center w-8 h-8 rounded-full bg-black text-white transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:translate-x-3">
                    <ChevronRight className="w-5 h-5" />
                  </span>
                  Get Started Today
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
