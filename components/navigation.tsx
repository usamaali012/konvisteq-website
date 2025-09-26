"use client"

import { useState,useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"


export function Navigation() {
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
    <nav className={`w-full h-auto fixed top-0 left-0 right-0 z-50 px-4 py-4 hover:bg-[#001B1D]/95 group transition-all duration-500 ease-in-out ${scrolled ? "bg-[#001B1D]/95" : "bg-black/20"}`}>
      <div className="max-w-[90%] mx-auto flex items-center justify-between">
        <a href="/">
        <img src="/files/logo-w.svg" className="h-auto w-[180px]" alt="logo" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-white text-center px-10 py-2 font-medium text-lg hover:bg-white hover:text-[#001b1d] rounded-xl transition-colors duration-500 ease-in-out">
            Home
          </Link>
          <Link href="/services" className="text-white text-center px-10 py-2 font-medium text-lg hover:bg-white hover:text-[#001b1d] rounded-xl transition-colors duration-500 ease-in-out">
            Services
          </Link>
          <Link href="/contact" className="text-white text-center px-10 py-2 font-medium text-lg hover:bg-white hover:text-[#001b1d] rounded-xl transition-colors duration-500 ease-in-out">
            Contact Us
          </Link>
          <Link href="/privacy-policy/" className="text-white text-center px-10 py-2 font-medium text-lg hover:bg-white hover:text-[#001b1d] rounded-xl transition-colors duration-500 ease-in-out">
            Privacy Policy
          </Link>
        </div>
        <div>
          <Link href="/" className="hidden md:flex text-white bg-[#001B1D] rounded-2xl text-center px-10 py-2 font-bold text-md group-hover:bg-white group-hover:text-[#001b1d] transition-all duration-500 ease-in-out">Customer Log-in</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-4 glass rounded-lg p-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact Us
            </Link>
            <Link href="/privacy-policy" className="text-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="w-[200px] text-white bg-[#001B1D] rounded-2xl text-center px-8 py-1 font-bold text-sm group-hover:bg-white group-hover:text-[#001b1d] transition-all duration-500 ease-in-out">Customer Log-in</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
