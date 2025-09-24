"use client"

import { ArrowUpRight } from "lucide-react"
import { useState } from "react"

const services = [
  {
    title: "Construction",
    image: "/modern-construction-site-with-cranes-and-buildings.jpg",
    shortDescription: "Professional construction services",
    fullDescription:
      "From residential to commercial projects, we deliver exceptional construction services with attention to detail and quality craftsmanship. Our experienced team handles everything from foundation to finishing.",
    features: ["Residential Construction", "Commercial Buildings", "Project Management", "Quality Assurance"],
  },
  {
    title: "Architecture & Building",
    image: "/elegant-modern-interior-design-living-room-with-lu.jpg",
    shortDescription: "Innovative architectural solutions",
    fullDescription:
      "Creative architectural design and building solutions that combine functionality with aesthetic appeal. We create spaces that inspire and endure.",
    features: ["Architectural Design", "Building Planning", "3D Visualization", "Permit Assistance"],
  },
  {
    title: "House Renovation",
    image: "/professional-financial-advisor-meeting-with-client.jpg",
    shortDescription: "Complete home transformations",
    fullDescription:
      "Transform your existing space with our comprehensive renovation services. From kitchen remodels to whole-house renovations, we bring your vision to life.",
    features: ["Kitchen Remodeling", "Bathroom Renovation", "Whole House Renovation", "Historic Restoration"],
  },
  {
    title: "Interior Design",
    image: "/business-consultation-meeting-with-charts-and-fina.jpg",
    shortDescription: "Beautiful interior spaces",
    fullDescription:
      "Transform your spaces with our creative interior design solutions that blend functionality with aesthetic appeal. Every detail is carefully considered.",
    features: ["Space Planning", "Color Consultation", "Furniture Selection", "Lighting Design"],
  },
]

export function ServicesPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 md:px-2">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-balance">Our Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Comprehensive solutions across construction, design, and financial services
          </p>
        </div>

        <div className="flex h-[300px] lg:h-[560px]">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-out ${
                hoveredIndex === index ? "flex-[1.3]" : "flex-1"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
                  hoveredIndex === index ? "grayscale-0 scale-115" : "grayscale scale-100"
                }`}
                style={{ backgroundImage: `url(${service.image})` }}
              />

              <div
                className={`absolute inset-0 transition-all duration-700 ${
                  hoveredIndex === index ? "bg-[#0193A3]/10" : "bg-black/50"
                }`}
              />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className="transition-all duration-500">
                  <h3 className="font-display font-bold text-2xl mb-2">{service.title}</h3>

                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      hoveredIndex === index ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-white/90 mb-4 text-sm">{service.fullDescription}</p>
                  </div>

                  {/* Always visible short description */}
                  <div
                    className={`${hoveredIndex === index ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
                  >
                    <p className="text-white/80 text-sm mb-4">{service.shortDescription}</p>
                  </div>
                </div>

                {/* Arrow icon */}
                <div className="flex justify-end">
                  <div
                    className={`w-8 h-8 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredIndex === index ? "bg-white/30 scale-110" : "bg-white/20"
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
