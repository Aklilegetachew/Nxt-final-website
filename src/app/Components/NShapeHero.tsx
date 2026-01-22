"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function NShapeHero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error("Autoplay failed", err)
      })
    }
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/entsora2.mp4" type="video/mp4" />
      </video>

      {/* Overlay with N-shape cutout */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <mask id="n-mask">
            <rect width="1000" height="600" fill="white" />
            <path
              d="
                M600,150 
                L600,500 
                L700,450 
                L700,300 
                L800,450 
                L900,450 
                L900,150 
                L800,100 
                L800,300 
                L700,150 
                Z
              "
              fill="black"
            />
          </mask>
        </defs>
        <rect
          width="1000"
          height="600"
          fill="#0F172A"
          fillOpacity="0.85"
          mask="url(#n-mask)"
        />
      </svg>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row h-full text-white">
        {/* Left Side Content */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-lg"
          >
            <span className="text-label text-secondary mb-4 block">
              ENTERPRISE SOLUTIONS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Smart Software for Smarter Businesses
            </h1>
            <p className="text-white/70 text-lg mb-8">
              Custom ERP and business solutions tailored to your workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contactus">
                <Button size="lg" className="group">
                  Talk to Our Team
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#services">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs tracking-wide">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
