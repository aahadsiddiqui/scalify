import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-20">
          {/* Left side - Text content */}
          <div className="md:w-1/2 mb-10 md:mb-0 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              We build stunning, high-performance websites that help your business scale. From concept to launch, we're your trusted development partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
              >
                Get Started
              </Link>
              <Link 
                href="/portfolio" 
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
              >
                View Our Work
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12">
              <p className="text-blue-100 mb-4">Trusted by innovative companies</p>
              <div className="flex flex-wrap gap-8 items-center">
                {/* Replace these with actual client logos */}
                <div className="h-8 w-24 bg-white/10 rounded"></div>
                <div className="h-8 w-24 bg-white/10 rounded"></div>
                <div className="h-8 w-24 bg-white/10 rounded"></div>
              </div>
            </div>
          </div>

          {/* Right side - Illustration */}
          <div className="md:w-1/2 z-10">
            <div className="relative w-full h-[400px]">
              {/* Replace with your actual hero image */}
              <div className="absolute inset-0 bg-white/10 rounded-lg animate-pulse">
                {/* Placeholder for hero image */}
                <div className="w-full h-full flex items-center justify-center text-white/30">
                  Hero Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 