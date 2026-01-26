"use client"

import FAQSection from "@/app/Components/faq"
import { Footer } from "@/app/Components/footer"
import { Header } from "@/app/Components/header"
import ServicesShowcase from "@/app/Components/service-list"
import SomeOfWorkCard from "@/app/Components/SomeWorks"
import FeatureTabsSection from "@/app/Components/stepsToDev"
import { motion } from "framer-motion"

const serviceGroups = [
  {
    title: "Software Development",
    items: [
      "Website Development",
      "Mobile App Development",
      "Telegram Bot Development",
      "Custom Idea Development",
    ],
  },
  {
    title: "API Integration Services",
    items: [
      "Payment Gateway Integration",
      "Third-party Service Integration",
      "Internal Process Automation",
      "Custom API Solutions",
    ],
  },
  {
    title: "UI/UX Design",
    items: [
      "User Interface Design",
      "Wireframing & Prototyping",
      "Design Systems",
      "Responsive Web Design",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "Cloud Infrastructure Setup",
      "CI/CD Pipelines",
      "Monitoring & Logging",
      "Infrastructure as Code",
    ],
  },
]

const services = [
  {
    id: "Software",
    title: "Software Development",
    description:
      "Need a custom website? You're in the right place. We create dozens of custom WordPress websites every year.",
    image: "/softwareDevlopment.jpg",
  },
  {
    id: "API",
    title: "API Integration Services",
    description:
      "Ready for the next step in your online success? As the leading WooCommerce partner, we create successful webshops.",
    image: "/api.jpg",
  },
  {
    id: "Design",
    title: "UI/UX Design",
    description:
      "Want to let your customers configure products online? We have extensive experience creating complex configurators.",
    image: "/ui.jpg",
  },
  {
    id: "DevOps",
    title: "Cloud & DevOps",
    description:
      "Time for efficiency? Connect different systems and automate your business processes.",
    image: "/cloud.webp",
  },
]

const tabs = [
  {
    label: "Planning",
    title: "Discovery & Requirements",
    subtitle:
      "We analyze your business goals, define scope, and document technical specifications to create a roadmap.",
    image: "/projects/planning.jpg",
  },
  {
    label: "Prototyping",
    title: "UI/UX Wireframes",
    subtitle:
      "Low-fidelity prototypes visualize user flows and validate functionality before development begins.",
    image: "/steps/prototypecolor1.png",
  },
  {
    label: "Development",
    title: "Agile Coding",
    subtitle:
      "Our engineers build scalable features using iterative sprints, with continuous testing and feedback loops.",
    image: "/steps/prototypecolor.png",
  },
  {
    label: "Testing",
    title: "QA & Optimization",
    subtitle:
      "Rigorous automated and manual testing ensures performance, security, and bug-free delivery.",
    image: "/steps/testing.webp",
  },
  {
    label: "Deployment",
    title: "Launch & Support",
    subtitle:
      "We handle seamless deployment, monitoring, and post-launch maintenance for long-term success.",
    image: "/steps/deploymnet.webp",
  },
]

const faqs = [
  {
    question: "Why us?",
    answer:
      "With over 10 years of experience, we consistently deliver high-quality software solutions. We're not just experienced — we're experts at what we do.",
  },
  {
    question: "Why build custom software?",
    answer:
      "Custom software is designed to fit your unique business workflow. It helps you avoid the limitations of generic tools and ensures a solution tailored to your specific needs.",
  },
  {
    question: "Is custom software development expensive?",
    answer:
      "Not at all. When you consider the value and long-term benefits, it's a fair and smart investment. You're paying for a solution that's built exactly for your job and business growth.",
  },
]

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Header />

        {/* Hero Section */}
        <section
          aria-labelledby="solutions-overview"
          className="relative section-padding bg-background-alt text-center pt-32 overflow-hidden"
        >
          {/* Decorative dots */}
          <div className="absolute top-0 left-0 w-48 h-48 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
              <defs>
                <pattern
                  id="dots"
                  x="0"
                  y="0"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="2" fill="currentColor" className="text-primary" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#dots)" />
            </svg>
          </div>

          <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
              <defs>
                <pattern
                  id="dots2"
                  x="0"
                  y="0"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="2" fill="currentColor" className="text-primary" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#dots2)" />
            </svg>
          </div>

          <div className="container-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-label text-secondary mb-4 block">SOFTWARE SOLUTIONS</span>
              <h1 className="text-hero text-primary mb-4">
                Empowering Ideas
              </h1>
              <h2 className="text-section text-primary mb-8">
                Through Tailored Software Solutions
              </h2>
            </motion.div>

            <motion.div
              className="h-0.5 w-full max-w-4xl mx-auto bg-border rounded-full mb-12"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ transformOrigin: "left" }}
            />

            {/* Service Groups */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                {serviceGroups.map((group, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-primary border border-border p-6 rounded-lg shadow-card hover:border-secondary hover:shadow-card-hover transition-all duration-200"
                  >
                    <h4 className="text-lg font-semibold text-primary-foreground mb-4">
                      {group.title}
                    </h4>
                    <ul
                      aria-label="Software Development Services"
                      className="space-y-2 text-sm text-text-subtle list-disc list-inside"
                    >
                      {group.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Built Section */}
        <section className="section-padding bg-background text-center">
          <div className="container-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-label text-secondary mb-4 block">PORTFOLIO</span>
              <h2 className="text-section text-primary">
                Among Our <span className="text-secondary">Works</span>
              </h2>
            </motion.div>

            <SomeOfWorkCard />
          </div>
        </section>

        <FeatureTabsSection tabs={tabs} />
        <ServicesShowcase services={services} />
        <FAQSection faqs={faqs} />

        <Footer />
      </main>
    </>
  )
}
