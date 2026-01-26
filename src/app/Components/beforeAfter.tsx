"use client"

import { motion } from "framer-motion"
import {
  Sliders,
  TrendingUp,
  RefreshCw,
  Database,
  Settings,
  ArrowUp,
} from "lucide-react"

const painPoints = [
  {
    icon: Sliders,
    title: "Disconnected Systems",
    description:
      "Separate tools across departments cause delays, double entry, and costly errors. We bring everything into one streamlined system.",
  },
  {
    icon: TrendingUp,
    title: "Lack of Real-Time Insights",
    description:
      "You can't make great decisions with outdated data. We provide live dashboards and up-to-date reports.",
  },
  {
    icon: RefreshCw,
    title: "Manual Workflows",
    description:
      "Approvals, payroll, inventory — too much is done by hand. We automate where it matters most.",
  },
  {
    icon: Database,
    title: "Scattered Data",
    description:
      "Your data is all over the place — spreadsheets, emails, disconnected apps. We unify it in one place.",
  },
  {
    icon: Settings,
    title: "Generic Software",
    description:
      "Off-the-shelf software forces you to adapt to it. We build solutions that adapt to you.",
  },
  {
    icon: ArrowUp,
    title: "Difficult to Scale",
    description:
      "Your current tools weren't built to grow with you. Our platform scales alongside your success.",
  },
]

export default function PainPointsSection() {
  return (
    <section id="services" className="w-full section-padding bg-background-alt">
      <div className="container-grid">
        <div className="text-center mb-16">
          <span className="text-label text-secondary mb-4 block">
            CHALLENGES WE SOLVE
          </span>
          <h2 className="text-section text-primary">
            Business Challenges We Solve
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 border border-border shadow-card hover:border-secondary hover:shadow-card-hover transition-all duration-200 group"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-lg bg-[#1a2b3c] flex items-center justify-center group-hover:bg-secondary transition-colors duration-200">
                  <point.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-secondary">
                  {point.title}
                </h4>
                <p className="text-sm text-text-subtle">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
