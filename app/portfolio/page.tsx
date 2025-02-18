'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FuzzyOverlay } from '@/components/FuzzyOverlay'

export default function Portfolio() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  const projects = [
    {
      name: "MyJodi",
      tagline: "Event Planning Platform",
      description: "A comprehensive event planning platform that streamlines the entire event management process, from venue selection to vendor coordination and guest management.",
      budget: "~$20,000",
      retainer: "$750/month",
      duration: "2 months",
      website: "https://www.myjodi.ca",
      image: "/projects/myjodi.jpg",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe"],
      features: [
        "Vendor Management System",
        "Real-time Event Timeline",
        "Guest List Management",
        "Budget Tracking Tools",
        "Venue Booking Integration",
        "Custom Event Websites"
      ],
      metrics: [
        "1000+ Events Planned",
        "95% Client Satisfaction",
        "40% Cost Savings for Clients",
        "500+ Vendor Partnerships",
        "Average 4.8/5 Rating"
      ],
      challenges: [
        "Complex vendor coordination requirements",
        "Real-time availability management",
        "Integration with multiple payment systems"
      ],
      solutions: [
        "Built a centralized vendor dashboard",
        "Implemented real-time calendar syncing",
        "Developed a secure payment gateway"
      ]
    },
    {
      name: "Robobooth",
      tagline: "Smart Photo Booth Management",
      description: "Automated photo booth rental and management system with remote monitoring capabilities and instant photo delivery.",
      budget: "~$1,500",
      retainer: "$250/month",
      duration: "2 weeks",
      website: "https://www.robobooth.ca",
      image: "/projects/robobooth.jpg",
      technologies: ["Vue.js", "Python", "IoT", "Docker", "GCP"],
      features: [
        "Remote Booth Control",
        "Instant Photo Delivery",
        "Custom Branding Options",
        "Event Analytics Dashboard",
        "Social Media Integration"
      ],
      metrics: [
        "10,000+ Photos Captured",
        "200+ Events Serviced",
        "99.9% Uptime",
        "3x Revenue Growth",
        "2min Average Setup Time"
      ],
      challenges: [
        "Hardware-software integration",
        "Real-time photo processing",
        "Multi-location management"
      ],
      solutions: [
        "Custom IoT framework development",
        "Cloud-based image processing",
        "Centralized management dashboard"
      ]
    },
    {
      name: "Locus",
      tagline: "Event Venue Platform",
      description: "A sophisticated venue booking and management platform connecting event planners with unique venues while streamlining the booking process.",
      budget: "~$2,000",
      retainer: "$300/month",
      duration: "2 weeks",
      website: "https://www.locusevents.ca",
      image: "/projects/locus.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "MapBox", "Azure"],
      features: [
        "Virtual Venue Tours",
        "Real-time Availability Calendar",
        "Capacity Planning Tools",
        "Integrated Booking System",
        "Venue Analytics Dashboard"
      ],
      metrics: [
        "500+ Venues Listed",
        "2000+ Bookings Processed",
        "45% Booking Rate",
        "$1M+ in Venue Bookings",
        "4.9/5 Venue Rating"
      ],
      challenges: [
        "Complex booking requirements",
        "Seasonal availability management",
        "Multiple pricing structures"
      ],
      solutions: [
        "Dynamic pricing algorithm",
        "Advanced availability system",
        "Automated booking workflow"
      ]
    },
    {
      name: "Unlmtd",
      tagline: "Digital Marketing Agency",
      description: "A full-service digital marketing agency platform managing campaigns, analytics, and client reporting in one centralized solution.",
      budget: "~$1,250",
      retainer: "$200/month",
      duration: "1 week",
      website: "https://www.unlmtdmarketing.ca",
      image: "/projects/unlmtd.jpg",
      technologies: ["Next.js", "Firebase", "Analytics API", "AI/ML"],
      features: [
        "Campaign Management",
        "Performance Analytics",
        "Automated Reporting",
        "Client Portal",
        "ROI Tracking"
      ],
      metrics: [
        "150% Average ROI",
        "300+ Campaigns Managed",
        "25+ Industries Served",
        "50% Cost Reduction",
        "85% Client Retention"
      ],
      challenges: [
        "Real-time performance tracking",
        "Multi-channel campaign management",
        "Automated reporting requirements"
      ],
      solutions: [
        "Custom analytics integration",
        "Unified dashboard development",
        "Automated report generation"
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        <FuzzyOverlay />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Our Portfolio
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transforming ideas into digital excellence
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
                  Start Your Project
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
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full border-2 border-white text-white font-medium 
                           hover:bg-white/10 transition-all transform hover:-translate-y-1 
                           hover:shadow-lg flex items-center gap-2 group"
                >
                  View Projects
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
                      d="M19 13l-7 7-7-7m14-8l-7 7-7-7" 
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mouse Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 right-8 hidden md:block"
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
            <div className="relative w-8 h-14 border-2 border-white/50 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-2 h-2 bg-white rounded-full"
              />
              <div className="absolute inset-0 rounded-full border border-white/20" />
            </div>
            <span className="text-white/50 text-sm">Scroll</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Project Image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} mix-blend-multiply opacity-40`} />
                  </motion.div>

                  {/* Project Info */}
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-3xl font-bold mb-2">{project.name}</h3>
                        <p className="text-xl text-gray-600">{project.tagline}</p>
                      </div>
                      <motion.a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-lg bg-gray-900 text-white flex items-center gap-2 hover:bg-gray-800 transition-colors"
                      >
                        Visit Website
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Details */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="p-4 rounded-xl bg-white shadow-lg">
                        <div className="text-sm text-gray-500">Budget</div>
                        <div className="text-lg font-semibold text-gray-900">{project.budget}</div>
                      </div>
                      <div className="p-4 rounded-xl bg-white shadow-lg">
                        <div className="text-sm text-gray-500">Retainer</div>
                        <div className="text-lg font-semibold text-gray-900">{project.retainer}</div>
                      </div>
                      <div className="p-4 rounded-xl bg-white shadow-lg">
                        <div className="text-sm text-gray-500">Duration</div>
                        <div className="text-lg font-semibold text-gray-900">{project.duration}</div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700
                                   hover:bg-gray-200 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features & Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-gray-600">
                              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Impact Metrics</h4>
                        <ul className="space-y-2">
                          {project.metrics.map((metric) => (
                            <li key={metric} className="flex items-center gap-2 text-gray-600">
                              <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                              {metric}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Add new sections for Challenges and Solutions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Challenges</h4>
                        <ul className="space-y-2">
                          {project.challenges.map((challenge) => (
                            <li key={challenge} className="flex items-center gap-2 text-gray-600">
                              <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Solutions</h4>
                        <ul className="space-y-2">
                          {project.solutions.map((solution) => (
                            <li key={solution} className="flex items-center gap-2 text-gray-600">
                              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's turn your vision into reality
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-600 
                       font-medium hover:bg-gray-50 transition-all transform hover:-translate-y-1"
            >
              Start Your Project
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