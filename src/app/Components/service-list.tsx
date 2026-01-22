"use client"

import type React from "react"
import { useState, useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface ServiceItem {
  id: string
  title: string
  description: string
  image: string
}

export default function ServicesShowcase({
  services,
}: {
  services: ServiceItem[]
}) {
  const [activeService, setActiveService] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const { top } = containerRef.current.getBoundingClientRect()
      const y = e.clientY - top
      setMousePosition({ x: e.clientX, y })
    }
  }

  const handleMouseEnter = (id: string) => {
    setActiveService(id)
  }

  const handleMouseLeave = () => {
    setActiveService(null)
  }

  const getBackgroundPosition = () => {
    if (!containerRef.current) return { y: 0 }
    const { height } = containerRef.current.getBoundingClientRect()
    const movePercent = (mousePosition.y / height) * 10
    return { y: -5 + movePercent }
  }

  const backgroundPosition = getBackgroundPosition()

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-background overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="container-grid section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 pb-8 border-b border-border"
        >
          <span className="text-label text-secondary mb-4 block">WHAT WE DO</span>
          <h2 className="text-section text-primary">Our Expertise</h2>
        </motion.div>

        {/* Background Images */}
        {services.map((service) => (
          <div
            key={`bg-${service.id}`}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 pointer-events-none z-0 ${
              activeService === service.id ? "opacity-10" : "opacity-0"
            }`}
            style={{
              transform: `translateY(${backgroundPosition.y}%)`,
              transition: "transform 0.2s ease-out",
            }}
          >
            <Image
              src={service.image || "/placeholder.svg"}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}

        {/* Service Items */}
        <div className="relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-border relative transition-all duration-200 hover:bg-background-alt rounded-lg px-4 -mx-4 group cursor-pointer"
              onMouseEnter={() => handleMouseEnter(service.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="md:col-span-4">
                <h3 className="text-xl md:text-2xl font-semibold text-primary group-hover:text-secondary transition-colors duration-200">
                  {service.title}
                </h3>
              </div>
              <div className="md:col-span-7">
                <p className="text-text-subtle">{service.description}</p>
              </div>
              <div className="md:col-span-1 flex items-center justify-end">
                <div className="w-10 h-10 rounded-full bg-background-alt group-hover:bg-secondary flex items-center justify-center transition-all duration-200 group-hover:-translate-y-1">
                  <ArrowUpRight className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-200" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
