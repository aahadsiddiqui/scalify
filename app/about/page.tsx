'use client'

import { motion } from 'framer-motion'
import { FuzzyOverlay } from '@/components/FuzzyOverlay'
import dynamic from 'next/dynamic'

// Dynamically import Spline component with no SSR
const Spline = dynamic(() => import('@/components/Spline'), { ssr: false })

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Adjusted for better mobile responsiveness */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 overflow-hidden">
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

        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="container mx-auto px-4 py-20 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center mt-8 sm:mt-0"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                Transforming Digital Dreams Into Reality
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 px-4 sm:px-0">
                We're more than just developers – we're your partners in digital innovation
              </p>

              {/* CTA Buttons - Adjusted for mobile */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 px-4 sm:px-0">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full 
                           bg-white text-blue-600 font-medium text-base sm:text-lg
                           hover:bg-gray-50 transition-all transform hover:-translate-y-1 
                           hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Schedule a Free Demo
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>

                <motion.a
                  href="/portfolio"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full 
                           border-2 border-white text-white font-medium text-base sm:text-lg
                           hover:bg-white/10 transition-all transform hover:-translate-y-1 
                           hover:shadow-lg flex items-center justify-center gap-2"
                >
                  View Our Work
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Section - New */}
      <motion.section 
        className="py-20 bg-white relative overflow-hidden"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-blue-600 font-semibold mb-4 block tracking-wider">
                OUR JOURNEY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                From Vision to Reality
              </h2>
              <div className="space-y-6">
                {[
                  {
                    year: "2018",
                    title: "The Beginning",
                    description: "Founded with a vision to transform digital landscapes"
                  },
                  {
                    year: "2019",
                    title: "Rapid Growth",
                    description: "Expanded our team and client portfolio"
                  },
                  {
                    year: "2020",
                    title: "Innovation Focus",
                    description: "Pioneered new development methodologies"
                  },
                  {
                    year: "2023",
                    title: "Global Reach",
                    description: "Serving clients across multiple continents"
                  }
                ].map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-8 border-l-2 border-blue-500/20 group"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500/20 group-hover:bg-blue-500 transition-colors">
                      <div className="absolute inset-1 rounded-full bg-blue-500" />
                    </div>
                    <span className="text-blue-600 font-semibold block mb-1">{milestone.year}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {[
                { number: "100+", label: "Projects Completed" },
                { number: "5+", label: "Team Members" },
                { number: "5+", label: "Countries Served" },
                { number: "98%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 group-hover:text-gray-900 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission Section with Spline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-blue-600">OUR MISSION</h2>
              <p className="text-xl text-gray-700">
                Our mission is to empower businesses with cutting-edge digital solutions that drive 
                growth, enhance user experience, and create lasting impact in the digital landscape.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Innovation at the core</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">User-centric approach</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Sustainable solutions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Continuous improvement</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="h-[500px] w-full"
            >
              <Spline scene="https://prod.spline.design/c82jkVowXr2CEZ8P/scene.splinecode" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise & Achievements Section */}
      <motion.section
        className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <span className="text-blue-600 font-semibold mb-4 block tracking-wider">
              OUR EXPERTISE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Industry Recognition & Expertise
            </h2>
            <p className="text-gray-600 text-lg">
              Recognized leaders in digital innovation and web development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Technical Excellence",
                description: "Mastery in modern web technologies and frameworks",
                stats: ["100+ Successful Projects", "99.9% Uptime", "24/7 Support"],
                icon: "🏆",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Industry Recognition",
                description: "Award-winning solutions and industry accolades",
                stats: ["15+ Industry Awards", "5-Star Rating", "Featured in Tech Media"],
                icon: "🌟",
                color: "from-indigo-500 to-indigo-600"
              },
              {
                title: "Global Impact",
                description: "Making a difference across industries worldwide",
                stats: ["20+ Countries", "50+ Industries", "1M+ Users Served"],
                icon: "🌍",
                color: "from-purple-500 to-purple-600"
              }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="h-full bg-white rounded-xl p-8 shadow-lg border border-gray-100 
                           hover:shadow-xl hover:border-blue-500/20 transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} 
                               flex items-center justify-center text-3xl mb-6
                               transform group-hover:rotate-6 transition-transform duration-300`}>
                    <span className="text-white">{achievement.icon}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 
                              transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 
                             transition-colors duration-300">
                    {achievement.description}
                  </p>

                  <ul className="space-y-3">
                    {achievement.stats.map((stat, statIndex) => (
                      <motion.li
                        key={statIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: (index * 0.2) + (statIndex * 0.1) }}
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="group-hover:text-gray-900 transition-colors">
                          {stat}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 
                             rounded-xl blur opacity-0 group-hover:opacity-15 transition duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden"
        {...fadeInUp}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Start Your Digital Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create something amazing together
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-600 font-medium hover:bg-gray-50 transition-all transform hover:-translate-y-1"
            >
              Get in Touch
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