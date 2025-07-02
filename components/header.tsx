"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900 cursor-pointer" onClick={() => scrollToSection("hero")}>
            EDU-LLM Teacher
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("why")}
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              Why This Matters
            </button>
            <button
              onClick={() => scrollToSection("tiers")}
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              Contributor Tiers
            </button>
            <button
              onClick={() => scrollToSection("contributor-form")}
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              Join Now
            </button>
            <Button
              onClick={() => scrollToSection("contributor-form")}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-full"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("why")}
                className="text-left text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Why This Matters
              </button>
              <button
                onClick={() => scrollToSection("tiers")}
                className="text-left text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Contributor Tiers
              </button>
              <button
                onClick={() => scrollToSection("contributor-form")}
                className="text-left text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Join Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
