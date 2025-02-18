'use client'

import { motion } from 'framer-motion'
import { FuzzyOverlay } from '@/components/FuzzyOverlay'
import { useState } from 'react'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [selectedTier, setSelectedTier] = useState<string | null>(null)

  const pricingPlans = [
    {
      name: "Essentials",
      description: "Perfect for small service businesses",
      price: "750",
      maintenance: "50",
      features: [
        "Custom Website Design",
        "Mobile Responsive",
        "3 Core Pages",
        "Basic SEO Setup",
        "Contact Form Integration",
        "Social Media Integration",
        "Google Analytics Setup",
        "1 Month Support",
        "Subject to Requirements"
      ],
      timeline: "1 week",
      ideal: "Ideal for barbers, nail salons, etc",
      buttonText: "Get Started",
      buttonLink: "/contact",
      gradient: "from-teal-500 to-emerald-500"
    },
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      price: "1,000",
      maintenance: "150",
      features: [
        "Custom Website Design",
        "Mobile Responsive",
        "5 Core Pages",
        "Basic SEO Setup",
        "Contact Form Integration",
        "Social Media Integration",
        "Google Analytics Setup",
        "1 Month Support",
        "Subject to Requirements"
      ],
      timeline: "1-2 weeks",
      buttonText: "Get Started",
      buttonLink: "/contact",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      price: "2,000",
      maintenance: "250",
      features: [
        "Everything in Starter, plus:",
        "Up to 10 Custom Pages",
        "Advanced SEO Package",
        "E-commerce Integration",
        "Custom Animations",
        "Content Management System",
        "Payment Gateway Setup",
        "Email Marketing Integration",
        "Premium Support (48h)",
        "Performance Optimization",
        "Security Features"
      ],
      timeline: "2-3 weeks",
      isPopular: true,
      buttonText: "Get Started",
      buttonLink: "/contact",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      name: "Enterprise",
      description: "For large-scale custom solutions",
      price: "Custom",
      maintenance: "Custom",
      features: [
        "Everything in Professional, plus:",
        "Unlimited Custom Pages",
        "Custom Feature Development",
        "Advanced Analytics",
        "API Integration",
        "Database Design",
        "Load Balancing Setup",
        "Multi-language Support",
        "24/7 Priority Support",
        "Advanced Security Features",
        "Dedicated Project Manager"
      ],
      timeline: "Depends on Requirements",
      buttonText: "Contact Us",
      buttonLink: "/contact",
      gradient: "from-pink-500 to-rose-500"
    }
  ]

  const additionalServices = [
    {
      category: "Design & Branding",
      icon: "🎨",
      description: "Make your brand stand out",
      services: [
        { name: "Logo Design", price: 299, popular: true },
        { name: "Brand Identity Package", price: 599 },
        { name: "Custom Icon Set", price: 199 },
        { name: "UI/UX Consultation", price: 399 }
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      category: "Development Solutions",
      icon: "⚡",
      description: "Enhance your website functionality",
      services: [
        { name: "Custom Feature", price: 499, popular: true },
        { name: "API Integration", price: 399 },
        { name: "Speed Optimization", price: 299 },
        { name: "Security Package", price: 399 }
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      category: "Digital Marketing",
      icon: "🚀",
      description: "Boost your online presence",
      services: [
        { name: "SEO Starter Pack", price: 399, popular: true },
        { name: "Social Media Setup", price: 299 },
        { name: "Email Marketing", price: 399 },
        { name: "Analytics Setup", price: 299 }
      ],
      color: "from-violet-500 to-purple-500"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-gray-300">
                Choose the perfect plan for your business needs
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <motion.div
                  whileHover={{ y: -5 }}
                  className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 
                           border border-gray-100 hover:border-blue-500/20 flex flex-col"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="text-4xl font-bold mb-2">
                      ${plan.price}
                    </div>
                    <div className="text-gray-500 text-sm">
                      One-time payment
                    </div>
                    <div className="text-gray-500 text-sm">
                      + ${plan.maintenance}/month maintenance
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-gray-600">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <div className="text-gray-600 text-sm mb-4">
                      Estimated Timeline: {plan.timeline}
                    </div>

                    <motion.a
                      href={plan.buttonLink}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`block w-full py-3 px-6 text-center text-white rounded-lg font-medium 
                               bg-gradient-to-r ${plan.gradient} hover:shadow-lg transition-all`}
                    >
                      {plan.buttonText}
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Additional Services
            </h2>
            <p className="text-gray-600 text-lg">
              Enhance your project with our premium add-ons
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {additionalServices.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 
                           hover:shadow-2xl transition-all duration-300 h-full"
                >
                  {/* Category Header */}
                  <div className="text-center mb-8">
                    <span className="text-4xl mb-4 block">{category.icon}</span>
                    <h3 className="text-2xl font-bold mb-2">{category.category}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>

                  {/* Services List */}
                  <div className="space-y-4">
                    {category.services.map((service) => (
                      <motion.div
                        key={service.name}
                        className="relative p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-r 
                                 hover:from-gray-50 hover:to-white group/item transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="font-medium text-gray-900">{service.name}</span>
                            {service.popular && (
                              <span className="ml-2 inline-block px-2 py-1 text-xs font-medium text-white 
                                           bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full">
                                Popular
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-900">${service.price}</span>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="opacity-0 group-hover/item:opacity-100 transition-opacity 
                                       px-3 py-1 rounded-full text-sm font-medium text-white
                                       bg-gradient-to-r from-gray-900 to-gray-800"
                            >
                              Add
                            </motion.button>
                          </div>
                        </div>

                        {/* Hover Effect Border */}
                        <div className="absolute inset-0 rounded-xl border-2 border-transparent 
                                    group-hover/item:border-gray-200 transition-all duration-300" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        {/* Add FAQ content here */}
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project and find the perfect solution for your needs
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-600 
                       font-medium hover:bg-gray-50 transition-all transform hover:-translate-y-1"
            >
              Schedule a Consultation
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