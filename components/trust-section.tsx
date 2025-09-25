"use client"

const coreValues = [
  {
    number: "01.",
    title: "Safety",
    description:
      "We will never compromise the safety of our people. Our goal is zero incidents and our lost time frequency rate is industry leading.",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M32 8L24 16H40L32 8Z" />
        <path d="M24 16V48C24 52.4183 27.5817 56 32 56C36.4183 56 40 52.4183 40 48V16" />
        <path d="M28 24H36" />
        <path d="M28 32H36" />
        <path d="M28 40H36" />
      </svg>
    ),
  },
  {
    number: "02.",
    title: "Quality",
    description:
      "Consistency ensures success. We see projects through and proactively develop solutions to exceed expectations.",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 32L24 24L32 32L48 16" />
        <path d="M8 48H56V16H8V48Z" />
        <path d="M12 20H20" />
        <path d="M12 44H52" />
      </svg>
    ),
  },
  {
    number: "03.",
    title: "Sustainability",
    description:
      "We look beyond sustainable construction to corporate social responsibility that addresses partners, projects, and places.",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="32" cy="32" r="20" />
        <path d="M32 20V32L40 40" />
        <path d="M28 16L32 12L36 16" />
        <path d="M48 28L52 32L48 36" />
        <path d="M36 48L32 52L28 48" />
        <path d="M16 36L12 32L16 28" />
      </svg>
    ),
  },
  {
    number: "04.",
    title: "Stewardship",
    description: "Our culture of giving empowers employees to give back to the community.",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 32C20 32 24 28 32 28C40 28 44 32 44 32C44 32 40 36 32 36C24 36 20 32 20 32Z" />
        <path d="M16 24L20 28" />
        <path d="M48 24L44 28" />
        <path d="M16 40L20 36" />
        <path d="M48 40L44 36" />
      </svg>
    ),
  },
]

export function TrustSection() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div className="text-primary font-medium text-lg">— why choose us.</div>
          <h2 className="font-display font-bold text-5xl md:text-6xl tracking-tight">CORE VALUES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="group relative p-8 border border-border/20 rounded-xl cursor-pointer running-border transition-all duration-300"
            >
              {/* Animated border layer */}
              <div className="absolute inset-0 rounded-xl pointer-events-none">
                <div className="border-anim opacity-0 group-hover:opacity-100"></div>
              </div>

              <div
                className={`inline-block px-3 py-1 text-sm font-medium mb-6 ${
                  index === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {value.number}
              </div>

              <div className="mb-6 text-muted-foreground">{value.icon}</div>

              <h3 className="font-display font-bold text-2xl mb-4">{value.title}</h3>

              <p className="text-muted-foreground leading-relaxed text-pretty">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Animated border layer */
        .border-anim {
          position: absolute;
          inset: 0;
          padding: 2px;
          border-radius: inherit;
          background: linear-gradient(
            0deg,
            black 0%,
            transparent 30%,
            transparent 70%,
            black 100%
          );
          background-size: 400% 400%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          animation: borderRun 6s linear infinite;
          transition: opacity 0.3s ease;
        }

        @keyframes borderRun {
          0%   { background-position:   0%   0%; }
          25%  { background-position: 100%   0%; }
          50%  { background-position: 100% 100%; }
          75%  { background-position:   0% 100%; }
          100% { background-position:   0%   0%; }
        }
      `}</style>
    </section>
  )
}
