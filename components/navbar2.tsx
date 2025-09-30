"use client"

import { useState,useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Shield, Home, User, Briefcase, Phone} from "lucide-react"

export function NavigationOP() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled,setScrolled]=useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); //  after 20px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full h-auto fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-[#3B8288]/95 group transition-all duration-500 ease-in-out">
      <div className="max-w-[90%] mx-auto flex items-center justify-between">
        <a href="/">
        <img src="/files/logo-w.svg" className="h-auto w-[180px]" alt="logo" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-white text-center px-10 py-2 font-medium text-lg hover:bg-white hover:text-[#3B8288] rounded-xl transition-colors duration-500 ease-in-out">
            Home
          </Link>
          <Link href="/services" className="text-white text-center px-10 py-2 font-medium text-lg hover:bg-white hover:text-[#3B8288] rounded-xl transition-colors duration-500 ease-in-out">
            Services
          </Link>
          <Link href="/contact" className="text-white text-center px-10 py-2 font-medium text-lg hover:bg-white hover:text-[#3B8288] rounded-xl transition-colors duration-500 ease-in-out">
            Contact Us
          </Link>
          <Link href="/privacy-policy/" className="text-white text-center px-10 py-2 font-medium text-lg hover:bg-white hover:text-[#3B8288] rounded-xl transition-colors duration-500 ease-in-out">
            Privacy Policy
          </Link>
        </div>
        <div>
          <Link href="/" className="hidden md:flex text-white bg-[#3B8288] rounded-2xl text-center px-10 py-2 font-bold text-md group-hover:bg-white group-hover:text-[#001b1d] transition-all duration-500 ease-in-out">Customer Log-in</Link>
        </div>

        {/* Mobile Menu Button */}
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 glass rounded-lg p-4">
          <div className="flex flex-col space-y-4">
            {/* Menu Links */}
              <Link
                href="/"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Home className="w-5 h-5" />
                Home
              </Link>

              <Link
                href="/services"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Briefcase className="w-5 h-5" />
                Services
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                Contact Us
              </Link>

              <Link
                href="/privacy-policy"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Shield className="w-5 h-5" />
                Privacy Policy
              </Link>

              {/* Centered Login Button */}
              <div className="flex justify-center mt-4">
                <Link
                  href="/"
                  className="flex items-center justify-center gap-2 w-[220px] text-white bg-[#001B1D] rounded-2xl px-6 py-2 font-bold text-sm hover:bg-white hover:text-[#001B1D] transition-all duration-500 ease-in-out"
                >
                  <User className="w-5 h-5" />
                  Customer Log-in
                </Link>
              </div>
            </div>
          </div>
        )}
    </nav>
  )
}
