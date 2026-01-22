import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: "What is the minimum investment to work with HEMEH?",
    answer: "We typically work with family offices managing $10M+ in assets. However, we evaluate each relationship individually and may accommodate smaller portfolios with compelling growth potential or strategic fit."
  },
  {
    question: "How do you ensure the security of digital assets?",
    answer: "We implement institutional-grade security including multi-signature wallets (Safe), hardware security modules, air-gapped cold storage, and comprehensive insurance coverage. All custody solutions are audited by leading security firms."
  },
  {
    question: "What's your approach to regulatory compliance?",
    answer: "We maintain strict compliance with regulations across all jurisdictions we operate in. Our team includes former SEC and CFTC professionals who ensure all strategies adhere to current and anticipated regulatory frameworks."
  },
  {
    question: "How do fees work?",
    answer: "Our fee structure is transparent and aligned with your success. We offer management fees based on AUM with performance incentives tied to benchmark outperformance. Detailed fee schedules are provided during consultation."
  },
  {
    question: "Can you integrate with our existing wealth management structure?",
    answer: "Absolutely. We work alongside your existing advisors, accountants, and legal teams. Our role is to provide specialized crypto expertise that complements your current wealth management infrastructure."
  },
  {
    question: "What reporting and transparency do you provide?",
    answer: "Clients receive real-time portfolio dashboards, monthly performance reports, quarterly strategy reviews, and annual comprehensive audits. We also provide tax documentation optimized for digital asset reporting requirements."
  }
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Common questions from family offices exploring crypto investments.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle size={20} className="text-blue-500 flex-shrink-0" />
                  <span className="font-medium">{faq.question}</span>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-neutral-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-5 pb-5 text-sm text-neutral-600 dark:text-neutral-400 pl-12">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-neutral-500 dark:text-neutral-400 mb-4">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium hover:opacity-90 transition-all"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
