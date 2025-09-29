"use client"

import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    title: "B2B Solutions",
    image: "/professional-financial-advisor-meeting-with-client.jpg",
    shortDescription: "Smart solutions for B2B growth",
    fullDescription:
      "Drive business growth with tailored B2B strategies that streamline operations, strengthen partnerships, and scale your enterprise efficiently.",
    features: ["Market Strategy", "Process Automation", "Partner Expansion", "Technology Integration"],
  },
  {
    title: "Investment Insight",
    image: "/business-consultation-meeting-with-charts-and-fina.jpg",
    shortDescription: "Strategic guidance for smart investments",
    fullDescription:
      "Make confident financial decisions with expert analysis, market insights, and personalized strategies that maximize returns and reduce risk.",
    features: ["Portfolio Management", "Risk Assessment", "Market Analysis", "Strategic Planning"],
  },
  {
    title: "E-Commerce",
    image: "/ecomm2.jpg",
    shortDescription: "Powerful online selling solutions",
    fullDescription:
      "Launch and grow your online business with secure, high-performing e-commerce platforms designed to drive sales and customer loyalty.",
    features: ["Custom Store Development", "Secure Payments", "Inventory Management", "Responsive Design"],
  },
  {
    title: "Construction",
    image: "/herosec/buildingconst2.jpeg",
    shortDescription: "Strong foundations, lasting results",
    fullDescription:
      "Delivering quality construction for residential, commercial, and industrial projects with expert planning and reliable craftsmanship.",
    features: ["Residential Builds", "Commercial Projects", "Project Management", "Quality Assurance"],
  },
  {
    title: "Interior Design",
    image: "/elegant-modern-interior-design-living-room-with-lu.jpg",
    shortDescription: "Elegant spaces with purpose",
    fullDescription:
      "Create inspiring interiors with customized designs that balance beauty, comfort, and functionality for any space.",
    features: ["Space Planning", "Material Selection", "Furniture Curation", "Lighting Design"],
  },
]

export function ServicesPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="lg:flex py-20 px-4 md:px-2">
      {/* === Desktop Layout === */}
      <div className="max-w-8xl mx-auto hidden lg:block">
        {/* Section Heading */}
        <div data-aos="fade-in" data-aos-anchor-placement="center-bottom" className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-balance">
            Our Expertise
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty">
            Comprehensive solutions across construction, design, and financial services
          </p>
        </div>

        {/* Horizontal Scroll Cards */}
        <div data-aos="fade-up" className="flex h-[300px] lg:h-[600px]">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative overflow-hidden cursor-pointer transition-all duration-400 ease-out ${
                hoveredIndex === index ? "flex-[1.3]" : "flex-1"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              
            >
              {/* Background Image */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-all duration-400 ${
                  hoveredIndex === index ? "grayscale-0 scale-110" : "grayscale scale-100"
                }`}
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div
                className={`absolute inset-0 transition-all duration-700 ${
                  hoveredIndex === index ? "bg-[#0193A3]/10" : "bg-black/50"
                }`}
              />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white group">
                <div className="transition-all duration-500 ease-in-out">
                  <h3 className="font-display font-bold text-2xl mb-2 group-hover:text-3xl transition-all duration-500">
                    {service.title}
                  </h3>

                  {/* Full Description */}
                  <div
                    className={`transition-all ease-in-out duration-800 overflow-hidden ${
                      hoveredIndex === index ? "max-h-36 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="bg-black/70 rounded-2xl p-4 text-justify font-semibold text-white mb-4 text-sm">
                      {service.fullDescription}
                    </p>
                  </div>

                  {/* Short Description */}
                  <div
                    className={`${
                      hoveredIndex === index ? "opacity-0" : "opacity-100"
                    } transition-opacity duration-50`}
                  >
                    <p className="text-white/95 text-sm mb-4">{service.shortDescription}</p>
                  </div>
                </div>

                {/* Arrow Icon */}
                <div className="flex justify-end">
                  <div
                    className={`w-8 h-8 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredIndex === index ? "bg-white/30 scale-110" : "bg-white/20"
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:h-5 group-hover:w-5 group-hover:rotate-45 transition-all duration-600 ease-in-out" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === Mobile / Tablet Layout === */}
      <div className="max-w-7xl mx-auto lg:hidden">
        {/* Section Heading */}
        <div data-aos="fade-in" className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Our Expertise</h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
            Comprehensive solutions across construction, design, and financial services
          </p>
        </div>

        {/* Top Full-Width Card */}
        <div className="mb-10">
          {services.slice(0, 1).map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden cursor-pointer rounded-xl h-[350px] md:h-[400px] transition-all duration-400 ease-out"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-all duration-400 ${
                  hoveredIndex === index ? "grayscale-0 scale-110" : "grayscale"
                }`}
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div
                className={`absolute inset-0 transition-all duration-700 ${
                  hoveredIndex === index ? "bg-[#0193A3]/10" : "bg-black/50"
                }`}
              />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white group">
                <h3 className="font-display font-bold text-3xl mb-2 group-hover:text-4xl transition-all duration-500">
                  {service.title}
                </h3>

                <div
                  className={`transition-all duration-800 overflow-hidden ${
                    hoveredIndex === index ? "max-h-36 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="bg-black/70 rounded-2xl p-4 text-justify font-semibold text-white mb-4 text-sm">
                    {service.fullDescription}
                  </p>
                </div>

                {/* Short Description */}
                <div
                  className={`${
                    hoveredIndex === index ? "opacity-0" : "opacity-100"
                  } transition-opacity duration-50`}
                >
                  <p className="text-white/95 text-sm mb-4">{service.shortDescription}</p>
                </div>

                {/* Arrow Icon */}
                <div className="flex justify-end">
                  <div
                    className={`w-8 h-8 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredIndex === index ? "bg-white/30 scale-110" : "bg-white/20"
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4 text-white group-hover:h-5 group-hover:w-5 group-hover:rotate-45 transition-all duration-600 ease-in-out" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Remaining Cards (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.slice(1).map((service, index) => {
            const realIndex = index + 1
            return (
              <div
                key={realIndex}
                className="relative overflow-hidden cursor-pointer rounded-xl h-[300px] md:h-[350px] transition-all duration-400 ease-out"
                onMouseEnter={() => setHoveredIndex(realIndex)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Background */}
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-400 ${
                    hoveredIndex === realIndex ? "grayscale-0 scale-110" : "grayscale"
                  }`}
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div
                  className={`absolute inset-0 transition-all duration-700 ${
                    hoveredIndex === realIndex ? "bg-[#0193A3]/10" : "bg-black/50"
                  }`}
                />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 text-white group">
                  <h3 className="font-display font-bold text-2xl mb-2 group-hover:text-3xl transition-all duration-500">
                    {service.title}
                  </h3>

                  <div
                    className={`transition-all duration-800 overflow-hidden ${
                      hoveredIndex === realIndex ? "max-h-36 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="bg-black/70 rounded-2xl p-4 text-justify font-semibold text-white mb-4 text-sm">
                      {service.fullDescription}
                    </p>
                  </div>

                  {/* Short Description */}
                  <div
                    className={`${
                      hoveredIndex === realIndex ? "opacity-0" : "opacity-100"
                    } transition-opacity duration-50`}
                  >
                    <p className="text-white/95 text-sm mb-4">{service.shortDescription}</p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex justify-end">
                    <div
                      className={`w-8 h-8 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredIndex === realIndex ? "bg-white/30 scale-110" : "bg-white/20"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4 text-white group-hover:h-5 group-hover:w-5 group-hover:rotate-45 transition-all duration-600 ease-in-out" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
