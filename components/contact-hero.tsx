"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ContactHero() {
  return (
    <section className="relative h-[52vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/contactus.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="absolute bottom-28 z-10 text-center text-white px-4">
        <h1 className="font-display font-bold text-6xl md:text-7xl lg:text-8xl border-b-1 border-b-white">Get in Touch with Us</h1>
      </div>
    </section>
  )
}
