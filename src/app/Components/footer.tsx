import Link from "next/link"
import { Facebook, Instagram, Linkedin, Send, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-[#1A2B3C] dark:bg-[#0F172A] text-white">
      {/* Main Footer Content */}
      <div className="container-grid section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Contact Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-12 w-12 bg-white rounded-sm flex items-center justify-center text-[#1A2B3C] font-bold text-xl">
                N
              </div>
              <span className="text-xl font-bold">NXT</span>
            </Link>
            
            <p className="text-white/70 text-sm leading-relaxed">
              Ethiopia-based software and technology company delivering innovative 
              solutions for digital transformation.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <Phone className="w-5 h-5 text-[#00D1FF] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">+251 11 557 4409</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Mail className="w-5 h-5 text-[#00D1FF] mt-0.5 flex-shrink-0" />
                <div className="text-white/70">
                  <p>info@nxtsoftwares.com</p>
                  <p>sales@nxtsoftwares.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-[#00D1FF] mt-0.5 flex-shrink-0" />
                <div className="text-white/70">
                  <p>Sterling Bldg. | Fifth Floor</p>
                  <p>Olympia, Gazebo Roundabout</p>
                  <p>Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Mission */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Our Mission</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              To architect, build, and support cutting-edge software systems
              that drive digital transformation and global connectivity.
            </p>
            
            {/* Social Links */}
            <div className="pt-4">
              <p className="text-sm font-medium mb-4">Follow Us</p>
              <div className="flex gap-3">
                <Link 
                  href="#" 
                  className="w-10 h-10 rounded-sm bg-white/10 hover:bg-[#00D1FF] flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link 
                  href="#" 
                  className="w-10 h-10 rounded-sm bg-white/10 hover:bg-[#00D1FF] flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                  aria-label="Telegram"
                >
                  <Send className="h-5 w-5" />
                </Link>
                <Link 
                  href="#" 
                  className="w-10 h-10 rounded-sm bg-white/10 hover:bg-[#00D1FF] flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link 
                  href="https://www.linkedin.com/company/nxt-trading-plc/" 
                  target="_blank"
                  className="w-10 h-10 rounded-sm bg-white/10 hover:bg-[#00D1FF] flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-3">
              <Link
                href="/"
                className="block text-sm text-white/70 hover:text-[#00D1FF] transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/solutions/software-development"
                className="block text-sm text-white/70 hover:text-[#00D1FF] transition-colors duration-200"
              >
                Solutions
              </Link>
              <Link
                href="/Services"
                className="block text-sm text-white/70 hover:text-[#00D1FF] transition-colors duration-200"
              >
                Services
              </Link>
              <Link
                href="/aboutus"
                className="block text-sm text-white/70 hover:text-[#00D1FF] transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                href="/contactus"
                className="block text-sm text-white/70 hover:text-[#00D1FF] transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Solutions</h3>
            <nav className="space-y-3">
              <Link
                href="/solutions/software-development"
                className="block text-sm text-white/70 hover:text-[#00D1FF] transition-colors duration-200"
              >
                Software Development
              </Link>
              <Link
                href="/solutions/business"
                className="block text-sm text-white/70 hover:text-[#00D1FF] transition-colors duration-200"
              >
                Business Automation
              </Link>
              <Link
                href="/solutions/digital-marketing"
                className="block text-sm text-white/70 hover:text-[#00D1FF] transition-colors duration-200"
              >
                Digital Marketing
              </Link>
              <Link
                href="/solutions/storage"
                className="block text-sm text-white/70 hover:text-[#00D1FF] transition-colors duration-200"
              >
                Storage Solutions
              </Link>
              <Link
                href="/solutions/ott"
                className="block text-sm text-white/70 hover:text-[#00D1FF] transition-colors duration-200"
              >
                OTT Platform
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="container-grid py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <p>&copy; {currentYear} NXT Softwares. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-[#00D1FF] transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-[#00D1FF] transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
