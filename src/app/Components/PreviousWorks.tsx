"use client"

import { motion } from "framer-motion"
import React from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

type Project = {
  title: string
  description: string
  imageUrl: string
  link?: string
  modules: string[]
}

interface PreviousWorksProps {
  projects: Project[]
}

const PreviousWorks: React.FC<PreviousWorksProps> = ({ projects }) => {
  return (
    <section className="section-padding bg-background-alt">
      <div className="container-grid">
        <div className="text-center mb-16">
          <span className="text-label text-secondary mb-4 block">
            OUR SOLUTIONS
          </span>
          <h2 className="text-section text-primary mb-6">
            Our Proven Enterprise Solutions
          </h2>
          <p className="text-body-lg text-text-subtle max-w-2xl mx-auto">
            Over the years, we&apos;ve built powerful, scalable software
            solutions that have transformed businesses across various
            industries. Here are a few of our flagship projects:
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row bg-background-alt rounded-lg overflow-hidden  shadow-card hover:border-secondary hover:shadow-card-hover transition-all duration-200 group"
            >
              {/* Image Section */}
              <div className="relative md:w-2/3 w-full h-64 md:h-80">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                />

                {/* Overlay with Modules */}
                <div className="absolute inset-0 bg-navy/70 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="text-white text-center px-6">
                    <h4 className="text-lg font-semibold mb-4">Key Modules</h4>
                    <ul className="space-y-2">
                      {project.modules.map((module, idx) => (
                        <li
                          key={idx}
                          className="text-white/80 text-sm flex items-center justify-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                          {module}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-1/3 w-full p-6 flex flex-col justify-center bg-background">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-text-subtle mb-4 text-sm">
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-secondary font-medium hover:underline text-sm"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PreviousWorks
