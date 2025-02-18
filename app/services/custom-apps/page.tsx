'use client'

import { motion } from 'framer-motion'
import { FuzzyOverlay } from '@/components/FuzzyOverlay'
import Image from 'next/image'

export default function CustomApplications() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  const technologies = [
    {
      name: "Frontend",
      icon: "🎨",
      stack: [
        { name: "React", level: 95, image: "/tech/react.svg" },
        { name: "Next.js", level: 90, image: "/tech/nextjs.svg" },
        { name: "TypeScript", level: 85, image: "/tech/typescript.svg" },
        { name: "Tailwind CSS", level: 95, image: "/tech/tailwind.svg" }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Backend",
      icon: "⚡",
      stack: [
        { name: "Node.js", level: 90, image: "/tech/nodejs.svg" },
        { name: "Python", level: 85, image: "/tech/python.svg" },
        { name: "Go", level: 80, image: "/tech/go.svg" },
        { name: "GraphQL", level: 85, image: "/tech/graphql.svg" }
      ],
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Database",
      icon: "🗄️",
      stack: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 80 },
        { name: "Firebase", level: 85 }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "DevOps",
      icon: "🚀",
      stack: [
        { name: "Docker", level: 85 },
        { name: "Kubernetes", level: 80 },
        { name: "AWS", level: 85 },
        { name: "CI/CD", level: 90 }
      ],
      color: "from-orange-500 to-red-500"
    }
  ]

  const services = [
    {
      title: "Custom Web Applications",
      description: "Scalable, secure, and high-performance web applications tailored to your needs",
      features: [
        "Single Page Applications (SPA)",
        "Progressive Web Apps (PWA)",
        "Real-time Applications",
        "Enterprise Solutions"
      ],
      icon: "💻"
    },
    {
      title: "Mobile Applications",
      description: "Cross-platform mobile apps that provide native-like experience",
      features: [
        "React Native Development",
        "iOS & Android Apps",
        "Mobile-First Design",
        "Offline Capabilities"
      ],
      icon: "📱"
    },
    {
      title: "API Development",
      description: "Robust and scalable APIs that power your applications",
      features: [
        "RESTful APIs",
        "GraphQL APIs",
        "Microservices",
        "API Security"
      ],
      icon: "🔌"
    },
    {
      title: "Cloud Solutions",
      description: "Cloud-native applications with modern architecture",
      features: [
        "Serverless Architecture",
        "Cloud Migration",
        "Auto-scaling",
        "High Availability"
      ],
      icon: "☁️"
    }
  ]

  const processSteps = [
    {
      title: "Discovery",
      description: "Understanding your business needs and technical requirements",
      details: [
        "Requirements Analysis",
        "Technical Feasibility",
        "Solution Architecture",
        "Project Planning"
      ],
      icon: "🔍"
    },
    {
      title: "Design",
      description: "Creating the perfect user experience and technical design",
      details: [
        "UI/UX Design",
        "System Architecture",
        "Database Design",
        "Security Planning"
      ],
      icon: "✏️"
    },
    {
      title: "Development",
      description: "Building your application with cutting-edge technologies",
      details: [
        "Agile Development",
        "Code Reviews",
        "Quality Assurance",
        "Regular Updates"
      ],
      icon: "👨‍💻"
    },
    {
      title: "Deployment",
      description: "Launching your application with proper infrastructure",
      details: [
        "CI/CD Pipeline",
        "Performance Testing",
        "Security Audits",
        "Monitoring Setup"
      ],
      icon: "🚀"
    }
  ]

  const portfolioExamples = [
    {
      title: "Framer Care",
      description: "Chronic Care Management platform designed for healthcare providers to efficiently monitor patient data, track vitals, and streamline communication between doctors and nurses for improved patient care",
      image: "/projects/healthcare.jpg",
      tech: ["React", "Next.js", "AWS"]
    },
    {
      title: "MyJodi",
      description: "An innovative event planning platform helping South Asian couples plan their dream wedding with curated vendors, timeline management, and budget tracking",
      image: "/projects/myjodi.jpg",
      tech: ["React", "Next.js", "AWS"]
    },
    {
      title: "Locus",
      description: "Premier event venue platform connecting event planners and hosts with unique venues, featuring virtual tours and real-time availability",
      image: "/projects/locus.jpg",
      tech: ["React", "Next.js", "AWS"]
    },
    {
      title: "Robobooth",
      description: "AI-powered photo booth revolutionizing event photography with instant filters, digital props, and seamless social media sharing",
      image: "/projects/robobooth.jpg",
      tech: ["React", "Next.js", "AWS"]
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-900 overflow-hidden">
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
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
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
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
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
                Custom Application Development
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Transforming ideas into powerful, scalable software solutions
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-white text-blue-600 font-medium 
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

      {/* Technology Stack Section with Animated Progress Bars */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Technology Stack
            </h2>
            <p className="text-gray-600 text-lg">
              We use cutting-edge technologies to build robust applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tech.color} 
                              flex items-center justify-center text-2xl mb-4`}>
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{tech.name}</h3>
                <div className="space-y-4">
                  {tech.stack.map((item) => (
                    <div key={item.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">{item.name}</span>
                        <span className="text-gray-400">{item.level}%</span>
                      </div>
                      <motion.div
                        className="h-2 bg-gray-100 rounded-full overflow-hidden"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1 }}
                      >
                        <motion.div
                          className={`h-full bg-gradient-to-r ${tech.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Development Services
            </h2>
            <p className="text-gray-600 text-lg">
              End-to-end custom application development tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 
                                flex items-center justify-center text-2xl">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
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

      {/* Process Section with Timeline */}
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
              A systematic approach to turning your vision into reality
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative flex items-center gap-8 mb-12"
              >
                <div className="hidden md:block w-1/2 pr-12 text-right">
                  {index % 2 === 0 && (
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail) => (
                          <li key={detail} className="text-gray-500 flex items-center justify-end gap-2">
                            {detail}
                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 
                              flex items-center justify-center text-2xl text-white z-10">
                  {step.icon}
                </div>

                <div className="md:w-1/2 pl-12">
                  {index % 2 !== 0 && (
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <ul className="space-y-2">
                        {step.details.map((detail) => (
                          <li key={detail} className="text-gray-500 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real-world examples of our custom application development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {portfolioExamples.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group h-full"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl 
                           transition-all duration-300 h-full flex flex-col"
                >
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full 
                                   text-sm font-medium"
                        >
                          {tech}
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

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-900 relative overflow-hidden"
        {...fadeInUp}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Build Your Custom Application?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create something amazing together. Our team is ready to bring your vision to life.
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