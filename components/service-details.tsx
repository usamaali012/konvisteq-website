"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { Building, Palette, TrendingUp, Calculator, CheckCircle, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    slug: "b2b-solutions",
    icon: Handshake,
    title: "B2B Solutions",
    description: "Innovative strategies to accelerate business growth and streamline operations",
    image: "/iphonebanner.png",
    features: [
      "Business Process Optimization",
      "Custom E-commerce Platforms",
      "Market Expansion Strategies",
      "Supply Chain & Operations Planning",
      "Strategic Partnership Development",
    ],
  },
  { 
    slug:"financial-solution",
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
    slug:"investment-advisory",
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
    slug:"construction-services",
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
    slug:"interior-design",
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
];

export function ServiceDetails() {
  // Initialize AOS on mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed (ms)
      once: true,     // animate only once per scroll
      easing: "ease-in-out",
    });
  }, []);

  return (
  <section className="py-20 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="space-y-20">
        {services.map((service, index) => (
          <div id={service.slug} key={index} className="scroll-mt-32">       
            <Link
              href={`/services#${service.slug}`}  
              className={`group flex flex-col cursor-pointer 
                ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} 
                gap-12 items-center`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 50}
            >
            {/* Image */}
            <div
              className="flex-1 transition-transform duration-300 group-hover:scale-[1.02]"
              data-aos="zoom-in"
              data-aos-delay={index * 150 + 100}
            >
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-full md:h-110 object-cover rounded-2xl shadow-2xl"
              />
            </div>

            {/* Details */}
            <div
              className="flex-1"
              data-aos="fade-up"
              data-aos-delay={index * 200 + 150}
            >
              <Card className="glass border-0 p-8 transition-shadow group-hover:shadow-xl">
                <CardContent className="p-0">
                  <div className="glass rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-3xl md:text-4xl mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 text-pretty">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3"
                        data-aos="fade-up"
                        data-aos-delay={featureIndex * 100 + 200}
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}
