"use client"

import { Building, Palette, TrendingUp, Calculator, CheckCircle, Handshake } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
    {
    icon: Handshake,
    title: "B2B Solutions",
    description: "Innovative strategies to accelerate business growth and streamline operations",
    image: "/files/b2b.jpg",
    features: [
      "Business Process Optimization",
      "Custom E-commerce Platforms",
      "Market Expansion Strategies",
      "Supply Chain & Operations Planning",
      "Strategic Partnership Development",
    ],
  },
    {
    icon: Calculator,
    title: "Financial Consultation",
    description: "Comprehensive financial planning and consultation services",
    image: "/business-consultation-meeting-with-charts-and-fina.jpg",
    features: [
      "Financial Planning",
      "Tax Strategy",
      "Retirement Planning",
      "Insurance Analysis",
      "Estate Planning",
      "Business Consulting",
    ],
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Strategic investment guidance for wealth building and preservation",
    image: "/financialmeeting2.jpg",
    features: [
      "Portfolio Management",
      "Risk Assessment",
      "Market Analysis",
      "Investment Strategy",
      "Wealth Planning",
      "Performance Monitoring",
    ],
  },
  {
    icon: Building,
    title: "Construction Services",
    description: "Expert construction solutions for residential and commercial projects",
    image: "/modern-construction-site-with-cranes-and-buildings.jpg",
    features: [
      "Residential Construction",
      "Commercial Buildings",
      "Renovations & Remodeling",
      "Project Management",
      "Quality Assurance",
      "Timely Delivery",
    ],
  },
  {
    icon: Palette,
    title: "Interior Design",
    description: "Creative interior design solutions that transform spaces",
    image: "/elegant-modern-interior-design-living-room-with-lu.jpg",
    features: [
      "Space Planning",
      "Color Consultation",
      "Furniture Selection",
      "Lighting Design",
      "Custom Solutions",
      "3D Visualization",
    ],  
  },
]

export function ServiceDetails() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
            >
              <div className="flex-1">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="flex-1">
                <Card className="glass border-0 p-8">
                  <CardContent className="p-0">
                    <div className="glass rounded-full w-16 h-16 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-3xl md:text-4xl mb-4">{service.title}</h3>
                    <p className="text-lg text-muted-foreground mb-8 text-pretty">{service.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
