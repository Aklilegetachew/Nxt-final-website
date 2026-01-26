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
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ContactUs() {
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
    setIsVisible(true)
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
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-background-alt">
        <div className="container-grid text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-label text-secondary mb-4 block">GET IN TOUCH</span>
            <h1 className="text-hero text-primary mb-6">
              Contact <span className="text-secondary">Us</span>
            </h1>
            <p className="text-body-lg text-text-subtle max-w-2xl mx-auto">
              Ready to transform your business with cutting-edge technology?
              Let&apos;s discuss your project and bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-grid">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-background-alt rounded-lg p-8 border border-border shadow-card">
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-primary mb-3">
                    Send us a Message
                  </h2>
                  <p className="text-text-subtle">
                    Fill out the form below and we&apos;ll get back to you within 24
                    hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-text-subtle">
                      Thank you for contacting us. We&apos;ll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-primary mb-2"
                        >
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-subtle" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="input-field pl-12"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-primary mb-2"
                        >
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-subtle" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="input-field pl-12"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-primary mb-2"
                        >
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-subtle" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="input-field pl-12"
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-primary mb-2"
                        >
                          Company Name
                        </label>
                        <div className="relative">
                          <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-subtle" />
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="input-field pl-12"
                            placeholder="Enter your company name"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-primary mb-2"
                      >
                        Subject *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-subtle" />
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="input-field pl-12"
                          placeholder="What's this about?"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-primary mb-2"
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
                        className="input-field resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background-alt rounded-lg p-6 border border-border shadow-card hover:border-secondary hover:shadow-card-hover transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-background" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-text-subtle text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-background-alt rounded-lg p-6 border border-border shadow-card"
              >
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                      style={{ backgroundColor: social.color }}
                      title={social.name}
                    >
                      <social.icon className="w-5 h-5 text-white" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-background-alt">
        <div className="container-grid">
          <div className="text-center mb-12">
            <span className="text-label text-secondary mb-4 block">FIND US</span>
            <h2 className="text-section text-primary mb-4">Our Location</h2>
            <p className="text-primary/70 max-w-2xl mx-auto">
              Visit our headquarters in Addis Ababa, Ethiopia. We&apos;re located in
              the heart of the business district.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="relative h-96 rounded-lg overflow-hidden border border-white/10">
                <iframe
                  src={officeMapURL}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Directions Panel */}
            <div className="space-y-6 text-primary">
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Directions</h3>
                <div className="space-y-3 text-primary/70">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-secondary" />
                    <span>Located in Addis Ababa</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-secondary">🚗</span>
                    <span>Free parking available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-secondary">🚌</span>
                    <span>Public transport accessible</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-secondary">✈️</span>
                    <span>20 minutes from Bole Airport</span>
                  </div>
                </div>
              </div>

              <a
                href={directionsURL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-sm bg-background text-primary font-semibold hover:bg-secondary transition-all duration-200 hover:-translate-y-1 shadow-lg"
              >
                <Globe className="w-5 h-5" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
