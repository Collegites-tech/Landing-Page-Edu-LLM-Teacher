"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-blue-100 supports-[backdrop-filter]:bg-white/90">
      <div className="w-full flex h-16 items-center justify-between px-6 border border-amber-300">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900">EDU-LLM Teacher</span>
            <span className="text-xs text-gray-500">Teacher-led AI</span>
          </div>
        </div>

        <nav className="hidden space-x-8 md:flex">
          {/* Desktop nav items */}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="#about"
            className="hidden md:block text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="#community"
            className="hidden md:block text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Community
          </Link>
          <Link
            href="#about"
            className="hidden md:block text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            GuideLines
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white w-full">
          <nav className="w-full px-6 py-4 space-y-4">
            <Link href="#why" className="block text-sm font-medium text-gray-600 hover:text-orange-600">
              Why This Matters
            </Link>
            <Link href="#how" className="block text-sm font-medium text-gray-600 hover:text-orange-600">
              How It Works
            </Link>
            <Link href="#tiers" className="block text-sm font-medium text-gray-600 hover:text-orange-600">
              Contributor Tiers
            </Link>
            <Link href="/login" className="block text-sm font-medium text-gray-600 hover:text-orange-600">
              Sign in
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
