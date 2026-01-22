"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

type Partner = {
  name: string
  logo: string
  url: string
}

const partners: Partner[] = [
  {
    name: "Partner 2",
    logo: "/logos/white_logo 1.svg",
    url: "https://partner2.com",
  },
  {
    name: "Partner 3",
    logo: "/logos/elnes_real.svg",
    url: "https://partner3.com",
  },
  {
    name: "Partner 4",
    logo: "/logos/kuriftu_logo.svg",
    url: "https://partner4.com",
  },
  {
    name: "Partner 5",
    logo: "/logos/prime_media_real.svg",
    url: "https://partner5.com",
  },
  {
    name: "Partner 6",
    logo: "/logos/safecare_vector_real.svg",
    url: "https://partner6.com",
  },
  {
    name: "Partner 7",
    logo: "/logos/TOMOCA_real.svg",
    url: "https://partner7.com",
  },
  {
    name: "Partner 8",
    logo: "/logos/yeshiwas.svg",
    url: "https://partner8.com",
  },
]

export function Partners() {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <section ref={ref} className="section-padding bg-background-alt">
      <div className="container-grid">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-label text-secondary mb-4 block">TRUSTED BY</span>
          <h2 className="text-section text-primary mb-4">Our Partners</h2>
          <p className="text-text-subtle max-w-2xl mx-auto">
            We collaborate with leading organizations across various industries to deliver 
            exceptional results.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full h-24 md:h-28 p-4 rounded-lg bg-white border border-border hover:border-secondary hover:shadow-card transition-all duration-200 group"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  fill
                  className="object-contain p-4 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-200"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
