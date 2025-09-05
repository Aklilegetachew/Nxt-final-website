"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01.",
    title: "Consultation",
    description:
      "We start by understanding your business challenges and goals to recommend the most effective automation solutions.",
  },
  {
    number: "02.",
    title: "Design & Customization",
    description:
      "Our team tailors the ERP and enterprise software to fit your workflows, ensuring seamless alignment with your operations.",
  },
  {
    number: "03.",
    title: "Implementation & Integration",
    description:
      "We deploy the solution, integrate it with your existing systems, and ensure a smooth transition with minimal disruption.",
  },
  {
    number: "04.",
    title: "Ongoing Support",
    description:
      "After launch, we provide continuous support, updates, and optimization to ensure long-term success and scalability.",
  },
]

export default function ProcessRopeSteps() {
  return (
    <section className="bg-secondary py-24 px-6 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          How we deliver enterprise software solutions
        </h2>
        <p className="text-gray-600 text-lg">
          We empower businesses through a proven process that ensures smooth
          implementation and lasting impact. Here’s how we work with you:
        </p>
      </div>

      <div className=" grid grid-cols-2 space-y-16 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-4">
            {/* Number Circle */}
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold text-lg shadow">
              {step.number}
            </div>

            {/* Content */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
