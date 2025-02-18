'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Image from 'next/image'
import { FuzzyOverlay } from '@/components/FuzzyOverlay'

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-x-hidden scroll-smooth">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        <FuzzyOverlay />
        <div className="container mx-auto h-full flex flex-col items-center justify-center px-4 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-300 text-transparent bg-clip-text">
              First Agency to Revolutionize Web Development
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Empowering businesses to scale seamlessly with innovative, 
              high-performance digital solutions. 🚀
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-white text-blue-600 font-medium 
                         hover:bg-gray-50 transition-all transform hover:-translate-y-1 
                         hover:shadow-lg flex items-center gap-2 group"
              >
                Get Started Today
                <svg 
                  className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </motion.a>
              
              <motion.a
                href="/portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border-2 border-white text-white font-medium 
                         hover:bg-white/10 transition-all transform hover:-translate-y-1 
                         hover:shadow-lg flex items-center gap-2 group"
              >
                Explore Projects
                <svg 
                  className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Floating Elements */}
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
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"
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
              className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center p-1">
              <motion.div 
                animate={{ y: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-1 h-1 bg-white/50 rounded-full"
              />
            </div>
            <span className="text-white/50 text-sm">Scroll</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Trust & Credibility Section */}
      <motion.section 
        className="py-20 bg-white relative overflow-hidden"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white/50" />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-blue-600 font-semibold mb-4 block tracking-wider">
              TRUSTED PARTNERS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-600 text-lg">
              Partnering with forward-thinking companies to create exceptional digital experiences
            </p>
          </motion.div>

          {/* Industry Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                industry: "Technology",
                icon: "💻",
                count: "25+",
                description: "Tech Startups"
              },
              {
                industry: "E-commerce",
                icon: "🛍️",
                count: "40+",
                description: "Online Stores"
              },
              {
                industry: "Healthcare",
                icon: "⚕️",
                count: "15+",
                description: "Healthcare Providers"
              },
              {
                industry: "Education",
                icon: "📚",
                count: "20+",
                description: "Educational Institutions"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <span className="text-4xl mb-4 block">{category.icon}</span>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{category.count}</div>
                  <div className="text-gray-900 font-medium mb-1">{category.industry}</div>
                  <div className="text-gray-500 text-sm">{category.description}</div>
                </div>
                {/* Hover Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-15 transition duration-500 group-hover:duration-200" />
              </motion.div>
            ))}
          </div>

          {/* Trust Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-16 text-center max-w-4xl mx-auto"
          >
            {[
              { 
                number: "95%", 
                label: "Client Retention",
                description: "Long-term partnerships built on trust"
              },
              { 
                number: "4.9/5", 
                label: "Client Satisfaction",
                description: "Based on independent reviews"
              },
              { 
                number: "100+", 
                label: "Active Projects",
                description: "Across multiple industries"
              }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-900 font-medium mb-1">{stat.label}</div>
                <div className="text-gray-500 text-sm group-hover:text-gray-700 transition-colors">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section 
        className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <span className="text-blue-600 font-semibold mb-4 block tracking-wider">
              WHY CHOOSE US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight pb-1">
              Transform Your Digital Presence
            </h2>
            <p className="text-gray-600 text-lg">
              Partner with us to elevate your brand in the digital landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Innovative Solutions",
                description: "Leveraging cutting-edge technologies to create forward-thinking digital solutions",
                icon: "💡",
                color: "from-blue-500 to-blue-600",
                features: ["Custom Development", "Modern Tech Stack", "Scalable Architecture"]
              },
              {
                title: "Expert Team",
                description: "Dedicated professionals with deep expertise in digital transformation",
                icon: "👥",
                color: "from-indigo-500 to-indigo-600",
                features: ["Skilled Developers", "Creative Designers", "Strategic Planners"]
              },
              {
                title: "Proven Track Record",
                description: "Consistent delivery of high-quality solutions that drive results",
                icon: "🏆",
                color: "from-purple-500 to-purple-600",
                features: ["Successful Projects", "Happy Clients", "Measurable Results"]
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="h-full bg-white rounded-xl p-6 shadow-lg border border-gray-100 
                           hover:shadow-xl hover:border-blue-500/20 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${reason.color} 
                               flex items-center justify-center text-2xl mb-6
                               transform group-hover:rotate-6 transition-transform duration-300`}>
                    <span className="text-white">{reason.icon}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 
                              transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 
                             transition-colors duration-300">
                    {reason.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3">
                    {reason.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: (index * 0.2) + (featureIndex * 0.1) }}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="group-hover:text-gray-900 transition-colors">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Decorative Gradient Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
                             rounded-xl blur opacity-0 group-hover:opacity-15 transition duration-500" />
              </motion.div>
            ))}
          </div>

          {/* Moved Pills Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              "Responsive Design",
              "SEO Optimized",
              "Cloud Native",
              "Secure by Default",
            ].map((feature, index) => (
              <div key={index} className="flex items-center justify-center text-center">
                <span className="text-gray-600 font-medium px-4 py-2 rounded-full bg-gray-50 border border-gray-100 hover:bg-white hover:border-blue-500/50 hover:text-blue-600 transition-all duration-300 w-full">
                  {feature}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Case Studies Section */}
      <motion.section
        className="py-20 bg-gray-900"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6 text-white font-sans"
              {...fadeInUp}
            >
              Recent Projects
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "MyJodi",
                subtitle: "Wedding Planning Platform",
                description: "A comprehensive South Asian wedding planning platform featuring budget tracking, vendor management, and customizable checklists.",
                image: "/projects/myjodi.jpg",
                url: "https://www.myjodi.ca",
                tags: ["Next.js", "Tailwind CSS", "React"]
              },
              {
                title: "UNLMTD Marketing",
                subtitle: "Digital Marketing Agency",
                description: "Modern marketing agency website showcasing comprehensive digital services and brand development solutions.",
                image: "/projects/unlmtd.jpg",
                url: "https://www.unlmtdmarketing.ca",
                tags: ["Next.js", "Tailwind CSS", "React"]
              },
              {
                title: "Locus Events",
                subtitle: "Event Venue Platform",
                description: "Premier event venue website featuring immersive galleries, booking system, and virtual tours.",
                image: "/projects/locus.jpg",
                url: "https://www.locusevents.ca",
                tags: ["Next.js", "Tailwind CSS", "React"]
              },
              {
                title: "RoboBooth",
                subtitle: "AI Photo Booth Service",
                description: "Innovative AI-powered photo booth service platform with interactive features and real-time processing.",
                image: "/projects/robobooth.jpg",
                url: "https://www.robobooth.ca",
                tags: ["Next.js", "Tailwind CSS", "React"]
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-[300px] w-full overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="h-full w-full"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </motion.div>
                </div>

                {/* Content Container */}
                <div className="p-6 bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-sm">
                  {/* Tags */}
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm font-medium bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
            </div>

                  {/* Project Info */}
                  <h3 className="text-2xl font-bold text-white mb-2 font-sans">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-200 font-medium mb-3 font-sans tracking-wide">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-300 mb-6 font-sans leading-relaxed">
                    {project.description}
                  </p>

                  {/* View Project Button */}
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium group/link"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 transform transition-transform group-hover/link:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.a>
              </div>
              </motion.div>
            ))}
            </div>
              </div>
      </motion.section>

      {/* Enhanced Expertise Section */}
      <motion.section 
        className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl"
          />
            </div>

        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <span className="text-blue-600 font-semibold mb-4 block tracking-wider">
              WHAT WE DO BEST
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Our Expertise
            </h2>
            <p className="text-gray-600 text-lg">
              Leveraging cutting-edge technologies to deliver exceptional digital solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Web Development",
                description: "Building scalable, high-performance web applications using cutting-edge technologies. Delivering modern solutions that drive business growth and user engagement.",
                icon: "💻",
                color: "from-blue-500 to-blue-600",
                features: [
                  "Next.js & React Applications",
                  "Progressive Web Apps",
                  "Responsive Design",
                  "Performance Optimization",
                  "API Integration",
                  "Cloud Deployment"
                ]
              },
              {
                title: "E-commerce Solutions",
                description: "Creating seamless online shopping experiences that drive conversions. Empowering businesses to thrive in the digital marketplace with robust e-commerce solutions.",
                icon: "🛍️",
                color: "from-indigo-500 to-indigo-600",
                features: [
                  "Custom E-commerce Platforms",
                  "Shopping Cart Integration",
                  "Payment Gateway Setup",
                  "Inventory Management",
                  "Order Management System",
                  "Analytics & Reporting"
                ]
              },
              {
                title: "Digital Strategy",
                description: "Developing comprehensive digital strategies to maximize your online presence. Creating data-driven approaches to enhance your brand's digital footprint and market reach.",
                icon: "📊",
                color: "from-purple-500 to-purple-600",
                features: [
                  "Market Analysis",
                  "SEO Optimization",
                  "Content Strategy",
                  "Analytics & Tracking",
                  "Conversion Optimization",
                  "Growth Planning"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative"
              >
                {/* Service Card */}
                <motion.div 
                  className="h-full bg-white rounded-xl p-6 shadow-lg border border-gray-100
                           hover:shadow-xl hover:border-blue-500/20 transition-all duration-300
                           flex flex-col"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} 
                               flex items-center justify-center text-2xl mb-6
                               transform group-hover:rotate-6 transition-transform duration-300`}>
                    <span className="text-white">{service.icon}</span>
              </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 
                                transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 
                               transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: (index * 0.2) + (featureIndex * 0.1) }}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="group-hover:text-gray-900 transition-colors">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
            </div>

                  {/* Learn More Link - Now will stay at bottom */}
                  <motion.a
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-medium
                               group-hover:text-blue-700 transition-colors mt-auto"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <svg 
                      className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                </motion.div>

                {/* Decorative Gradient Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
                             rounded-xl blur opacity-0 group-hover:opacity-15 transition duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technology Stack Section */}
      <motion.section
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.span 
              className="text-blue-400 font-semibold mb-2 block"
              {...fadeInUp}
            >
              CUTTING-EDGE TECHNOLOGIES
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6 text-white font-sans"
              {...fadeInUp}
            >
              Our Technology Stack
            </motion.h2>
            <motion.p 
              className="text-gray-400 text-lg"
              {...fadeInUp}
            >
              We leverage the latest technologies to build scalable, high-performance solutions
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Next.js",
                icon: "/icons/nextjs.svg",
                description: "A React framework that enables server-side rendering and static site generation for optimal performance and SEO.",
                benefits: [
                  "Lightning-fast page loads",
                  "Improved SEO performance",
                  "Automatic code splitting",
                  "Server-side rendering"
                ],
                color: "from-black to-gray-800"
              },
              {
                title: "React",
                icon: "/icons/react.svg",
                description: "A JavaScript library for building user interfaces with reusable components and efficient state management.",
                benefits: [
                  "Component-based architecture",
                  "Virtual DOM for performance",
                  "Rich ecosystem",
                  "Declarative UI development"
                ],
                color: "from-blue-600 to-blue-900"
              },
              {
                title: "Tailwind CSS",
                icon: "/icons/tailwind.svg",
                description: "A utility-first CSS framework that enables rapid UI development with highly customizable components.",
                benefits: [
                  "Rapid development",
                  "Consistent design system",
                  "Minimal bundle size",
                  "Responsive by default"
                ],
                color: "from-teal-500 to-teal-800"
              },
              {
                title: "AWS Architecture",
                icon: "/icons/aws.svg",
                description: "Cloud infrastructure that provides scalable, reliable, and secure hosting solutions for web applications.",
                benefits: [
                  "Global scalability",
                  "High availability",
                  "Advanced security",
                  "Cost-effective solutions"
                ],
                color: "from-orange-500 to-orange-800"
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative"
              >
                <div className={`h-full p-8 rounded-2xl bg-gradient-to-br ${tech.color} border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm`}>
                  <div className="flex items-start gap-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-16 h-16 rounded-xl bg-white/10 p-3 backdrop-blur-sm"
                    >
                      <Image
                        src={tech.icon}
                        alt={tech.title}
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{tech.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {tech.description}
                      </p>
                      <ul className="space-y-2">
                        {tech.benefits.map((benefit, benefitIndex) => (
                          <motion.li
                            key={benefitIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: (index * 0.2) + (benefitIndex * 0.1) }}
                            className="flex items-center gap-2 text-gray-400"
                          >
                            <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="group-hover:text-gray-300 transition-colors">
                              {benefit}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-15 transition duration-500 group-hover:duration-200" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Roadmap Section */}
      <motion.section
        className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <span className="text-blue-600 font-semibold mb-4 block tracking-wider">
              OUR APPROACH
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-gray-600 text-lg">
              A streamlined approach to delivering exceptional digital solutions
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your business needs and objectives",
                icon: "🔍",
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "02",
                title: "Strategy",
                description: "Developing a comprehensive plan of action",
                icon: "📋",
                color: "from-indigo-500 to-indigo-600"
              },
              {
                step: "03",
                title: "Development",
                description: "Building your solution with precision and care",
                icon: "⚙️",
                color: "from-purple-500 to-purple-600"
              },
              {
                step: "04",
                title: "Launch",
                description: "Deploying and optimizing for success",
                icon: "🚀",
                color: "from-blue-500 to-indigo-600",
                isLast: true
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Step Card */}
                <motion.div 
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 h-full
                           hover:shadow-xl hover:border-blue-500/20 transition-all duration-300
                           backdrop-blur-sm bg-white/80"
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Step Number & Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} 
                                 flex items-center justify-center text-xl text-white relative
                                 transform group-hover:rotate-6 transition-transform duration-300`}
                    >
                      {phase.isLast ? (
                        <motion.div
                          animate={{ y: [-2, 2, -2] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute -top-3 -right-2"
                        >
                          <span className="text-xl">🏁</span>
                        </motion.div>
                      ) : null}
                      <span>{phase.icon}</span>
                    </div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 
                                 bg-clip-text text-transparent group-hover:from-blue-600 
                                 group-hover:to-indigo-600 transition-all duration-300">
                      {phase.step}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 
                              transition-colors duration-300">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 
                             transition-colors duration-300">
                    {phase.description}
                  </p>
                </motion.div>

                {/* Decorative Gradient Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
                             rounded-xl blur opacity-0 group-hover:opacity-15 transition duration-500 
                             group-hover:duration-200" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* New Testimonials Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        {/* ... testimonials content ... */}
      </motion.section>

      {/* Enhanced Stats Section */}
      <motion.section
        className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <span className="text-blue-600 font-semibold mb-4 block tracking-wider">
              OUR IMPACT
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight pb-1">
              Driving Digital Success
            </h2>
            <p className="text-gray-600 text-lg">
              Transforming businesses through innovative digital solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                number: "100+",
                label: "Projects Completed",
                description: "Successful digital transformations",
                icon: "🎯",
                color: "from-blue-500 to-blue-600"
              },
              {
                number: "50+",
                label: "Happy Clients",
                description: "Across multiple industries",
                icon: "🤝",
                color: "from-indigo-500 to-indigo-600"
              },
              {
                number: "5+",
                label: "Years Experience",
                description: "Of digital excellence",
                icon: "⭐",
                color: "from-purple-500 to-purple-600"
              },
              {
                number: "24/7",
                label: "Support",
                description: "Always here to help",
                icon: "💪",
                color: "from-blue-500 to-indigo-600"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Stat Card */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-100 
                           hover:shadow-xl hover:border-blue-500/20 transition-all duration-300 h-full"
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} 
                               flex items-center justify-center text-2xl mb-4
                               transform group-hover:rotate-6 transition-transform duration-300`}>
                    <span className="text-white">{stat.icon}</span>
                  </div>

                  {/* Number Counter */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 
                             bg-clip-text text-transparent group-hover:from-blue-600 
                             group-hover:to-indigo-600 transition-all duration-300"
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      {stat.number}
                    </motion.span>
                  </motion.div>

                  {/* Label & Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 
                              transition-colors duration-300">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {stat.description}
                  </p>

                  {/* Animated Progress Ring */}
                  <svg className="absolute top-0 right-0 w-full h-full -rotate-90 scale-[1.35] opacity-[0.03] 
                              group-hover:opacity-[0.05] transition-opacity duration-300" 
                       viewBox="0 0 100 100">
                    <motion.circle
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeOut" }}
                      className="stroke-current"
                      cx="50"
                      cy="50"
                      r="45"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </motion.div>

                {/* Decorative Gradient Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
                             rounded-xl blur opacity-0 group-hover:opacity-15 transition duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="relative overflow-hidden py-24"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-800">
          {/* Animated Gradient Overlay */}
          <motion.div
            animate={{
              opacity: [0.4, 0.6, 0.4],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20"
          />
          
          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [-20, 0, -20],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] blur-xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Ready to Scale Your Digital Presence?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto"
            >
              Join the ranks of businesses that have transformed their digital presence with Scalify.
            </motion.p>
            
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-600 font-medium hover:bg-gray-50 transition-all transform hover:-translate-y-1"
            >
              Schedule a Free Consultation
              <svg 
                className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </motion.a>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </motion.section>
    </main>
  )
} 