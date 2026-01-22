"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface Tab {
  label: string
  title: string
  subtitle: string
  image: string
}

export default function FeatureTabsSection({ tabs }: { tabs: Tab[] }) {
  const [activeTab, setActiveTab] = useState("Planning")
  const current = tabs.find((tab) => tab.label === activeTab)!

  return (
    <section className="w-full section-padding bg-background-alt overflow-hidden">
      <div className="container-grid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-label text-secondary mb-4 block">OUR PROCESS</span>
              <h2 className="text-section text-primary">
                Our End-to-End Software Development Process
              </h2>
            </motion.div>

            {/* Tabs */}
            <div className="space-y-3 border-l-2 border-border">
              {tabs.map((tab, index) => (
                <motion.div
                  key={tab.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`pl-6 py-3 cursor-pointer transition-all duration-200 relative ${
                    activeTab === tab.label
                      ? "text-primary"
                      : "text-text-subtle hover:text-primary"
                  }`}
                  onClick={() => setActiveTab(tab.label)}
                >
                  {activeTab === tab.label && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute left-0 top-0 bottom-0 w-0.5 bg-secondary"
                    />
                  )}
                  <div className="flex items-center space-x-3">
                    <span className={`text-lg font-semibold ${
                      activeTab === tab.label ? "text-primary" : ""
                    }`}>
                      {tab.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="pt-4"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {current.title}
                </h3>
                <p className="text-text-subtle">{current.subtitle}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Image */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.label}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="rounded-lg overflow-hidden shadow-card-hover"
              >
                <Image
                  src={current.image}
                  alt={current.label}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
