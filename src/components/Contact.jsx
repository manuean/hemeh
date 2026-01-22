import { useState } from 'react'
import { Send, Mail, MessageSquare, CheckCircle, Shield, Clock } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    aum: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', company: '', aum: '', message: '' })
      setCurrentStep(1)
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const updateStep = () => {
    if (formData.name && formData.email && currentStep === 1) setCurrentStep(2)
    if (formData.company && formData.aum && currentStep === 2) setCurrentStep(3)
  }

  return (
    <section id="contact" className="py-20 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-full mb-4">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Navigate Crypto?
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              Schedule a free consultation with our team. We'll discuss your investment goals
              and create a customized strategy for your family office.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="font-medium mb-1">Email Us</div>
                  <div className="text-neutral-600 dark:text-neutral-400 text-sm">contact@hemeh.tech</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <div className="font-medium mb-1">Schedule a Call</div>
                  <div className="text-neutral-600 dark:text-neutral-400 text-sm">Book a 30-minute consultation</div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-green-50 dark:bg-green-900/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="font-medium mb-1">Response Time</div>
                  <div className="text-neutral-600 dark:text-neutral-400 text-sm">We respond within 24 hours</div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700">
              <Shield className="w-8 h-8 text-green-500" />
              <div>
                <div className="text-sm font-medium">Your data is secure</div>
                <div className="text-xs text-neutral-500">SOC 2 compliant • 256-bit encryption</div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-white dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  We've received your inquiry and will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <>
                {/* Progress Indicator */}
                <div className="flex items-center justify-between mb-6">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          currentStep >= step
                            ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
                            : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-400'
                        }`}
                      >
                        {currentStep > step ? <CheckCircle size={16} /> : step}
                      </div>
                      {step < 3 && (
                        <div
                          className={`w-16 sm:w-24 h-1 mx-2 rounded ${
                            currentStep > step
                              ? 'bg-neutral-900 dark:bg-white'
                              : 'bg-neutral-100 dark:bg-neutral-700'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mb-6 text-center">
                  Step {currentStep} of 3: {currentStep === 1 ? 'Your Info' : currentStep === 2 ? 'Company Details' : 'Your Message'}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={updateStep}
                      className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm"
                      placeholder="John Smith"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={updateStep}
                      className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm"
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
                      onBlur={updateStep}
                      className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm"
                      placeholder="Smith Family Office"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Assets Under Management</label>
                    <select
                      name="aum"
                      value={formData.aum}
                      onChange={handleChange}
                      onBlur={updateStep}
                      className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm"
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
                      className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm resize-none"
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
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
