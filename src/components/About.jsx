import { CheckCircle } from 'lucide-react'

const features = [
  "Institutional-grade security protocols",
  "24/7 dedicated support",
  "Custom portfolio strategies",
  "Regulatory compliance guidance",
  "Multi-chain expertise",
  "Risk management frameworks"
]

function About() {
  return (
    <section id="about" className="py-20 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Why Family Offices Choose HEMEH
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              We bridge the gap between traditional wealth management and the emerging digital asset ecosystem.
              Our team brings decades of combined experience in institutional finance, blockchain technology,
              and regulatory compliance.
            </p>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-neutral-600 dark:text-neutral-400 text-sm">Years Experience</div>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-neutral-600 dark:text-neutral-400 text-sm">Protocol Partners</div>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-neutral-600 dark:text-neutral-400 text-sm">Client Retention</div>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-neutral-600 dark:text-neutral-400 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
