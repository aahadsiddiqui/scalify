'use client'

import { motion } from 'framer-motion'
import { FuzzyOverlay } from '@/components/FuzzyOverlay'
import Image from 'next/image'

export default function CloudSolutions() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  const cloudServices = [
    {
      title: "Cloud Migration",
      description: "Seamless transition of your infrastructure and applications to the cloud",
      features: [
        "Infrastructure Assessment",
        "Migration Strategy",
        "Zero-Downtime Migration",
        "Post-Migration Support"
      ],
      icon: "🚀",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cloud Architecture",
      description: "Design and implementation of scalable cloud infrastructure",
      features: [
        "Serverless Architecture",
        "Microservices Design",
        "High Availability",
        "Disaster Recovery"
      ],
      icon: "🏗️",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "DevOps & Automation",
      description: "Streamline development and operations with automated workflows",
      features: [
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Container Orchestration",
        "Automated Testing"
      ],
      icon: "⚙️",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cloud Security",
      description: "Enterprise-grade security for your cloud infrastructure",
      features: [
        "Security Assessment",
        "Compliance Management",
        "Identity Management",
        "Encryption Solutions"
      ],
      icon: "🔒",
      color: "from-orange-500 to-red-500"
    }
  ]

  const technologies = [
    {
      name: "AWS Services",
      icon: "☁️",
      stack: [
        { name: "EC2 & ECS", level: 95 },
        { name: "Lambda & API Gateway", level: 90 },
        { name: "RDS & DynamoDB", level: 92 },
        { name: "S3 & CloudFront", level: 88 }
      ],
      color: "from-orange-500 to-yellow-500"
    },
    {
      name: "Azure Services",
      icon: "⚡",
      stack: [
        { name: "App Services", level: 90 },
        { name: "Azure Functions", level: 88 },
        { name: "Cosmos DB", level: 85 },
        { name: "Azure DevOps", level: 92 }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "DevOps Tools",
      icon: "🔧",
      stack: [
        { name: "Docker", level: 95 },
        { name: "Kubernetes", level: 88 },
        { name: "Terraform", level: 90 },
        { name: "Jenkins", level: 85 }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Monitoring",
      icon: "📊",
      stack: [
        { name: "CloudWatch", level: 92 },
        { name: "Prometheus", level: 88 },
        { name: "Grafana", level: 90 },
        { name: "ELK Stack", level: 85 }
      ],
      color: "from-green-500 to-emerald-500"
    }
  ]

  const caseStudies = [
    {
      title: "E-commerce Platform Migration",
      description: "Migrated a high-traffic e-commerce platform to AWS with zero downtime",
      metrics: [
        { label: "Cost Reduction", value: "65%" },
        { label: "Performance", value: "3x Faster" },
        { label: "Uptime", value: "99.99%" },
        { label: "Scalability", value: "10x Capacity" }
      ],
      image: "/case-studies/cloud-ecommerce.jpg",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "FinTech Infrastructure",
      description: "Built a secure, compliant cloud infrastructure for a financial services provider",
      metrics: [
        { label: "Security Score", value: "98/100" },
        { label: "Compliance", value: "100%" },
        { label: "Response Time", value: "50ms" },
        { label: "Availability", value: "99.999%" }
      ],
      image: "/case-studies/cloud-fintech.jpg",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Healthcare Platform",
      description: "Developed a HIPAA-compliant cloud solution for healthcare data management",
      metrics: [
        { label: "Data Processing", value: "5TB/day" },
        { label: "Compliance", value: "HIPAA" },
        { label: "Cost Savings", value: "75%" },
        { label: "Scalability", value: "Unlimited" }
      ],
      image: "/case-studies/cloud-healthcare.jpg",
      color: "from-green-500/20 to-emerald-500/20"
    }
  ]

  const benefits = [
    {
      title: "Cost Optimization",
      description: "Reduce infrastructure costs with optimized cloud solutions",
      metrics: ["45% Average Cost Reduction", "Pay-as-you-go Model", "Resource Optimization"],
      icon: "💰",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Scalability",
      description: "Scale your infrastructure instantly based on demand",
      metrics: ["Auto-scaling", "Load Balancing", "Global Deployment"],
      icon: "📈",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Security",
      description: "Enterprise-grade security and compliance",
      metrics: ["Data Encryption", "Access Control", "Security Monitoring"],
      icon: "🔐",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Reliability",
      description: "Ensure high availability and disaster recovery",
      metrics: ["99.99% Uptime", "Backup Solutions", "Disaster Recovery"],
      icon: "⚡",
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-br from-cyan-900 via-blue-800 to-purple-900 overflow-hidden">
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
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
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
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
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
                Cloud Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Scale your business with secure, reliable cloud infrastructure
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
                  Get Started
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
                
                <motion.a
                  href="#case-studies"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full border-2 border-white text-white font-medium 
                           hover:bg-white/10 transition-all transform hover:-translate-y-1 
                           hover:shadow-lg flex items-center gap-2"
                >
                  View Case Studies
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
            <span className="text-blue-600 font-semibold mb-4 block tracking-wider">
              OUR SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive Cloud Solutions
            </h2>
            <p className="text-gray-600 text-lg">
              End-to-end cloud services to transform and scale your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {cloudServices.map((service, index) => (
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
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} 
                                flex items-center justify-center text-2xl text-white
                                group-hover:scale-110 transition-transform`}>
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
                        <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <span className="text-blue-600 font-semibold mb-4 block tracking-wider">
              OUR EXPERTISE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Cloud Technologies & Tools
            </h2>
            <p className="text-gray-600 text-lg">
              Leveraging industry-leading technologies for optimal cloud solutions
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
                           transition-all duration-300 h-full"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${tech.color} 
                                flex items-center justify-center text-2xl mb-6 text-white
                                group-hover:scale-110 transition-transform`}>
                    {tech.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{tech.name}</h3>
                  
                  <div className="space-y-4">
                    {tech.stack.map((item) => (
                      <div key={item.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 font-medium">{item.name}</span>
                          <span className="text-sm text-gray-400">{item.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.level}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className={`h-full bg-gradient-to-r ${tech.color}`}
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <span className="text-blue-600 font-semibold mb-4 block tracking-wider">
              KEY BENEFITS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Cloud Solutions
            </h2>
            <p className="text-gray-600 text-lg">
              Transform your business with the power of cloud technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
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
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.color} 
                                flex items-center justify-center text-3xl mb-6 text-white
                                group-hover:scale-110 transition-transform`}>
                    {benefit.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 mb-6">{benefit.description}</p>
                  
                  <ul className="space-y-3">
                    {benefit.metrics.map((metric) => (
                      <li key={metric} className="flex items-center gap-3 text-gray-600">
                        <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {metric}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Success Stories Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <span className="text-blue-600 font-semibold mb-4 block tracking-wider">
              SUCCESS STORIES
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Cloud Transformation Results
            </h2>
            <p className="text-gray-600 text-lg">
              Real impact through strategic cloud implementations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Enterprise SaaS Migration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl border border-gray-100"
            >
              <div className="space-y-6">
                <div>
                  <span className="text-blue-600 font-semibold">Enterprise</span>
                  <h3 className="text-2xl font-bold">SaaS Platform Migration</h3>
                  <p className="text-gray-600 mt-2">
                    Migrated a legacy enterprise software to a modern cloud-native SaaS platform
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">99.99%</div>
                    <div className="text-sm text-gray-600">Uptime Achievement</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">65%</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">3x</div>
                    <div className="text-sm text-gray-600">Faster Deployment</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">10x</div>
                    <div className="text-sm text-gray-600">Scalability Improvement</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Healthcare Data Platform */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl border border-gray-100"
            >
              <div className="space-y-6">
                <div>
                  <span className="text-blue-600 font-semibold">Healthcare</span>
                  <h3 className="text-2xl font-bold">Secure Data Platform</h3>
                  <p className="text-gray-600 mt-2">
                    Built a HIPAA-compliant cloud platform for healthcare data management
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">100%</div>
                    <div className="text-sm text-gray-600">HIPAA Compliance</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">50TB</div>
                    <div className="text-sm text-gray-600">Data Managed</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">45%</div>
                    <div className="text-sm text-gray-600">Faster Access Time</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-sm text-gray-600">Monitoring</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* E-commerce Scale-up */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl border border-gray-100"
            >
              <div className="space-y-6">
                <div>
                  <span className="text-blue-600 font-semibold">E-commerce</span>
                  <h3 className="text-2xl font-bold">High-Scale Platform</h3>
                  <p className="text-gray-600 mt-2">
                    Scaled e-commerce platform to handle peak season traffic and transactions
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">500K</div>
                    <div className="text-sm text-gray-600">Concurrent Users</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">0.3s</div>
                    <div className="text-sm text-gray-600">Response Time</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">40%</div>
                    <div className="text-sm text-gray-600">Infrastructure Savings</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">Zero</div>
                    <div className="text-sm text-gray-600">Downtime</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FinTech Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl border border-gray-100"
            >
              <div className="space-y-6">
                <div>
                  <span className="text-blue-600 font-semibold">FinTech</span>
                  <h3 className="text-2xl font-bold">Secure Banking Infrastructure</h3>
                  <p className="text-gray-600 mt-2">
                    Implemented secure cloud infrastructure for digital banking services
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">ISO</div>
                    <div className="text-sm text-gray-600">27001 Certified</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">1M+</div>
                    <div className="text-sm text-gray-600">Daily Transactions</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">99.999%</div>
                    <div className="text-sm text-gray-600">Security SLA</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">Real-time</div>
                    <div className="text-sm text-gray-600">Threat Detection</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-cyan-900 via-blue-800 to-purple-900 relative overflow-hidden"
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
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's build a scalable, secure cloud solution for your business
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