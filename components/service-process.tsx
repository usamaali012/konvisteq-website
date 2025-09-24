"use client"

import { Card, CardContent } from "@/components/ui/card"

const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We begin with a comprehensive consultation to understand your needs, goals, and vision for your project.",
  },
  {
    step: "02",
    title: "Planning & Strategy",
    description: "Our experts develop a detailed plan and strategy tailored to your specific requirements and budget.",
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "We execute the plan with precision, maintaining regular communication and ensuring quality at every step.",
  },
  {
    step: "04",
    title: "Completion & Support",
    description: "Project completion with thorough review and ongoing support to ensure your complete satisfaction.",
  },
]

export function ServiceProcess() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-balance">Our Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A proven methodology that ensures exceptional results across all our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <Card key={index} className="glass border-0 hover:scale-105 transition-transform duration-300">
              <CardContent className="p-8 text-center">
                <div className="font-display font-bold text-4xl text-primary mb-4">{step.step}</div>
                <h3 className="font-display font-semibold text-xl mb-4">{step.title}</h3>
                <p className="text-muted-foreground text-pretty">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
