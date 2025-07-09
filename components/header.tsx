"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 supports-[backdrop-filter]:bg-white/80">
      <div className="w-full flex h-16 items-center justify-between px-6 border-b border-orange-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-500 rounded-lg flex items-center justify-center">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900">EDU-LLM Teacher</span>
            <span className="text-xs text-gray-600">Teacher-led AI</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="text-base font-medium text-gray-600 hover:text-orange-600 transition-colors">
            About
          </Link>
          <Link href="#community" className="text-base font-medium text-gray-600 hover:text-orange-600 transition-colors">
            Community
          </Link>
          <Link href="/contributor-guide-page/page2.tsx" className="text-base font-medium text-gray-600 hover:text-orange-600 transition-colors">
            Contributor Guidelines
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu Content */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white w-full">
          <nav className="w-full pl-6 py-4 space-y-4">
            <Link href="#about" className="block text-base font-semibold text-gray-700 hover:text-orange-600">
              About
            </Link>
            <Link href="#community" className="block text-base font-semibold text-gray-700 hover:text-orange-600">
              Community
            </Link>
            <Link href="/contributor-guide-page/page2.tsx" className="block text-base font-semibold text-gray-700 hover:text-orange-600">
              Contributor Guidelines
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
