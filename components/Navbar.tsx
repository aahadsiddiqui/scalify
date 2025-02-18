'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const serviceItems = [
  { label: '💻 Web Development', path: '/services/web-development' },
  { label: '🛍️ E-commerce Solutions', path: '/services/ecommerce' },
  { label: '⚡ Custom Applications', path: '/services/custom-apps' },
  { label: '🎨 UI/UX Design', path: '/services/ui-ux-design' },
  { label: '📊 Digital Strategy', path: '/services/digital-strategy' },
  { label: '☁️ Cloud Solutions', path: '/services/cloud-solutions' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-white shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.jpg"
                alt="scalify"
                width={150}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </motion.div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              <motion.div whileHover={{ y: -2 }}>
                <Link 
                  href="/about" 
                  className="transition-all text-gray-800 hover:text-black"
                >
                  ABOUT
                </Link>
              </motion.div>

              {/* Services Dropdown */}
              <motion.div whileHover={{ y: -2 }}>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-gray-800 hover:text-black transition-all focus:outline-none">
                    SERVICES
                    <svg 
                      className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent 
                    className="w-64 bg-white rounded-xl shadow-xl mt-2 p-2 border border-gray-100"
                    align="start"
                  >
                    {serviceItems.map((item) => (
                      <DropdownMenuItem key={item.path} className="focus:outline-none">
                        <Link 
                          href={item.path}
                          className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-50 
                                   transition-colors w-full group"
                        >
                          <span className="text-xl mr-3 group-hover:scale-125 transition-transform">
                            {item.label.split(' ')[0]}
                          </span>
                          <div>
                            <span className="font-medium">
                              {item.label.split(' ').slice(1).join(' ')}
                            </span>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>

              <motion.div whileHover={{ y: -2 }}>
                <Link 
                  href="/portfolio" 
                  className="transition-all text-gray-800 hover:text-black"
                >
                  PORTFOLIO
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -2 }}>
                <Link 
                  href="/pricing" 
                  className="transition-all text-gray-800 hover:text-black"
                >
                  PRICING
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -2 }}>
                <Link 
                  href="/referral" 
                  className="transition-all text-gray-800 hover:text-black"
                >
                  REFERRAL
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link 
                  href="/contact" 
                  className="px-6 py-2.5 rounded-full font-medium bg-black text-white 
                           hover:bg-gray-900 transition-all"
                >
                  CONTACT
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-800"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-black hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-black hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-black hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/referral"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-black hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Referral
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-black hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            
            <div className="pt-4 border-t border-gray-200">
              <div className="px-3 font-medium text-gray-600 mb-2">Services</div>
              {serviceItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="block px-3 py-2 rounded-md text-base text-gray-600 hover:text-black hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
} 