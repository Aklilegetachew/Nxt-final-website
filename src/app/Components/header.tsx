"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/ThemeToggle"

// Define the navigation item types
type DropdownItem = {
  name: string
  href: string
  description?: string
}

type NavItem = {
  name: string
  href: string
  isNew?: boolean
  dropdown?: DropdownItem[]
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const pathname = usePathname()
  const isHomePage = pathname === "/" || pathname === "/solutions/business"

  useEffect(() => {
    if (!isHomePage) {
      setScrolled(true)
      return
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        activeDropdown &&
        dropdownRefs.current[activeDropdown] &&
        !dropdownRefs.current[activeDropdown]?.contains(event.target as Node)
      ) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [activeDropdown])

  const navItems: NavItem[] = [
    { name: "HOME", href: "/" },
    {
      name: "SOLUTIONS",
      href: "#",
      dropdown: [
        {
          name: "Custom Software Development",
          href: "/solutions/software-development",
          description: "Custom software solutions tailored to your needs.",
        },
        {
          name: "Enterprise & Business Automation",
          href: "/solutions/business",
          description:
            "Streamline operations with custom ERP, CRM, and workflow automation tools for seamless management",
        },
        {
          name: "Digital Marketing",
          href: "/solutions/digital-marketing",
          description:
            "Boost your online presence with targeted marketing strategies.",
        },
        {
          name: "Storage",
          href: "/solutions/storage",
          description:
            "Secure and scalable storage solutions for your data and media.",
        },
        {
          name: "OTT",
          href: "/solutions/ott",
          description:
            "Deliver high-quality streaming services with our OTT platform solutions.",
        },
      ],
    },
    {
      name: "SERVICES",
      href: "/Services",
    },
    { name: "ABOUT US", href: "/aboutus" },
  ]

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-200 ease-in-out ${
        scrolled 
          ? "bg-background shadow-card" 
          : "bg-navy/80 backdrop-blur-sm"
      }`}
      initial={{ backgroundColor: "rgba(15, 23, 42, 0.8)" }}
      animate={{
        backgroundColor: scrolled ? "var(--background)" : "rgba(15, 23, 42, 0.8)",
        boxShadow: scrolled
          ? "0px 4px 6px rgba(0, 0, 0, 0.05)"
          : "none",
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="container-grid py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div
            className={`h-10 w-10 font-extrabold text-2xl rounded-sm flex items-center justify-center transition-colors duration-200 ${
              scrolled ? "bg-primary text-primary-foreground" : "bg-white text-primary"
            }`}
          >
            N
          </div>
          <span
            className={`text-2xl font-bold transition-colors duration-200 ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            NXT
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              ref={(el) => {
                dropdownRefs.current[item.name] = el
              }}
            >
              {item.dropdown ? (
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-200 group
                    ${
                      scrolled
                        ? "text-foreground hover:text-secondary"
                        : "text-white/90 hover:text-white"
                    }`}
                >
                  {item.name}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                  {item.isNew && (
                    <span className="absolute -top-1 -right-8 bg-accent text-white text-[10px] px-1 py-0.5 rounded-sm">
                      NEW
                    </span>
                  )}
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 w-0 transition-all duration-200 group-hover:w-full ${
                      scrolled ? "bg-secondary" : "bg-secondary"
                    }`}
                  ></span>
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`relative text-sm font-medium tracking-wide transition-colors duration-200 group ${
                    scrolled
                      ? "text-foreground hover:text-secondary"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.name}
                  {item.isNew && (
                    <span className="absolute -top-1 -right-8 bg-accent text-white text-[10px] px-1 py-0.5 rounded-sm">
                      NEW
                    </span>
                  )}
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 w-0 transition-all duration-200 group-hover:w-full ${
                      scrolled ? "bg-secondary" : "bg-secondary"
                    }`}
                  ></span>
                </Link>
              )}

              {/* Desktop Dropdown */}
              <AnimatePresence>
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-3 w-72 rounded-lg bg-card shadow-card-hover border border-border overflow-hidden z-50"
                  >
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem, idx) => (
                        <motion.div
                          key={dropdownItem.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: idx * 0.05 }}
                        >
                          <Link
                            href={dropdownItem.href}
                            className="block px-4 py-3 hover:bg-muted transition-colors duration-200 group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="font-semibold text-card-foreground group-hover:text-secondary transition-colors duration-200">
                              {dropdownItem.name}
                            </div>
                            {dropdownItem.description && (
                              <p className="mt-1 text-sm text-muted-foreground">
                                {dropdownItem.description}
                              </p>
                            )}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* CTA Button, Theme Toggle, and Mobile Menu */}
        <div className="flex items-center gap-3">
          <Link href="/contactus" className="hidden md:block">
            <Button
              variant={scrolled ? "default" : "outline"}
              size="sm"
              className={`${
                !scrolled && "border-white text-white hover:bg-white hover:text-primary"
              }`}
            >
              Contact Us
            </Button>
          </Link>
          
          {/* Theme Toggle */}
          <div className="hidden md:block">
            <ThemeToggle scrolled={scrolled} />
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-sm transition-colors duration-200 ${
              scrolled ? "hover:bg-muted" : "hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${scrolled ? "text-primary" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? "text-primary" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-card border-t border-border"
          >
            <div className="container-grid py-6 flex flex-col space-y-2">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: idx * 0.05 }}
                  className="border-b border-border pb-3"
                >
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full py-2 text-card-foreground hover:text-secondary transition-colors duration-200"
                      >
                        <span className="font-semibold text-sm tracking-wide">{item.name}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-2 ml-4 pl-4 border-l-2 border-secondary"
                          >
                            {item.dropdown.map((dropdownItem, dropIdx) => (
                              <motion.div
                                key={dropdownItem.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: dropIdx * 0.05 }}
                                className="py-2"
                              >
                                <Link
                                  href={dropdownItem.href}
                                  className="block"
                                  onClick={() => {
                                    setActiveDropdown(null)
                                    setIsOpen(false)
                                  }}
                                >
                                  <div className="font-medium text-card-foreground hover:text-secondary transition-colors duration-200">
                                    {dropdownItem.name}
                                  </div>
                                  {dropdownItem.description && (
                                    <p className="mt-1 text-xs text-muted-foreground">
                                      {dropdownItem.description}
                                    </p>
                                  )}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-2 text-card-foreground hover:text-secondary transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="font-semibold text-sm tracking-wide">{item.name}</span>
                      {item.isNew && (
                        <span className="bg-accent text-white text-[10px] px-2 py-0.5 rounded-sm">
                          NEW
                        </span>
                      )}
                    </Link>
                  )}
                </motion.div>
              ))}
              
              {/* Mobile Theme Toggle and CTA */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: navItems.length * 0.05 }}
                className="pt-4 flex items-center gap-3"
              >
                <Link href="/contactus" onClick={() => setIsOpen(false)} className="flex-1">
                  <Button className="w-full">
                    Contact Us
                  </Button>
                </Link>
                <ThemeToggle scrolled={true} />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
