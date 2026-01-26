"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

type faqsType = {
  question: string
  answer: string
}

export default function FAQSection({ faqs }: { faqs: faqsType[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-background-alt">
      <div className="container-grid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-label text-secondary mb-4 block">FAQ</span>
            <h2 className="text-section text-primary mb-6">
              Have questions?{" "}
              <span className="text-text-subtle">Find answers.</span>
            </h2>
            <p className="text-text-subtle">
              Got more questions? Reach out to our team at{" "}
              <a 
                href="mailto:support@nxtsoftwares.com" 
                className="text-secondary hover:underline transition-colors duration-200"
              >
                support@nxtsoftwares.com
              </a>
            </p>
          </motion.div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary hover:bg-primary-light rounded-lg shadow-card overflow-hidden border-b-none"
              >
                <button
                  className="w-full flex justify-between items-center text-left p-5 transition-colors duration-200 "
                  onClick={() => toggleIndex(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-background pr-4">{faq.question}</span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-background-alt flex items-center justify-center">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-secondary" />
                    ) : (
                      <Plus className="w-4 h-4 text-text-subtle" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-text-subtle  border-border pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
