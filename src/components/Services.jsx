import { useState } from 'react'
import {
  Coins,
  Target,
  TrendingUp,
  Droplets,
  Shield,
  BookOpen,
  Wallet,
  Building,
  Lock,
  Layers,
  Sparkles,
  Rocket,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

const serviceCategories = [
  {
    id: 'investment',
    title: 'Investment Strategies',
    description: 'Strategic approaches to digital asset investing',
    icon: TrendingUp,
    color: 'bg-blue-500',
    services: [
      {
        icon: Coins,
        title: "Revenue-Driven Assets",
        description: "Build positions in tokens backed by protocol cash flow (e.g., HYPE, LIT).",
        benefit: "Earn passive income from protocol revenues"
      },
      {
        icon: Target,
        title: "Prediction Markets",
        description: "Set up accounts on Polymarket, Kalshi, and Opinion to master betting mechanics.",
        benefit: "Diversify with non-correlated returns"
      },
      {
        icon: Rocket,
        title: "Early Stage Investing",
        description: "Pre-Seed, Series A, and OTC Deals for strategic early investments.",
        benefit: "Access high-growth opportunities early"
      }
    ]
  },
  {
    id: 'trading',
    title: 'Trading & Liquidity',
    description: 'Advanced trading infrastructure and liquidity solutions',
    icon: Droplets,
    color: 'bg-purple-500',
    services: [
      {
        icon: TrendingUp,
        title: "Real-World Asset Trading",
        description: "Buy stocks and commodities with leverage on trade.xyz.",
        benefit: "Bridge traditional and crypto markets"
      },
      {
        icon: Droplets,
        title: "PerpDEX Liquidity",
        description: "Deposit capital into PerpDEX liquidity vaults (Lighter, Extended, Paradex).",
        benefit: "Generate yield from trading fees"
      },
      {
        icon: Shield,
        title: "Hedging Strategies",
        description: "Use trade.xyz to hedge exposure against specific commodity price movements.",
        benefit: "Protect portfolio from volatility"
      }
    ]
  },
  {
    id: 'defi',
    title: 'DeFi & Yield',
    description: 'Decentralized finance protocols and yield generation',
    icon: BookOpen,
    color: 'bg-green-500',
    services: [
      {
        icon: BookOpen,
        title: "DeFi Mechanics",
        description: "Explore lending and borrowing markets on Aave and Spark (formerly MakerDAO).",
        benefit: "Optimize capital efficiency"
      },
      {
        icon: Building,
        title: "Institutional Credit",
        description: "Access credit pools through Maple Finance for institutional lending.",
        benefit: "Earn fixed-income returns on-chain"
      },
      {
        icon: Lock,
        title: "On-Chain Treasuries",
        description: "Tokenized T-Bills via Ondo Finance for stable, on-chain treasury exposure.",
        benefit: "Risk-free yield with blockchain benefits"
      }
    ]
  },
  {
    id: 'security',
    title: 'Security & Custody',
    description: 'Enterprise-grade security and asset management',
    icon: Shield,
    color: 'bg-orange-500',
    services: [
      {
        icon: Wallet,
        title: "Sovereign Ownership",
        description: "Invest in BTC, ETH, and SOL using cold wallets, DEXs, and liquid staking.",
        benefit: "Full control over your assets"
      },
      {
        icon: Shield,
        title: "Custody Security",
        description: "Showcase the capabilities of Safe multisig for enhanced security.",
        benefit: "Multi-signature protection"
      },
      {
        icon: Layers,
        title: "Unified Chain Experience",
        description: "Onboard to Infinex for passkey wallets, multichain management, and perpetuals.",
        benefit: "Seamless cross-chain operations"
      }
    ]
  }
]

function Services() {
  const [expandedCategory, setExpandedCategory] = useState('investment')

  return (
    <section id="services" className="py-20 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Crypto Solutions
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Four pillars of institutional-grade crypto services designed specifically for family offices.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                expandedCategory === category.id
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
                  : 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700'
              }`}
            >
              <category.icon size={18} />
              <span className="hidden sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className={`overflow-hidden transition-all duration-300 ${
                expandedCategory === category.id ? 'opacity-100' : 'hidden'
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{category.description}</p>
                </div>
              </div>

              {/* Services Cards */}
              <div className="grid md:grid-cols-3 gap-4">
                {category.services.map((service, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 card-hover"
                  >
                    <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center mb-4">
                      <service.icon size={20} className="text-neutral-700 dark:text-neutral-300" />
                    </div>
                    <h4 className="font-semibold mb-2">{service.title}</h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">{service.description}</p>
                    <div className="flex items-center text-xs text-green-600 dark:text-green-400 font-medium">
                      <Sparkles size={12} className="mr-1" />
                      {service.benefit}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* All Services Link */}
        <div className="text-center mt-10">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Showing {serviceCategories.find(c => c.id === expandedCategory)?.services.length || 0} of 12 services
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
