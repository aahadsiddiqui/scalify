'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { FuzzyOverlay } from '@/components/FuzzyOverlay'
import Image from 'next/image'

// Dynamically import SplineRocket component with no SSR
const SplineRocket = dynamic(() => import('@/components/SplineRocket'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gray-100 animate-pulse rounded-lg" />
  )
})

export default function DigitalStrategy() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  const strategyServices = [
    {
      title: "Market Analysis",
      description: "Deep dive into market trends, competitor analysis, and opportunity identification",
      features: [
        "Competitive Landscape Analysis",
        "Market Opportunity Assessment",
        "Industry Trend Research",
        "Target Audience Profiling"
      ],
      icon: "📊"
    },
    {
      title: "Digital Transformation",
      description: "Comprehensive digital transformation strategies to modernize your business",
      features: [
        "Technology Stack Assessment",
        "Process Digitization",
        "Change Management",
        "Digital Roadmap Creation"
      ],
      icon: "🔄"
    },
    {
      title: "Growth Strategy",
      description: "Data-driven strategies to accelerate business growth and market presence",
      features: [
        "Growth Channel Identification",
        "Scalability Planning",
        "Performance Metrics",
        "ROI Optimization"
      ],
      icon: "📈"
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing approaches to enhance digital presence and engagement",
      features: [
        "Content Strategy",
        "SEO Optimization",
        "Social Media Planning",
        "Marketing Automation"
      ],
      icon: "🎯"
    }
  ]

  const analyticsTools = [
    {
      name: "Data Analytics",
      icon: "📊",
      stack: [
        { name: "Google Analytics", level: 95 },
        { name: "Mixpanel", level: 90 },
        { name: "Hotjar", level: 88 },
        { name: "Amplitude", level: 85 }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Marketing",
      icon: "📣",
      stack: [
        { name: "HubSpot", level: 92 },
        { name: "Mailchimp", level: 88 },
        { name: "SEMrush", level: 90 },
        { name: "Ahrefs", level: 85 }
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Research",
      icon: "🔍",
      stack: [
        { name: "SurveyMonkey", level: 90 },
        { name: "UserTesting", level: 85 },
        { name: "Qualtrics", level: 88 },
        { name: "Typeform", level: 92 }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Project Management",
      icon: "📋",
      stack: [
        { name: "Asana", level: 90 },
        { name: "Trello", level: 88 },
        { name: "Monday.com", level: 85 },
        { name: "ClickUp", level: 87 }
      ],
      color: "from-green-500 to-emerald-500"
    }
  ]

  const successMetrics = [
    {
      title: "E-commerce Growth",
      industry: "Retail",
      results: [
        { metric: "Revenue Growth", value: "156%" },
        { metric: "Customer Acquisition", value: "89% ↑" },
        { metric: "Cart Value", value: "45% ↑" },
        { metric: "Customer Retention", value: "78% ↑" }
      ],
      color: "from-blue-500/20 to-cyan-500/20",
      image: "/case-studies/ecommerce-growth.jpg"
    },
    {
      title: "SaaS Expansion",
      industry: "Technology",
      results: [
        { metric: "User Base Growth", value: "245%" },
        { metric: "Churn Reduction", value: "67% ↓" },
        { metric: "Feature Adoption", value: "89% ↑" },
        { metric: "Customer LTV", value: "134% ↑" }
      ],
      color: "from-purple-500/20 to-pink-500/20",
      image: "/case-studies/saas-growth.jpg"
    },
    {
      title: "Brand Transformation",
      industry: "Healthcare",
      results: [
        { metric: "Brand Awareness", value: "178% ↑" },
        { metric: "Lead Generation", value: "145% ↑" },
        { metric: "Conversion Rate", value: "89% ↑" },
        { metric: "Market Share", value: "34% ↑" }
      ],
      color: "from-green-500/20 to-emerald-500/20",
      image: "/case-studies/brand-transformation.jpg"
    }
  ]

  const strategicFramework = [
    {
      phase: "Discovery & Analysis",
      description: "Comprehensive analysis of current digital presence and market position",
      steps: [
        "Business Goals Alignment",
        "Market Research",
        "Competitor Analysis",
        "SWOT Assessment"
      ],
      icon: "🔍",
      color: "from-blue-500 to-cyan-500"
    },
    {
      phase: "Strategy Development",
      description: "Creating a tailored digital strategy aligned with business objectives",
      steps: [
        "Channel Strategy",
        "Content Planning",
        "Technology Selection",
        "Resource Allocation"
      ],
      icon: "📝",
      color: "from-purple-500 to-pink-500"
    },
    {
      phase: "Implementation",
      description: "Executing the strategy with precision and agility",
      steps: [
        "Project Timeline",
        "Team Coordination",
        "Quality Assurance",
        "Performance Monitoring"
      ],
      icon: "⚡",
      color: "from-orange-500 to-red-500"
    },
    {
      phase: "Optimization",
      description: "Continuous improvement based on data and performance metrics",
      steps: [
        "Data Analysis",
        "Performance Tuning",
        "Strategy Refinement",
        "Growth Scaling"
      ],
      icon: "📈",
      color: "from-green-500 to-emerald-500"
    }
  ]

  const strategicPillars = [
    {
      title: "Market Analysis",
      icon: "📊",
      description: "Deep dive into market trends, competitor analysis, and opportunity identification",
      metrics: [
        "Industry Benchmarking",
        "Competitive Positioning",
        "Market Opportunity Sizing",
        "SWOT Analysis"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Digital Transformation",
      icon: "🔄",
      description: "Modernize your business processes and customer experiences through digital innovation",
      metrics: [
        "Process Automation",
        "Customer Journey Mapping",
        "Technology Stack Optimization",
        "Digital Workflow Implementation"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Growth Strategy",
      icon: "📈",
      description: "Data-driven approaches to accelerate business growth and market penetration",
      metrics: [
        "Channel Strategy",
        "Revenue Stream Diversification",
        "Scalability Planning",
        "Performance Metrics"
      ],
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        <FuzzyOverlay />
        
        {/* Content Container */}
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-center h-full">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white z-10 max-w-3xl text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Digital Strategy That Drives Growth
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform your business with data-driven digital strategies that deliver measurable results
              </p>
              <div className="flex gap-4 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-white text-blue-600 font-medium 
                           hover:bg-gray-50 transition-all"
                >
                  Get Started
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <span className="text-blue-600 font-semibold mb-4 block tracking-wider">
              OUR SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive Digital Strategy Services
            </h2>
            <p className="text-gray-600 text-lg">
              Data-driven strategies to accelerate your digital transformation and business growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {strategyServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl 
                           transition-all duration-300 border border-gray-100
                           hover:border-blue-500/20 h-full"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 
                                flex items-center justify-center text-2xl
                                group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-gray-600">
                        <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* Tools & Analytics Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <span className="text-blue-600 font-semibold mb-4 block tracking-wider">
              OUR TOOLKIT
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Industry-Leading Tools & Analytics
            </h2>
            <p className="text-gray-600 text-lg">
              Leveraging cutting-edge tools to drive data-informed decisions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {analyticsTools.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl 
                           transition-all duration-300 h-full"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} 
                                flex items-center justify-center text-2xl mb-6 text-white
                                group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{category.name}</h3>
                  
                  <div className="space-y-4">
                    {category.stack.map((tool) => (
                      <div key={tool.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 font-medium">{tool.name}</span>
                          <span className="text-sm text-gray-400">{tool.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tool.level}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className={`h-full bg-gradient-to-r ${category.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Framework Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <span className="text-blue-600 font-semibold mb-4 block tracking-wider">
              OUR APPROACH
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Strategic Framework
            </h2>
            <p className="text-gray-600 text-lg">
              A proven methodology for digital success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {strategicFramework.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl 
                           transition-all duration-300 border border-gray-100
                           hover:border-blue-500/20 h-full"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${phase.color} 
                                flex items-center justify-center text-3xl mb-6 text-white
                                group-hover:scale-110 transition-transform`}>
                    {phase.icon}
                  </div>
                  
                  <div className="relative">
                    <span className="absolute -left-4 -top-4 text-6xl font-bold text-gray-100 select-none">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-bold mb-4 relative">{phase.phase}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{phase.description}</p>
                  
                  <ul className="space-y-3">
                    {phase.steps.map((step) => (
                      <li key={step} className="flex items-center gap-3 text-gray-600">
                        <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {step}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Pillars Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Strategic Pillars
            </h2>
            <p className="text-xl text-gray-600">
              Our comprehensive approach to digital strategy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {strategicPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl 
                           transition-all duration-300 h-full flex flex-col"
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${pillar.color} 
                                  flex items-center justify-center text-2xl`}>
                      {pillar.icon}
                    </div>
                    <h3 className="text-xl font-bold">{pillar.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6">
                    {pillar.description}
                  </p>

                  {/* Interactive Metrics */}
                  <div className="mt-auto">
                    <div className="space-y-3">
                      {pillar.metrics.map((metric, mIndex) => (
                        <motion.div
                          key={metric}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.1) + (mIndex * 0.1) }}
                          whileHover={{ x: 10 }}
                          className="flex items-center gap-3 group cursor-pointer"
                        >
                          <motion.div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${pillar.color}`}
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                            {metric}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section id="case-studies" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <span className="text-blue-600 font-semibold mb-4 block tracking-wider">
              SUCCESS STORIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Proven Results
            </h2>
            <p className="text-gray-600 text-lg">
              Real impact through strategic digital solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Spline Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative h-[500px]"
            >
              <SplineRocket />
            </motion.div>

            {/* Metrics Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-blue-600 font-semibold">Retail</span>
                <h3 className="text-2xl font-bold">E-commerce Growth</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">156%</div>
                  <div className="text-sm text-gray-600">Revenue Growth</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">89% ↑</div>
                  <div className="text-sm text-gray-600">Customer Acquisition</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">45% ↑</div>
                  <div className="text-sm text-gray-600">Cart Value</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">78% ↑</div>
                  <div className="text-sm text-gray-600">Customer Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 relative overflow-hidden"
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
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Digital Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create a data-driven strategy that drives real business results
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-600 
                       font-medium hover:bg-gray-50 transition-all transform hover:-translate-y-1"
            >
              Schedule a Strategy Session
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