import { useState } from 'react'
import { Send, Mail, MessageSquare } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    aum: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry. We will be in touch shortly.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Get Started</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              Ready to navigate the crypto landscape with institutional-grade guidance?
              Schedule a consultation with our team.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                </div>
                <div>
                  <div className="font-medium mb-1">Email Us</div>
                  <div className="text-neutral-600 dark:text-neutral-400 text-sm">contact@hemeh.tech</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                </div>
                <div>
                  <div className="font-medium mb-1">Schedule a Call</div>
                  <div className="text-neutral-600 dark:text-neutral-400 text-sm">Book a 30-minute consultation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 text-sm"
                  placeholder="John Smith"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 text-sm"
                  placeholder="john@familyoffice.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Company / Family Office</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 text-sm"
                  placeholder="Smith Family Office"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Assets Under Management</label>
                <select
                  name="aum"
                  value={formData.aum}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 text-sm"
                >
                  <option value="">Select range</option>
                  <option value="<10m">Less than $10M</option>
                  <option value="10-50m">$10M - $50M</option>
                  <option value="50-100m">$50M - $100M</option>
                  <option value="100-500m">$100M - $500M</option>
                  <option value=">500m">More than $500M</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">How can we help?</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 text-sm resize-none"
                  placeholder="Tell us about your investment goals and interests..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg font-medium flex items-center justify-center space-x-2 hover:opacity-90 transition-all"
              >
                <span>Send Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
