"use client"

import { motion } from "framer-motion"
import ServiceCard from "./service-card"

interface Service {
  title: string
  description: string
  imageSrc: string
  buttonText?: string
  buttonLink?: string
}

interface ServicesProps {
  services: Service[]
}

export default function ServicesSection({ services }: ServicesProps) {
  return (
    <div className="section-padding bg-background">
      <div className="container-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                buttonText={service.buttonText}
                buttonLink={service.buttonLink}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
