"use client"

import type React from "react"

import { useState, useEffect } from "react"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  MessageSquare,
  User,
  Building,
  Globe,
  CheckCircle,
} from "lucide-react"

export default function ContactUs() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const officeMapURL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7014708095016!2d38.764860211324034!3d8.99959288940983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850b4031ae6d%3A0x6205c136da432529!2sSTERLING%20BUILDING!5e0!3m2!1sen!2set!4v1749460155405!5m2!1sen!2set"

  const directionsURL =
    "https://www.google.com/maps/dir/?api=1&destination=STERLING+BUILDING,+Addis+Ababa,+Ethiopia"
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/xpwjolae", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        })

        // Hide success message after 3s (optional)
        setTimeout(() => {
          setIsSubmitted(false)
        }, 3000)
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Error sending message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: [
        "NXT Trading PLC Headquarters",
        "Addis Ababa, Ethiopia",
        "Gazebo Roundabout, Sterling Bldg",
      ],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+251 94 677 7516", "+251 937 17 46 09", "+251 115 574 409"],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "hermela@nxtsoftwares.com",
        "aklile@nxtsoftwares.com",
        "info@nxtsoftwares.com",
        "sales@nxtsoftwares.com",
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed",
      ],
    },
  ]

  const socialMedia = [
    { icon: Facebook, name: "Facebook", url: "#", color: "#1877F2" },
    { icon: Twitter, name: "Twitter", url: "#", color: "#1DA1F2" },
    { icon: Linkedin, name: "LinkedIn", url: "#", color: "#0A66C2" },
    { icon: Instagram, name: "Instagram", url: "#", color: "#E4405F" },
    { icon: Github, name: "GitHub", url: "#", color: "#181717" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 via-secondary to-secondary-100 text-primary overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-red-100 via-red-50 to-orange-50 animate-pulse"></div>
        <div
          className="absolute inset-0 bg-gradient-to-l from-orange-100 via-red-100 to-red-50 mix-blend-multiply"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="fixed inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-pulse opacity-20"
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

      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div
              className="inline-block px-6 py-3 rounded-full border-2 mb-8"
              style={{ backgroundColor: "#341C1C10", borderColor: "#010145" }}
            >
              <span
                className="text-sm font-medium"
                style={{ color: "#010145" }}
              >
                GET IN TOUCH
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-primary">
              Contact <span style={{ color: "#010145" }}>Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology?
              Let's discuss your project and bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="relative">
              <div className="backdrop-blur-lg bg-white/90 rounded-3xl p-8 border border-gray-200 shadow-2xl">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div
                      className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#010145" }}
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-primary">
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-3 border border-primary/20 rounded-lg focus:border-transparent transition-all duration-300 bg-white"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-3 border border-primary/20 rounded-lg focus:border-transparent transition-all duration-300 bg-white"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-3 border border-primary/20 rounded-lg focus:border-transparent transition-all duration-300 bg-white"
                            // style={{ focusRingColor: "#341C1C" }}
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Company Name
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-3 border border-primary/20 rounded-lg focus:border-transparent transition-all duration-300 bg-white"
                            // style={{ focusRingColor: "#341C1C" }}
                            placeholder="Enter your company name"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Subject *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 border border-primary/20 rounded-lg focus:border-transparent transition-all duration-300 bg-white"
                          // style={{ focusRingColor: "#341C1C" }}
                          placeholder="What's this about?"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:border-transparent transition-all duration-300 bg-white resize-none"
                        // style={{ focusRingColor: "#341C1C" }}
                        placeholder="Tell us about your project or inquiry..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                      style={{ backgroundColor: "#010145" }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="backdrop-blur-lg bg-white/90 rounded-2xl p-6   hover:bg-white hover:border-[#010145] hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: "#010145" }}
                      >
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="backdrop-blur-lg bg-white/90 rounded-2xl p-6 border border-gray-200 shadow-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                      style={{ backgroundColor: social.color }}
                      title={social.name}
                    >
                      <social.icon className="w-6 h-6 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div
              className="inline-block px-4 py-2 rounded-full border-2 mb-6"
              style={{ backgroundColor: "#341C1C10", borderColor: "#010145" }}
            >
              <span
                className="text-sm font-medium"
                style={{ color: "#010145" }}
              >
                FIND US
              </span>
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Location
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit our headquarters in Addis Ababa, Ethiopia. We're located in
              the heart of the business district.
            </p>
          </div>

          <div className="backdrop-blur-lg bg-primary/90 rounded-3xl p-8 shadow-2xl">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Map Section */}
              <div className="lg:col-span-2">
                <div className="relative h-96 bg-primary rounded-2xl overflow-hidden">
                  <iframe
                    src={officeMapURL}
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

                  {/* Map overlay with brand pulse */}
                  <div
                    className="absolute top-4 left-4 w-4 h-4 rounded-full animate-pulse"
                    style={{ backgroundColor: "#341C1C" }}
                  ></div>
                </div>
              </div>

              {/* Directions Panel */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-4">
                    Quick Directions
                  </h3>
                  <div className="space-y-3 text-secondary">
                    <p>📍 Located in Addis Ababa</p>
                    <p>🚗 Free parking available</p>
                    <p>🚌 Public transport accessible</p>
                    <p>✈️ 20 minutes from Bole Airport</p>
                  </div>
                </div>

                <a
                  href={directionsURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" w-full flex py-3 px-6 rounded-lg font-semibold text-primary transition-all duration-300 transform hover:scale-105  items-center justify-center gap-2 shadow-lg"
                  style={{ backgroundColor: "#f3efe0" }}
                >
                  <Globe className="w-5 h-5" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
