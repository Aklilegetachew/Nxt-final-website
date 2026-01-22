"use client"

import { motion } from "framer-motion"
import { Phone, MapPin, Mail } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(0, 209, 255, ${0.1 + i * 0.02})`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.02}
            className="text-secondary"
            initial={{ pathLength: 0.3, opacity: 0.4 }}
            animate={{
              pathLength: 1,
              opacity: [0.2, 0.4, 0.2],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default function BackgroundPaths() {
  return (
    <div className="relative w-full section-padding flex items-center justify-center overflow-hidden bg-navy">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container-grid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center bg-white/5 backdrop-blur-md rounded-lg p-10 border border-white/10"
        >
          <span className="text-label text-secondary mb-4 block">GET IN TOUCH</span>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Ready to Start Your Project?
          </h2>

          <div className="space-y-4 text-white/80 mb-8">
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-5 h-5 text-secondary" />
              <span>+251 94 677 7516 | +251 937 17 46 09</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-5 h-5 text-secondary" />
              <span>info@nxtsoftwares.com</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5 text-secondary" />
              <span>Sterling Bldg, Olympia, Addis Ababa</span>
            </div>
          </div>

          <Link href="/contactus">
            <Button size="lg">
              Contact Us Today
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
