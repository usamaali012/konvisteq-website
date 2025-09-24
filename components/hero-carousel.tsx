"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselImages = [
  {
    src: "/modern-construction-site-with-cranes-and-buildings.jpg",
    alt: "Construction Services",
    title: "Expert Construction",
    subtitle: "Building your vision with precision and quality",
  },
  {
    src: "/elegant-modern-interior-design-living-room-with-lu.jpg",
    alt: "Interior Design Services",
    title: "Interior Design",
    subtitle: "Creating beautiful spaces that inspire",
  },
  {
    src: "/professional-financial-advisor-meeting-with-client.jpg",
    alt: "Financial Advisory Services",
    title: "Investment Advisory",
    subtitle: "Strategic financial guidance for your future",
  },
  {
    src: "/business-consultation-meeting-with-charts-and-fina.jpg",
    alt: "Financial Consultation",
    title: "Financial Consultation",
    subtitle: "Expert advice for your financial success",
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Carousel Images */}
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">

          <div className="absolute bottom-50 left-50 bg-slate-900/0 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col text-left font-display font-semibold text-4xl md:text-6xl lg:text-7xl mb-6 leading-snug">
              <div>Ready to take your</div>
              <div className="text-[#64CCC5]">Business Growth </div>
              <div>to the next level?</div>
            </div>

            {/* <p className="text-xl md:text-2xl mb-8 text-pretty opacity-90">{carouselImages[currentSlide].subtitle}</p> */}
            <div className="absolute flex flex-row items-center justify-center group transition-all duration-300">
              <Button className="bg-white text-black rounded-full flex items-center justify-between text-lg gap-5 px-4 py-5.5 border shadow-sm group-hover:border-white group-hover:text-white">
                <span className="-ml-2 flex items-center justify-center w-8 h-8 rounded-full bg-black group-hover:bg-white text-white group-hover:text-black">
                  <ChevronRight className="w-5 h-5" />
                </span>
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 glass rounded-full p-3 hover:bg-white/20 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 glass rounded-full p-3 hover:bg-white/20 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button> */}
    </div>
  )
}
