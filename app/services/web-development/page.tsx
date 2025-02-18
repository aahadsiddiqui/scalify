'use client'
import { motion } from 'framer-motion'
import { FuzzyOverlay } from '@/components/FuzzyOverlay'
import dynamic from 'next/dynamic'

const WebDevSpline = dynamic(() => import('@/components/WebDevSpline'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-gray-100 animate-pulse rounded-lg" />
  )
})

export default function WebDevelopment() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  const technologies = [
    {
      name: "Frontend",
      icon: "🎨",
      tools: ["React", "Next.js", "Vue", "Tailwind CSS"],
      description: "Modern, responsive interfaces with cutting-edge frameworks",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Backend",
      icon: "⚡",
      tools: ["Node.js", "Python", "PHP", "Java"],
      description: "Robust server-side solutions for complex applications",
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Database",
      icon: "🗄️",
      tools: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
      description: "Scalable data storage and efficient management",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "DevOps",
      icon: "🚀",
      tools: ["AWS", "Docker", "CI/CD", "Kubernetes"],
      description: "Automated deployment and seamless scaling",
      color: "from-orange-500 to-red-500"
    }
  ]

  const features = [
    {
      title: "Custom Development",
      description: "Tailored solutions built specifically for your business needs",
      benefits: [
        "Unique features for your business",
        "Scalable architecture",
        "Future-proof solutions",
        "Competitive advantage"
      ],
      icon: "💡"
    },
    {
      title: "Responsive Design",
      description: "Seamless experience across all devices and screen sizes",
      benefits: [
        "Mobile-first approach",
        "Cross-browser compatibility",
        "Adaptive layouts",
        "Touch-friendly interfaces"
      ],
      icon: "📱"
    },
    {
      title: "Performance Optimization",
      description: "Lightning-fast load times and optimal user experience",
      benefits: [
        "Fast page loads",
        "Optimized assets",
        "Efficient caching",
        "Better user retention"
      ],
      icon: "⚡"
    },
    {
      title: "SEO Ready",
      description: "Built with search engines in mind for better visibility",
      benefits: [
        "Search engine friendly",
        "Structured data",
        "Performance metrics",
        "Analytics integration"
      ],
      icon: "🔍"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section - Enhanced with WebDevSpline */}
      <section className="relative min-h-[90vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        <FuzzyOverlay />
        
        <div className="container mx-auto px-4 h-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white z-10"
            >
              <motion.span 
                className="text-blue-400 font-semibold mb-4 block tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                WEB DEVELOPMENT SERVICES
              </motion.span>
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Bringing Your Digital Vision to Life
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Custom web solutions built with cutting-edge technologies for optimal performance and user experience
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-white text-blue-600 font-medium 
                           hover:bg-gray-50 transition-all"
                >
                  Start Your Project
                </motion.a>
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full border border-white text-white font-medium 
                           hover:bg-white/10 transition-all"
                >
                  Learn More
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative h-[600px] hidden lg:block"
            >
              <WebDevSpline />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies Section - Enhanced with interactive cards */}
      <section className="py-20" id="services">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <span className="text-blue-600 font-semibold mb-4 block tracking-wider">
              OUR EXPERTISE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Cutting-Edge Tech Stack
            </h2>
            <p className="text-gray-600 text-lg">
              We leverage the latest technologies to build scalable, high-performance solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl 
                           transition-all duration-300 h-full flex flex-col"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${tech.color} 
                                flex items-center justify-center text-2xl mb-6 
                                group-hover:scale-110 transition-transform`}>
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{tech.name}</h3>
                  <p className="text-gray-600 mb-6">{tech.description}</p>
                  <div className="mt-auto">
                    <div className="space-y-2">
                      {tech.tools.map((tool) => (
                        <motion.div
                          key={tool}
                          className="flex items-center gap-2 text-gray-600 group-hover:text-gray-900 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {tool}
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

      {/* Features Section - Enhanced with interactive elements */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <span className="text-blue-600 font-semibold mb-4 block tracking-wider">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Comprehensive Web Solutions
            </h2>
            <p className="text-gray-600 text-lg">
              We deliver more than just code - we create digital experiences that drive results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl 
                           transition-all duration-300 border border-gray-100
                           hover:border-blue-500/20"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 
                                  flex items-center justify-center text-2xl
                                  group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, bIndex) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (bIndex * 0.1) }}
                        className="flex items-center gap-3 group cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full bg-blue-500"
                          whileHover={{ scale: 1.5 }}
                        />
                        <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
                          {benefit}
                        </span>
                      </motion.div>
                    ))}
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
              Real impact through modern web development
            </p>
          </motion.div>

          {/* Change to single column for metrics */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-blue-600 font-semibold">Performance</span>
                <h3 className="text-2xl font-bold">Web Development Impact</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">99%</div>
                  <div className="text-sm text-gray-600">Uptime Guarantee</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">3x</div>
                  <div className="text-sm text-gray-600">Faster Load Times</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">95%</div>
                  <div className="text-sm text-gray-600">User Satisfaction</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">50%</div>
                  <div className="text-sm text-gray-600">Cost Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Build Your Web Presence?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create something amazing together
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-600 
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