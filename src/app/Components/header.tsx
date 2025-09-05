"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

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
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-secondary shadow-md" : "bg-black bg-opacity-20"
      }`}
      initial={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      animate={{
        backgroundColor: scrolled ? "rgb(243, 244, 246)" : "rgba(0, 0, 0, 0.5)",
        boxShadow: scrolled
          ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
          : "none",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div
            className={`h-8 w-8 font-extrabold text-2xl ${
              scrolled ? "bg-primary" : "bg-secondary"
            } rounded transition-colors duration-300`}
          ></div>
          <span
            className={`text-2xl font-bold ${
              scrolled ? "text-primary" : "text-secondary"
            } transition-colors duration-300`}
          >
            NXT
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
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
                  className={`flex items-center gap-1 text-sm font-medium transition-colors group
                    ${
                      activeDropdown === item.name
                        ? scrolled
                          ? "text-primary"
                          : "text-white"
                        : scrolled
                        ? "text-primary hover:text-primary"
                        : "text-gray-300 hover:text-white"
                    }`}
                >
                  {item.name}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                  {item.isNew && (
                    <span className="absolute -top-1 -right-8 bg-red-500 text-white text-[10px] px-1 py-0.5 rounded-sm">
                      NEW
                    </span>
                  )}
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 w-0 ${
                      scrolled ? "bg-[#010145]" : "bg-white"
                    } transition-all duration-300 group-hover:w-full`}
                  ></span>
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`relative text-sm font-medium ${
                    scrolled
                      ? "text-gray-800 hover:text-[#0B032D]"
                      : "text-gray-300 hover:text-white"
                  } transition-colors group`}
                >
                  {item.name}
                  {item.isNew && (
                    <span className="absolute -top-1 -right-8 bg-red-500 text-white text-[10px] px-1 py-0.5 rounded-sm">
                      NEW
                    </span>
                  )}
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 w-0 ${
                      scrolled ? "bg-[#0B032D]" : "bg-white"
                    } transition-all duration-300 group-hover:w-full`}
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
                    className="absolute left-0 mt-2 w-64 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden z-50"
                  >
                    <div className="  py-2 px-1">
                      {item.dropdown.map((dropdownItem, idx) => (
                        <motion.div
                          key={dropdownItem.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: idx * 0.05 }}
                        >
                          <Link
                            href={dropdownItem.href}
                            className="block px-4 py-3 rounded-md hover:bg-gray-50 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="font-medium text-[#0B032D] hover:text-black">
                              {dropdownItem.name}
                            </div>
                            {dropdownItem.description && (
                              <p className="mt-1 text-xs text-gray-500">
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

        {/* Search and Login */}
        <div className="flex items-center gap-4">
          <Link href="/contactus">
            <Button
              variant="default"
              className={`hidden md:flex ${
                scrolled
                  ? "bg-primary  text-white hover:bg-[#301a4b]"
                  : "bg-primary text-secondary hover:border-1 hover:border-sky-50"
              } transition-colors duration-300`}
            >
              Contact us
            </Button>
          </Link>
          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-1 ${
              scrolled ? "hover:bg-gray-200" : "hover:bg-gray-700"
            } rounded-full transition-colors`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X
                className={`h-5 w-5 ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`h-5 w-5 ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              />
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
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="border-b border-gray-100 pb-2"
                >
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full py-2 text-gray-800 hover:text-[#0B032D]"
                      >
                        <span className="font-medium">{item.name}</span>
                        <div className="flex items-center">
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-1 ml-4 pl-2 border-l-2 border-gray-100"
                          >
                            {item.dropdown.map((dropdownItem, dropIdx) => (
                              <motion.div
                                key={dropdownItem.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.2,
                                  delay: dropIdx * 0.05,
                                }}
                                className="py-2"
                              >
                                <Link
                                  href={dropdownItem.href}
                                  className="block rounded-md"
                                  onClick={() => {
                                    setActiveDropdown(null)
                                    setIsOpen(false)
                                  }}
                                >
                                  <div className="font-medium text-[#0B032D] hover:text-black">
                                    {dropdownItem.name}
                                  </div>
                                  {dropdownItem.description && (
                                    <p className="mt-1 text-xs text-gray-500">
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
                      className="flex items-center justify-between py-2 text-gray-800 hover:bg-[#0B032D]"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="font-medium">{item.name}</span>
                      {item.isNew && (
                        <span className="bg-red-500 text-white text-[10px] px-1 py-0.5 rounded-sm">
                          NEW
                        </span>
                      )}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                className="pt-2"
              >
                <Button
                  variant="default"
                  className={`hidden md:flex transition-colors duration-300 ${
                    scrolled
                      ? "bg-[#0B032D] text-white hover:bg-[#643636]"
                      : "bg-white text-[#0B032D] hover:bg-[#e6f4f3]"
                  }`}
                >
                  Conatct us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
