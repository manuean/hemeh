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
  Rocket
} from 'lucide-react'

const services = [
  {
    icon: Coins,
    title: "Revenue-Driven Assets",
    description: "Build positions in tokens backed by protocol cash flow (e.g., HYPE, LIT).",
    color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
  },
  {
    icon: Target,
    title: "Prediction Markets",
    description: "Set up accounts on Polymarket, Kalshi, and Opinion to master betting mechanics.",
    color: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
  },
  {
    icon: TrendingUp,
    title: "Real-World Asset Trading",
    description: "Buy stocks and commodities with leverage on trade.xyz.",
    color: "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
  },
  {
    icon: Droplets,
    title: "PerpDEX Liquidity",
    description: "Deposit capital into PerpDEX liquidity vaults (Lighter, Extended, Paradex).",
    color: "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400"
  },
  {
    icon: Shield,
    title: "Hedging Strategies",
    description: "Use trade.xyz to hedge exposure against specific commodity price movements.",
    color: "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
  },
  {
    icon: BookOpen,
    title: "DeFi Mechanics",
    description: "Explore lending and borrowing markets on Aave and Spark (formerly MakerDAO).",
    color: "bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400"
  },
  {
    icon: Wallet,
    title: "Sovereign Ownership",
    description: "Invest in BTC, ETH, and SOL using cold wallets, DEXs, and liquid staking.",
    color: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400"
  },
  {
    icon: Building,
    title: "Institutional Credit",
    description: "Access credit pools through Maple Finance for institutional lending.",
    color: "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
  },
  {
    icon: Lock,
    title: "On-Chain Treasuries",
    description: "Tokenized T-Bills via Ondo Finance for stable, on-chain treasury exposure.",
    color: "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400"
  },
  {
    icon: Shield,
    title: "Custody Security",
    description: "Showcase the capabilities of Safe multisig for enhanced security.",
    color: "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
  },
  {
    icon: Layers,
    title: "Unified Chain Experience",
    description: "Onboard to Infinex for passkey wallets, multichain management, and perpetuals.",
    color: "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400"
  },
  {
    icon: Rocket,
    title: "Early Stage Investing",
    description: "Pre-Seed, Series A, and OTC Deals for strategic early investments.",
    color: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400"
  }
]

function Services() {
  return (
    <section id="services" className="py-20 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Comprehensive crypto and DeFi solutions tailored for family offices and institutional investors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 card-hover cursor-pointer"
            >
              <div className={`w-10 h-10 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                <service.icon size={20} />
              </div>
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
