"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Calendar,
  Users,
  Target,
  Lightbulb,
  Award,
  Code,
  ShoppingCart,
  BarChart,
  Globe,
  ArrowRight,
  Zap,
  Shield,
  Database,
  Cloud,
  Smartphone,
  TrendingUp,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { number: "10+", label: "Years Experience", icon: Calendar },
    { number: "50+", label: "Projects Delivered", icon: CheckCircle },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "24/7", label: "Support", icon: Shield },
  ]

  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Enterprise-grade applications built with cutting-edge technologies",
      tech: ["Node.js", "React", "Python", "Laravel"],
    },
    {
      icon: Globe,
      title: "Web Applications",
      description:
        "Scalable, responsive web solutions that drive business growth.",
      tech: ["Next.js", "TypeScript", "Tailwind", "API"],
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Platforms",
      description:
        "Complete online stores with payment integration and analytics",
      tech: ["Shopify", "WooCommerce", "Stripe", "Analytics"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      tech: ["React Native", "Flutter", "iOS", "Android"],
    },
    {
      icon: Database,
      title: "Data Solutions",
      description: "Big data processing, analytics, and business intelligence",
      tech: ["PostgreSQL", "MongoDB", "Redis", "AWS"],
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions and DevOps implementation",
      tech: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
  ]

  const timeline = [
    {
      year: "2015",
      title: "Foundation",
      description:
        "Launched consulting and technology services in a 40 SQM office in Addis Ababa.",
      icon: Zap,
    },
    {
      year: "2021",
      title: "First Major Project",
      description:
        "Successfully deployed a Health Network Signage and Website System for a major Ethiopian pharmacy network.",
      icon: TrendingUp,
    },
    {
      year: "2023",
      title: "Expansion",
      description:
        "Expanded to new headquarters with the infrastructure to support scaled-up development and delivery.",
      icon: Target,
    },
    {
      year: "2024",
      title: "Global Reach",
      description:
        "Launched full-scale digital e-commerce and booking platforms for world-renowned Ethiopian companies.",
      icon: Globe,
    },
  ]

  const values = [
    {
      icon: Award,
      title: "Reliability",
      desc: "We keep our promises and deliver consistently",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "We challenge the norm to build smarter solutions",
    },
    {
      icon: Users,
      title: "User-Focus",
      desc: "We design intuitive systems that solve real problems",
    },
    {
      icon: BarChart,
      title: "Insight",
      desc: "We transform data into actionable knowledge",
    },
    {
      icon: Target,
      title: "Excellence",
      desc: "We exceed expectations in every project",
    },
    {
      icon: Shield,
      title: "Integrity",
      desc: "We build trust through transparency and honesty",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-background-alt">
        <div className="container-grid relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-label text-secondary mb-6 block">ABOUT US</span>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-primary">
              NXT
            </h1>
            <div className="text-2xl md:text-3xl font-light mb-8 text-text-subtle">
              <span className="text-secondary">Trading</span> PLC
            </div>
            <p className="text-body-lg text-text-subtle mb-12 max-w-3xl mx-auto">
              Pioneering the future of digital transformation with cutting-edge
              software solutions and innovative technologies
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 border border-border shadow-card hover:border-secondary hover:shadow-card-hover transition-all duration-200"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-secondary" />
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-text-subtle text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-text-subtle text-xs tracking-wide">SCROLL</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-background">
        <div className="container-grid">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-label text-secondary">OUR MISSION</span>
              <h2 className="text-section text-primary">
                Building the{" "}
                <span className="text-secondary">Digital Future</span> of
                Ethiopia
              </h2>
              <p className="text-lg text-text-subtle leading-relaxed">
                We provide cutting-edge media and communication technologies
                backed by exceptional software development and professional
                support services. Success comes from being flexible, responsive,
                and aligned with the ever-evolving needs of our clients.
              </p>
              <Link href="/contactus">
                <Button className="group mt-4">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative bg-white rounded-lg border border-border shadow-card-hover overflow-hidden">
                <Image
                  src="/NXTSmall.png"
                  alt="Digital Innovation"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-background-alt">
        <div className="container-grid">
          <div className="text-center mb-16">
            <span className="text-label text-secondary mb-4 block">OUR JOURNEY</span>
            <h2 className="text-section text-primary mb-6">
              Evolution of Excellence
            </h2>
            <p className="text-body-lg text-text-subtle max-w-3xl mx-auto">
              From humble beginnings to high-impact projects, our journey
              reflects our passion for growth and innovation
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-white rounded-lg p-6 border border-border shadow-card hover:border-secondary hover:shadow-card-hover transition-all duration-200">
                      <div className={`flex items-center gap-3 mb-4 ${
                        index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                      }`}>
                        <item.icon className="w-5 h-5 text-secondary" />
                        <span className="text-2xl font-bold text-secondary">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-primary">
                        {item.title}
                      </h3>
                      <p className="text-text-subtle">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="relative z-10 hidden md:block">
                    <div className="w-5 h-5 rounded-full bg-secondary border-4 border-white shadow-md"></div>
                  </div>

                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-grid">
          <div className="text-center mb-16">
            <span className="text-label text-secondary mb-4 block">OUR EXPERTISE</span>
            <h2 className="text-section text-primary mb-6">
              Comprehensive Tech Solutions
            </h2>
            <p className="text-body-lg text-text-subtle max-w-3xl mx-auto">
              We specialize in cutting-edge technologies and methodologies to
              deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 border border-border shadow-card hover:border-secondary hover:shadow-card-hover transition-all duration-200 group"
              >
                <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-5 group-hover:bg-secondary transition-colors duration-200">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {service.title}
                </h3>
                <p className="text-text-subtle mb-5">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-sm text-xs font-medium bg-background-alt text-primary border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-primary">
        <div className="container-grid">
          <div className="text-center mb-16">
            <span className="text-label text-secondary mb-4 block">OUR VALUES</span>
            <h2 className="text-section text-white mb-6">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-200"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {value.title}
                </h3>
                <p className="text-white/70">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background-alt">
        <div className="container-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-section text-primary mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-body-lg text-text-subtle mb-10">
              Let&apos;s collaborate to build innovative solutions that drive your
              success in the digital age
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contactus">
                <Button size="lg" className="group">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contactus">
                <Button variant="outline" size="lg">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
