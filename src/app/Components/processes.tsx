"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We start by understanding your business challenges and goals to recommend the most effective automation solutions.",
  },
  {
    number: "02",
    title: "Design & Customization",
    description:
      "Our team tailors the ERP and enterprise software to fit your workflows, ensuring seamless alignment with your operations.",
  },
  {
    number: "03",
    title: "Implementation & Integration",
    description:
      "We deploy the solution, integrate it with your existing systems, and ensure a smooth transition with minimal disruption.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "After launch, we provide continuous support, updates, and optimization to ensure long-term success and scalability.",
  },
]

export default function ProcessRopeSteps() {
  return (
    <section className="section-padding bg-background">
      <div className="container-grid">
        <div className="text-center mb-16">
          <span className="text-label text-secondary mb-4 block">OUR PROCESS</span>
          <h2 className="text-section text-primary mb-6">
            How We Deliver Enterprise Software Solutions
          </h2>
          <p className="text-body-lg text-text-subtle max-w-2xl mx-auto">
            We empower businesses through a proven process that ensures smooth
            implementation and lasting impact. Here&apos;s how we work with you:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-5 bg-white rounded-lg p-6 border border-border shadow-card hover:border-secondary hover:shadow-card-hover transition-all duration-200"
            >
              {/* Number Circle */}
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-lg">
                {step.number}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-text-subtle">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
