"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/modern-construction-site-with-cranes-and-buildings.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="absolute top-8 left-0 right-0 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <nav className="flex items-center space-x-2 text-white/80 text-sm">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>•</span>
            <span className="text-white">Contact</span>
          </nav>

          <Link
            href="/services"
            className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-white hover:bg-white/20 transition-all duration-300"
          >
            View Our Work
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </Link>
        </div>
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="font-display font-bold text-6xl md:text-7xl lg:text-8xl mb-4">Contact</h1>
        <div className="w-24 h-0.5 bg-white mx-auto" />
      </div>
    </section>
  )
}
