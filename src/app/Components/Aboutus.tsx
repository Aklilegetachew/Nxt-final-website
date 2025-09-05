"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
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

export default function AboutUs() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
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
        "Scalable, responsive web solutions that drive business growth",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-red-100 via-red-50 to-orange-50 animate-pulse"></div>
        <div
          className="absolute inset-0 bg-gradient-to-l from-orange-100 via-red-100 to-red-50 mix-blend-multiply"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-secondary"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-pulse opacity-30"
              style={{
                backgroundColor: "#341C1C",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-7xl md:text-9xl font-black mb-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              NXT
            </h1>
            <div className="text-2xl md:text-4xl font-light mb-8 text-gray-600">
              <span className="text-primary">Trading</span> PLC
            </div>
            <p className="text-xl md:text-2xl text-primary mb-12 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future of digital transformation with cutting-edge
              software solutions and innovative technologies
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`backdrop-blur-lg bg-white/80 rounded-2xl p-6 border border-gray-200 hover:border-primary hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <stat.icon
                    className="w-8 h-8 mx-auto mb-4"
                    style={{ color: "#341C1C" }}
                  />
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div
              className="w-1 h-3 rounded-full mt-2 animate-pulse"
              style={{ backgroundColor: "#010145" }}
            ></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-32 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div
                className="inline-block px-4 py-2 rounded-full border-2"
                style={{ backgroundColor: "#341C1C10", borderColor: "#341C1C" }}
              >
                <span
                  className="text-sm font-medium"
                  style={{ color: "#010145" }}
                >
                  OUR MISSION
                </span>
              </div>
              <h2 className="text-5xl font-bold leading-tight text-gray-900">
                Building the{" "}
                <span style={{ color: "#010145" }}>Digital Future</span> of
                Ethiopia
              </h2>
              <p className="text-xl text-primary leading-relaxed">
                We provide cutting-edge media and communication technologies
                backed by exceptional software development and professional
                support services. Success comes from being flexible, responsive,
                and aligned with the ever-evolving needs of our clients.
              </p>
              <div className="flex items-center gap-4">
                <button
                  className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-white hover:opacity-90 shadow-lg"
                  style={{ backgroundColor: "#010145" }}
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-20"
                style={{ backgroundColor: "#010145" }}
              ></div>
              <div className="relative backdrop-blur-lg bg-white/90 rounded-3xl border border-gray-200 shadow-2xl">
                <Image
                  src="/NXTSmall.png"
                  alt="Digital Innovation"
                  width={1000}
                  height={400}
                  className="rounded-2xl object-fill"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-32 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div
              className="inline-block px-4 py-2 rounded-full border-2 mb-8"
              style={{ backgroundColor: "#341C1C10", borderColor: "#341C1C" }}
            >
              <span
                className="text-sm font-medium"
                style={{ color: "#341C1C" }}
              >
                OUR JOURNEY
              </span>
            </div>
            <h2 className="text-5xl font-bold mb-6 text-primary">
              Evolution of Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to high-impact projects, our journey
              reflects our passion for growth and innovation
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full"
              style={{ backgroundColor: "#341C1C" }}
            ></div>

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "pr-16" : "pl-16"}`}
                  >
                    <div
                      className={`backdrop-blur-lg bg-white/90 rounded-2xl p-8 border border-gray-200 hover:bg-white hover:border-primary hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      <div
                        className="flex items-center gap-3 mb-4"
                        style={{
                          justifyContent:
                            index % 2 === 0 ? "flex-end" : "flex-start",
                        }}
                      >
                        <item.icon
                          className="w-6 h-6"
                          style={{ color: "#341C1C" }}
                        />
                        <span
                          className="text-2xl font-bold"
                          style={{ color: "#341C1C" }}
                        >
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div
                      className="w-6 h-6 rounded-full border-4 border-white shadow-lg"
                      style={{ backgroundColor: "#341C1C" }}
                    ></div>
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div
              className="inline-block px-4 py-2 rounded-full border-2 mb-8"
              style={{ backgroundColor: "#341C1C10", borderColor: "#341C1C" }}
            >
              <span
                className="text-sm font-medium"
                style={{ color: "#341C1C" }}
              >
                OUR EXPERTISE
              </span>
            </div>
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Comprehensive Tech Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in cutting-edge technologies and methodologies to
              deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group backdrop-blur-lg bg-secondary rounded-2xl p-8 border border-primary hover:bg-white hover:border-primary hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              >
                <div className="relative mb-6">
                  <div
                    className="absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-20"
                    style={{ backgroundColor: "#341C1C" }}
                  ></div>
                  <div
                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center border border-gray-200 shadow-lg"
                    style={{ backgroundColor: "#010145" }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-xs text-primary border"
                      style={{
                        backgroundColor: "#341C1C10",
                        borderColor: "#341C1C",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-32 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div
              className="inline-block px-4 py-2 rounded-full border-2 mb-8"
              style={{ backgroundColor: "#341C1C10", borderColor: "#010145" }}
            >
              <span
                className="text-sm font-medium"
                style={{ color: "#010145" }}
              >
                OUR VALUES
              </span>
            </div>
            <h2 className="text-5xl font-bold mb-6 text-primary">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((value, index) => (
              <div
                key={index}
                className="group text-center p-8 backdrop-blur-lg bg-primary rounded-2xl border border-secondary hover:bg-primary/90 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center border border-secondary group-hover:border-primary transition-all duration-300 shadow-lg"
                  style={{ backgroundColor: "#341C1C10" }}
                >
                  <value.icon
                    className="w-10 h-10"
                    style={{ color: "#f3efe0" }}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-secondary group-hover:text-secondary">
                  {value.title}
                </h3>
                <p className="text-secondary leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-32 px-4"
        style={{ backgroundColor: "#f3efe0" }}
      >
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-8 text-primary">
            Ready to Transform Your Business?
          </h2>
          <p className="text-2xl text-primary mb-12 leading-relaxed">
            Let's collaborate to build innovative solutions that drive your
            success in the digital age
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contactus">
              <button
                className="group px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 bg-white hover:bg-gray-100 shadow-lg"
                style={{ color: "#010145" }}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/contactus">
              <button className="px-10 py-5 bg-primary rounded-2xl font-bold text-lg text-white transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
