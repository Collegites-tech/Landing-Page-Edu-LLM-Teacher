"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Menu, X } from "lucide-react";
// import { useState } from "react";

export function Header() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full h-20">
      <div className="relative h-full w-full">
        {/* Gradient Background Inside Relative Wrapper */}
        <div
          className={`absolute inset-0 z-0 transition-all duration-[4000ms] ease-in-out
          opacity-100 blur-0
          bg-gradient-to-br from-orange-100 via-orange-200 to-white
          bg-[length:300%_300%] animate-[gradient-light_12s_ease_infinite]`}
        />

        {/* Centered Logo + Title */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <Link
            href="#hero"
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col text-center">
              <span className="text-lg font-bold text-gray-900">Bharat-EDU-LLM</span>
              <span className="text-xs text-gray-600">Teacher-led AI</span>
            </div>
          </Link>
        </div>
      </div>

      {/*
      <div className="w-full flex h-16 items-center justify-between px-6 border-b border-orange-200">
        <Link href="#hero" className="flex items-center gap-2 hover:opacity-80 transition">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-500 rounded-lg flex items-center justify-center">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900">Bharat-EDU-LLM</span>
            <span className="text-xs text-gray-600">Teacher-led AI</span>
          </div>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="text-base font-medium text-gray-600 hover:text-orange-600 transition-colors">
            About
          </Link>
          <Link href="#community" className="text-base font-medium text-gray-600 hover:text-orange-600 transition-colors">
            Community
          </Link>
          <Link href="/contributor-guide" className="text-base font-medium text-gray-600 hover:text-orange-600 transition-colors">
            Contributor Guidelines
          </Link>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(prev => !prev)}>
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <div className={`transition-all duration-300 ease-in-out overflow-hidden bg-white md:hidden ${
        isMenuOpen ? "max-h-screen" : "max-h-0"
      }`}>
        <nav className="w-full pl-6 py-4 space-y-4">
          <Link href="#about" className="block text-base font-semibold text-gray-700 hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
          <Link href="#community" className="block text-base font-semibold text-gray-700 hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>
            Community
          </Link>
          <Link href="/contributor-guide" className="block text-base font-semibold text-gray-700 hover:text-orange-600" onClick={() => setIsMenuOpen(false)}>
            Contributor Guidelines
          </Link>
        </nav>
      </div>
      */}
    </header>
  );
}
