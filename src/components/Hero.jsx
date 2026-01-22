import { ArrowRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-sm border border-neutral-200 dark:border-neutral-700">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse-dot" />
            <span className="text-neutral-600 dark:text-neutral-400">Trusted by 50+ Family Offices Worldwide</span>
          </div>
        </div>

        {/* Main Headline - Improved flow */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 leading-tight tracking-tight">
          Institutional-Grade Crypto
          <br />
          <span className="gradient-text">Advisory for Family Offices</span>
        </h1>

        {/* Subheadline - More compelling */}
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-center mb-10">
          Don't let complexity hold you back. We guide family offices through DeFi,
          digital assets, and blockchain investments with institutional rigor and personalized strategy.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#contact"
            className="group px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl font-medium flex items-center space-x-2 hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            <span>Schedule Free Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            to="/dashboard"
            className="group px-8 py-4 rounded-xl font-medium border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors flex items-center space-x-2"
          >
            <Play className="w-4 h-4" />
            <span>View Live Dashboard</span>
          </Link>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center p-6 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 card-hover">
            <div className="text-3xl font-bold mb-1 gradient-text">$500M+</div>
            <div className="text-neutral-500 dark:text-neutral-400 text-sm">Assets Under Advisory</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 card-hover">
            <div className="text-3xl font-bold mb-1 gradient-text">50+</div>
            <div className="text-neutral-500 dark:text-neutral-400 text-sm">Family Offices Served</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 card-hover">
            <div className="text-3xl font-bold mb-1 gradient-text">100%</div>
            <div className="text-neutral-500 dark:text-neutral-400 text-sm">Client Retention Rate</div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-4 uppercase tracking-wider">Trusted Partners & Protocols</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <span className="text-sm font-semibold">Aave</span>
            <span className="text-sm font-semibold">Maple Finance</span>
            <span className="text-sm font-semibold">Ondo Finance</span>
            <span className="text-sm font-semibold">Safe</span>
            <span className="text-sm font-semibold">Infinex</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
