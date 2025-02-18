'use client'

import { motion } from 'framer-motion'
import { FuzzyOverlay } from '@/components/FuzzyOverlay'

export default function EcommerceSolutions() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  const features = [
    {
      title: "Custom Shopping Experience",
      description: "Tailored e-commerce solutions that reflect your brand and meet your specific needs",
      icon: "🛍️"
    },
    {
      title: "Secure Payments",
      description: "Multi-payment gateway integration with top-tier security measures",
      icon: "🔒"
    },
    {
      title: "Inventory Management",
      description: "Real-time stock tracking and automated inventory management",
      icon: "📦"
    },
    {
      title: "Analytics & Insights",
      description: "Detailed reporting and analytics to optimize your sales strategy",
      icon: "📊"
    }
  ]

  const platforms = [
    {
      name: "Shopify",
      icon: "🏪",
      features: [
        "Custom Theme Development",
        "App Integration",
        "Store Optimization",
        "Performance Tuning"
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "WooCommerce",
      icon: "🛒",
      features: [
        "Custom Development",
        "Payment Integration",
        "Performance Optimization",
        "Security Hardening"
      ],
      color: "from-purple-500 to-indigo-600"
    },
    {
      name: "Magento",
      icon: "🏭",
      features: [
        "Enterprise Solutions",
        "B2B E-commerce",
        "Multi-store Management",
        "Custom Extensions"
      ],
      color: "from-orange-500 to-red-600"
    },
    {
      name: "Custom Solutions",
      icon: "⚡",
      features: [
        "Headless Commerce",
        "API Integration",
        "Scalable Architecture",
        "Custom Features"
      ],
      color: "from-blue-500 to-cyan-600"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 overflow-hidden">
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
                E-commerce Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform your business with powerful online shopping experiences
              </p>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-purple-600 
                         font-medium hover:bg-gray-50 transition-all transform hover:-translate-y-1"
              >
                Start Your Store
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive E-commerce Features
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to build and grow your online store
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/10 
                              flex items-center justify-center text-2xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Platforms We Work With
            </h2>
            <p className="text-gray-600 text-lg">
              Expert development across all major e-commerce platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${platform.color} 
                                flex items-center justify-center text-2xl mb-4`}>
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{platform.name}</h3>
                  <ul className="space-y-2 flex-grow">
                    {platform.features.map((feature) => (
                      <li key={feature} className="text-gray-600 flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Development Process
            </h2>
            <p className="text-gray-600 text-lg">
              A streamlined approach to bringing your online store to life
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Discovery & Planning",
                description: "Understanding your business needs and planning the perfect solution"
              },
              {
                step: "2",
                title: "Design & Development",
                description: "Creating a beautiful, functional online store tailored to your brand"
              },
              {
                step: "3",
                title: "Testing & Optimization",
                description: "Ensuring everything works perfectly and performs optimally"
              },
              {
                step: "4",
                title: "Launch & Support",
                description: "Going live with continued support and maintenance"
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 mb-8"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500 text-white
                              flex items-center justify-center text-xl font-bold">
                  {phase.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 relative overflow-hidden"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Launch Your Online Store?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create something amazing together
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-purple-600 
                       font-medium hover:bg-gray-50 transition-all transform hover:-translate-y-1"
            >
              Get Started
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