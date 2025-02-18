'use client'

import { motion } from 'framer-motion'
import { FuzzyOverlay } from '@/components/FuzzyOverlay'
import Image from 'next/image'

export default function Referral() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  const referralSteps = [
    {
      title: "Submit Referral",
      description: "Fill out a simple form with your referral's contact information",
      icon: "📝",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "We Make Contact",
      description: "Our team reaches out to your referral to discuss their needs",
      icon: "📞",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Get Paid",
      description: "Receive $100 when your referral becomes a client",
      icon: "💰",
      color: "from-green-500 to-emerald-500"
    }
  ]

  const benefits = [
    {
      title: "Simple Rewards",
      description: "Get $100 for each successful referral",
      icon: "💸",
      features: [
        "One-time $100 Payout",
        "No Complex Systems",
        "No Referral Limits",
        "Direct Payment Methods"
      ]
    },
    {
      title: "Easy Process",
      description: "Just submit their info and we'll handle the rest",
      icon: "🤝",
      features: [
        "Simple Form Submission",
        "Email Confirmation",
        "We Contact the Lead",
        "Get Paid When They Sign"
      ]
    },
    {
      title: "Win-Win",
      description: "Help others while earning rewards",
      icon: "🌟",
      features: [
        "Quality Services",
        "Professional Support",
        "Satisfaction Guarantee",
        "Help Businesses Grow"
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 overflow-hidden">
        <FuzzyOverlay />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white">
                Earn $100 Per Referral
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Know a Business that needs a professional website? Send them our way, and if they sign up, we'll pay you $100 as a thank you! 💰
              </p>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-green-600 
                         font-medium hover:bg-gray-50 transition-all transform hover:-translate-y-1 
                         hover:shadow-lg"
              >
                Refer Someone Now
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <span className="text-green-600 font-semibold mb-4 block tracking-wider">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Three Simple Steps
            </h2>
            <p className="text-gray-600 text-lg">
              Start earning rewards in minutes with our simple referral process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {referralSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl 
                           transition-all duration-300 border border-gray-100
                           hover:border-green-500/20 h-full relative"
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-600 text-white 
                                rounded-full flex items-center justify-center text-lg font-bold">
                    {index + 1}
                  </div>
                  
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} 
                                flex items-center justify-center text-3xl mb-6 mx-auto`}>
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <span className="text-green-600 font-semibold mb-4 block tracking-wider">
              BENEFITS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Join Our Referral Program?
            </h2>
            <p className="text-xl text-gray-600">
              Earn rewards while helping businesses grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl 
                           transition-all duration-300 border border-gray-100
                           hover:border-green-500/20 h-full"
                >
                  <div className="text-4xl mb-6">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 mb-6">{benefit.description}</p>
                  <ul className="space-y-3">
                    {benefit.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-gray-600">
                        <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Form Section */}
      <section id="referral-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto"
            {...fadeInUp}
          >
            <div className="text-center mb-12">
              <span className="text-green-600 font-semibold mb-4 block tracking-wider">
                GET STARTED
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Submit Your Referral
              </h2>
              <p className="text-gray-600 text-lg">
                Fill out the form below to refer a business and start earning
              </p>
            </div>

            <motion.div
              className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Your Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Referral's Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Referral's Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Additional Notes</label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
                    rows={4}
                    placeholder="Tell us about the referral's needs..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg 
                           font-medium hover:from-green-700 hover:to-emerald-700 transition-all transform 
                           hover:-translate-y-1 hover:shadow-lg"
                >
                  Submit Referral
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 relative overflow-hidden"
        {...fadeInUp}
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Start Earning Today!
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our referral program and earn $100 for every successful referral
            </p>
            <motion.a
              href="#referral-form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-green-600 
                       font-medium hover:bg-gray-50 transition-all transform hover:-translate-y-1"
            >
              Submit Your First Referral
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </div>
      </motion.section>
    </main>
  )
} 