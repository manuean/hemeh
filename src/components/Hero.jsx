import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse-dot" />
            <span className="text-neutral-600 dark:text-neutral-400">Trusted by Leading Family Offices</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 leading-tight tracking-tight">
          Navigate Crypto with
          <br />
          <span className="gradient-text">Institutional Confidence</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-center mb-10">
          HEMEH Technologies provides family offices with comprehensive guidance through
          DeFi, digital assets, and institutional-grade investment strategies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <a
            href="#contact"
            className="group px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium flex items-center space-x-2 hover:opacity-90 transition-all"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            to="/dashboard"
            className="px-6 py-3 rounded-lg font-medium border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
          >
            View Dashboard
          </Link>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center p-6 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 card-hover">
            <div className="text-3xl font-bold mb-1">$500M+</div>
            <div className="text-neutral-500 dark:text-neutral-400 text-sm">Assets Under Advisory</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 card-hover">
            <div className="text-3xl font-bold mb-1">50+</div>
            <div className="text-neutral-500 dark:text-neutral-400 text-sm">Family Offices Served</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 card-hover">
            <div className="text-3xl font-bold mb-1">12</div>
            <div className="text-neutral-500 dark:text-neutral-400 text-sm">Service Categories</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
