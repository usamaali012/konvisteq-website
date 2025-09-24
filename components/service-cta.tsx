"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServiceCTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass rounded-3xl p-12">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-balance">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Let's discuss your project and explore how our expertise can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="glass text-lg px-8 py-4">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="glass text-lg px-8 py-4 bg-transparent">
              <Link href="/">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
