import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "HEMEH transformed how we approach digital assets. Their institutional expertise gave us the confidence to make strategic allocations that have significantly outperformed our expectations.",
    author: "Michael R.",
    role: "CIO, Multi-Family Office",
    aum: "$150M+ AUM",
    rating: 5
  },
  {
    quote: "The security protocols and compliance frameworks HEMEH implemented were exactly what we needed. They understand the unique requirements of family offices.",
    author: "Sarah L.",
    role: "Managing Director",
    aum: "$85M+ AUM",
    rating: 5
  },
  {
    quote: "Working with HEMEH has been seamless. Their team's deep knowledge of DeFi protocols helped us generate yield while maintaining our risk parameters.",
    author: "David K.",
    role: "Family Office Principal",
    aum: "$200M+ AUM",
    rating: 5
  }
]

const stats = [
  { value: "$500M+", label: "Assets Under Advisory" },
  { value: "100%", label: "Client Retention" },
  { value: "50+", label: "Family Offices" },
  { value: "5+", label: "Years Experience" }
]

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Leading Family Offices
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Hear from the family offices who have partnered with us to navigate the crypto landscape.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
            >
              <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 card-hover"
            >
              {/* Quote Icon */}
              <Quote size={24} className="text-blue-500/20 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm">{testimonial.author}</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">{testimonial.role}</div>
                </div>
                <div className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                  {testimonial.aum}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
            Join the family offices who trust HEMEH with their digital asset strategy
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium hover:opacity-90 transition-all"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
