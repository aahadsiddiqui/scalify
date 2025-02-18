'use client'

import { motion } from 'framer-motion'
import { FuzzyOverlay } from '@/components/FuzzyOverlay'
import { useState, FormEvent } from 'react'
import { useForm, ValidationError } from '@formspree/react'

export default function Contact() {
  const [state, handleSubmit] = useForm("xldgozvv")
  const [activeTab, setActiveTab] = useState('general')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  })

  const contactOptions = [
    {
      id: 'general',
      title: 'General Inquiry',
      icon: '💬',
      description: 'Questions about our services or company'
    },
    {
      id: 'project',
      title: 'Start a Project',
      icon: '🚀',
      description: 'Discuss your project requirements'
    },
    {
      id: 'partnership',
      title: 'Partnership',
      icon: '🤝',
      description: 'Explore collaboration opportunities'
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-xl shadow-xl text-center"
        >
          <h2 className="text-2xl font-bold text-green-600 mb-4">Message Sent Successfully!</h2>
          <p className="text-gray-600 mb-6">We'll get back to you as soon as possible.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg"
          >
            Send Another Message
          </motion.button>
        </motion.div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 overflow-hidden">
        <FuzzyOverlay />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Let's Build Something Amazing
              </h1>
              <p className="text-xl text-gray-300">
                Get in touch with us and turn your vision into reality
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Contact Type Selector */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {contactOptions.map((option) => (
                <motion.button
                  key={option.id}
                  onClick={() => setActiveTab(option.id)}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-6 rounded-xl text-left transition-all ${
                    activeTab === option.id
                      ? 'bg-white shadow-lg border-2 border-blue-500'
                      : 'bg-white/50 border-2 border-transparent hover:shadow-md'
                  }`}
                >
                  <div className="text-3xl mb-4">{option.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <p className="text-gray-600">{option.description}</p>
                </motion.button>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                               focus:ring-2 focus:ring-blue-200 transition-colors"
                      placeholder="John Doe"
                    />
                    <ValidationError 
                      prefix="Name" 
                      field="name"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </motion.div>

                  <motion.div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                               focus:ring-2 focus:ring-blue-200 transition-colors"
                      placeholder="john@example.com"
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </motion.div>
                </div>

                {activeTab === 'project' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  >
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Project Budget
                      </label>
                      <select
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                                 focus:ring-2 focus:ring-blue-200 transition-colors"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      >
                        <option value="">Select budget range</option>
                        <option value="5-10k">$5,000 - $10,000</option>
                        <option value="10-25k">$10,000 - $25,000</option>
                        <option value="25-50k">$25,000 - $50,000</option>
                        <option value="50k+">$50,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Timeline
                      </label>
                      <select
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                                 focus:ring-2 focus:ring-blue-200 transition-colors"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      >
                        <option value="">Select timeline</option>
                        <option value="1-2-months">1-2 months</option>
                        <option value="2-4-months">2-4 months</option>
                        <option value="4-6-months">4-6 months</option>
                        <option value="6+-months">6+ months</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                <motion.div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 
                             focus:ring-2 focus:ring-blue-200 transition-colors"
                    rows={6}
                    placeholder="Tell us about your project or inquiry..."
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </motion.div>

                <motion.div className="flex justify-end">
                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white 
                             rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 
                             transition-all transform hover:-translate-y-1 hover:shadow-lg
                             disabled:opacity-50"
                  >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>

            {/* Additional Contact Info */}
            <motion.div 
              className="mt-16 text-center"
              {...fadeInUp}
            >
              <h2 className="text-2xl font-bold mb-6">
                Prefer email?
              </h2>
              <a 
                href="mailto:info@scalify.com"
                className="text-xl text-blue-600 hover:text-blue-700 transition-colors"
              >
                info@scalify.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 