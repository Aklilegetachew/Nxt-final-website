// components/PreviousWorks.tsx

import { motion } from "framer-motion"
import React from "react"

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
    <section className="py-16 bg-secondary ">
      <div className="max-w-5xl mx-auto text-center mb-12 px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Proven Enterprise Solutions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Over the years, we’ve built powerful, scalable software solutions that
          have transformed businesses across various industries. Here are a few
          of our flagship projects:
        </p>
      </div>

      <div className="space-y-10 max-w-7xl mx-auto px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col h-72 md:flex-row bg-primary overflow-hidden shadow hover:shadow-lg transition duration-300 "
          >
            {/* Image Section with Overlay Animation + Text */}
            <div className="relative md:w-2/3 w-full md:h-auto">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay + Text Animation */}
              <motion.div
                initial="initial"
                whileHover="hover"
                variants={{
                  initial: { x: 0, opacity: 1 },
                  hover: { x: "100%", opacity: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 bg-black/60 flex items-center justify-center transition-all"
              >
                <motion.div
                  variants={{
                    initial: { opacity: 1 },
                    hover: { opacity: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="text-white text-center px-4"
                >
                  <h4 className="text-2xl font-semibold mb-2">Modules</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-left">
                    {project.modules.map((module, idx) => (
                      <li className="text-lg" key={idx}>
                        {module}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="md:w-1/3 w-full p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-secondary mb-4">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white font-medium hover:underline"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PreviousWorks
