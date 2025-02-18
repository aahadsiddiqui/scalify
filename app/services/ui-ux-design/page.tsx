'use client'

import { motion } from 'framer-motion'
import { FuzzyOverlay } from '@/components/FuzzyOverlay'
import Image from 'next/image'

export default function UiUxDesign() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  const designServices = [
    {
      title: "User Interface Design",
      description: "Creating visually stunning and intuitive interfaces that users love",
      features: [
        "Custom Interface Design",
        "Design Systems",
        "Responsive Design",
        "Interactive Prototypes"
      ],
      icon: "🎨"
    },
    {
      title: "User Experience Design",
      description: "Crafting seamless experiences that delight and engage users",
      features: [
        "User Research",
        "Information Architecture",
        "User Flow Mapping",
        "Usability Testing"
      ],
      icon: "🎯"
    },
    {
      title: "Design Strategy",
      description: "Aligning design decisions with business goals and user needs",
      features: [
        "Brand Strategy",
        "User Personas",
        "Journey Mapping",
        "Design Workshops"
      ],
      icon: "💡"
    },
    {
      title: "Design Systems",
      description: "Building scalable and consistent design frameworks",
      features: [
        "Component Libraries",
        "Style Guides",
        "Design Documentation",
        "Pattern Libraries"
      ],
      icon: "📐"
    }
  ]

  const tools = [
    {
      name: "Design",
      icon: "✏️",
      stack: [
        { name: "Figma", level: 95 },
        { name: "Adobe XD", level: 90 },
        { name: "Sketch", level: 85 },
        { name: "Illustrator", level: 88 }
      ],
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "Prototyping",
      icon: "⚡",
      stack: [
        { name: "Framer", level: 92 },
        { name: "Principle", level: 85 },
        { name: "ProtoPie", level: 88 },
        { name: "InVision", level: 90 }
      ],
      color: "from-violet-500 to-purple-500"
    },
    {
      name: "Research",
      icon: "🔍",
      stack: [
        { name: "Maze", level: 90 },
        { name: "Hotjar", level: 88 },
        { name: "UserTesting", level: 85 },
        { name: "Analytics", level: 92 }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Collaboration",
      icon: "🤝",
      stack: [
        { name: "Zeplin", level: 90 },
        { name: "Abstract", level: 85 },
        { name: "Miro", level: 92 },
        { name: "Notion", level: 88 }
      ],
      color: "from-green-500 to-emerald-500"
    }
  ]

  const processSteps = [
    {
      title: "Discovery",
      description: "Understanding your brand, users, and business objectives",
      details: [
        "Stakeholder Interviews",
        "User Research",
        "Competitive Analysis",
        "Market Research"
      ],
      icon: "🔍"
    },
    {
      title: "Strategy",
      description: "Developing a comprehensive design strategy",
      details: [
        "User Personas",
        "Journey Mapping",
        "Information Architecture",
        "Content Strategy"
      ],
      icon: "🎯"
    },
    {
      title: "Design",
      description: "Creating beautiful and functional designs",
      details: [
        "Wireframing",
        "UI Design",
        "Prototyping",
        "Design Systems"
      ],
      icon: "✨"
    },
    {
      title: "Validation",
      description: "Testing and refining the design solution",
      details: [
        "Usability Testing",
        "A/B Testing",
        "User Feedback",
        "Design Iteration"
      ],
      icon: "✅"
    }
  ]

  const portfolioItems = [
    {
      title: "E-commerce Redesign",
      description: "Complete UX overhaul for a major retail platform",
      image: "/portfolio/ecommerce-ux.jpg",
      metrics: ["43% Conversion Increase", "65% Better User Satisfaction"]
    },
    {
      title: "Mobile Banking App",
      description: "Modern banking experience for digital-first users",
      image: "/portfolio/banking-app.jpg",
      metrics: ["92% Task Completion Rate", "4.8/5 App Store Rating"]
    },
    {
      title: "SaaS Dashboard",
      description: "Complex data visualization made simple",
      image: "/portfolio/saas-dashboard.jpg",
      metrics: ["38% Faster Task Completion", "89% User Satisfaction"]
    }
  ]

  // Add new showcase projects
  const showcaseProjects = [
    {
      title: "Financial Dashboard",
      description: "Redesigned complex financial data into an intuitive dashboard",
      image: "/portfolio/finance-dashboard.jpg",
      metrics: [
        { label: "User Efficiency", value: "47% Increase" },
        { label: "Error Rate", value: "92% Reduction" },
        { label: "User Satisfaction", value: "4.9/5" }
      ],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Healthcare Platform",
      description: "Chronic Care Management platform enabling healthcare providers to monitor patient data, track vitals, and improve care coordination",
      image: "/projects/healthcare.jpg",
      metrics: [
        { label: "Non-Complex Patients", value: "129" },
        { label: "Complex Patients", value: "45" },
        { label: "Not Enrolled", value: "89" }
      ],
      additionalMetrics: [
        { label: "Patients With Devices", value: "18" },
        { label: "Devices Supplied", value: "18" },
        { label: "Not Enrolled RPM", value: "190" }
      ],
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "E-commerce Mobile App",
      description: "Complete UX overhaul of mobile shopping experience",
      image: "/portfolio/ecommerce-mobile.jpg",
      metrics: [
        { label: "Conversion Rate", value: "52% Higher" },
        { label: "Cart Abandonment", value: "41% Lower" },
        { label: "User Retention", value: "68% Better" }
      ],
      color: "from-purple-500/20 to-pink-500/20"
    }
  ]

  // Add design principles
  const designPrinciples = [
    {
      title: "User-Centered Design",
      description: "Every decision is made with the user's needs in mind",
      icon: "🎨",
      principles: [
        "Extensive User Research",
        "Behavioral Analysis",
        "Usability Testing",
        "Iterative Design Process"
      ]
    },
    {
      title: "Visual Hierarchy",
      description: "Guiding users through content with purposeful design",
      icon: "👁️",
      principles: [
        "Clear Information Structure",
        "Strategic Use of Color",
        "Typography Hierarchy",
        "Whitespace Optimization"
      ]
    },
    {
      title: "Accessibility First",
      description: "Ensuring designs are accessible to all users",
      icon: "♿",
      principles: [
        "WCAG 2.1 Compliance",
        "Color Contrast",
        "Screen Reader Support",
        "Keyboard Navigation"
      ]
    }
  ]

  // Add design process steps with more detail
  const detailedProcess = [
    {
      phase: "Research & Discovery",
      description: "Understanding users and business goals",
      steps: [
        {
          title: "User Research",
          details: "Conducting interviews, surveys, and user testing",
          icon: "🔍"
        },
        {
          title: "Market Analysis",
          details: "Studying competitors and industry trends",
          icon: "📊"
        },
        {
          title: "Data Analysis",
          details: "Analyzing user behavior and metrics",
          icon: "📈"
        }
      ]
    },
    // ... add more detailed process steps
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-br from-purple-900 via-pink-800 to-rose-900 overflow-hidden">
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
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"
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
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-full blur-3xl"
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
                UI/UX Design Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Creating beautiful, intuitive, and user-centered digital experiences
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-white text-purple-600 font-medium 
                           hover:bg-gray-50 transition-all transform hover:-translate-y-1 
                           hover:shadow-lg flex items-center gap-2"
                >
                  Start Your Project
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
                
                <motion.a
                  href="/portfolio"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full border-2 border-white text-white font-medium 
                           hover:bg-white/10 transition-all transform hover:-translate-y-1 
                           hover:shadow-lg flex items-center gap-2"
                >
                  View Our Work
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
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
            <span className="text-purple-600 font-semibold mb-4 block tracking-wider">
              OUR SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive UI/UX Design Services
            </h2>
            <p className="text-gray-600 text-lg">
              From research to implementation, we create designs that delight users and drive results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {designServices.map((service, index) => (
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
                           hover:border-purple-500/20 h-full"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-purple-500/10 
                                flex items-center justify-center text-2xl
                                group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-gray-600">
                        <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* Tools & Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <span className="text-purple-600 font-semibold mb-4 block tracking-wider">
              OUR TOOLKIT
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Industry-Leading Design Tools
            </h2>
            <p className="text-gray-600 text-lg">
              We leverage the best tools in the industry to create exceptional designs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {tools.map((category, index) => (
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

                  {/* Tool Features */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-500 mb-3">
                      KEY FEATURES
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Prototyping", "Collaboration", "Version Control", "Design Systems"].map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm
                                   hover:bg-purple-50 hover:text-purple-600 transition-colors"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        {/* ... Process content similar to custom-apps but with processSteps data ... */}
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        {/* ... Portfolio content with portfolioItems data ... */}
      </section>

      {/* Design Principles Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <span className="text-purple-600 font-semibold mb-4 block tracking-wider">
              OUR APPROACH
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Design Principles That Drive Us
            </h2>
            <p className="text-gray-600 text-lg">
              Creating exceptional user experiences through proven design principles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {designPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl 
                           transition-all duration-300 border border-gray-100
                           hover:border-purple-500/20"
                >
                  <div className="text-4xl mb-6">{principle.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{principle.title}</h3>
                  <p className="text-gray-600 mb-6">{principle.description}</p>
                  <ul className="space-y-3">
                    {principle.principles.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-gray-600">
                        <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <span className="text-purple-600 font-semibold mb-4 block tracking-wider">
              CASE STUDIES
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Transforming User Experiences
            </h2>
            <p className="text-gray-600 text-lg">
              Real results from our design-driven approach
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row gap-12 items-center"
            >
              <div className="md:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src="/projects/healthcare.jpg"
                    alt="Healthcare Platform"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 mix-blend-multiply opacity-40" />
                </motion.div>
              </div>

              <div className="md:w-1/2 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Healthcare Platform</h3>
                  <p className="text-gray-600">
                    Chronic Care Management platform enabling healthcare providers to monitor patient data, track vitals, and improve care coordination
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-purple-600">129</div>
                    <div className="text-sm text-gray-600">Non-Complex Patients</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-purple-600">45</div>
                    <div className="text-sm text-gray-600">Complex Patients</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-purple-600">89</div>
                    <div className="text-sm text-gray-600">Not Enrolled</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-purple-600">18</div>
                    <div className="text-sm text-gray-600">Patients With Devices</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-purple-600">18</div>
                    <div className="text-sm text-gray-600">Devices Supplied</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="text-2xl font-bold text-purple-600">190</div>
                    <div className="text-sm text-gray-600">Not Enrolled RPM</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-purple-900 via-pink-800 to-rose-900 relative overflow-hidden"
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
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your User Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create intuitive and engaging designs that your users will love
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-purple-600 
                       font-medium hover:bg-gray-50 transition-all transform hover:-translate-y-1"
            >
              Start Your Design Project
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