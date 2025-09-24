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
          <div className="absolute bottom-2 left-2 bg-slate-900/0 rounded-2xl p-8 md:p-12">
            <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-balance">
              Built on Trust since 2010
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pretty opacity-90">{carouselImages[currentSlide].subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="glass text-lg px-8 py-4">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" className="glass text-lg px-8 py-4 bg-transparent">
                Learn More
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
