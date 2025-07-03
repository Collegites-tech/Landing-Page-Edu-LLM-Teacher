"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowDown, Sparkles, Users, Globe } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)
  const [currentStat, setCurrentStat] = useState(0)

  const stats = [
    {
      icon: <Users className="h-4 w-4 text-blue-600" />,
      number: "500+",
      label: "Teachers Joined",
    },
    {
      icon: <Globe className="h-4 w-4 text-blue-600" />,
      number: "2,500+",
      label: "Teachers Impacted",
    },
    {
      icon: <Sparkles className="h-4 w-4 text-blue-600" />,
      number: "12+",
      label: "Languages Supported",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Sticky Info Box */}
          <div className="sticky top-20 z-40 mb-8">
            <Card className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 shadow-lg border-amber-500">
              <div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-gray-900">Help build India's first EDU-LLM</span> by sharing your
                  lessons, quizzes, and ideas — an AI teacher made for Indian classrooms in every language
                </p>

                {/* Dynamic Stats */}
                <div className="flex items-center space-x-2 text-sm">
                  {stats[currentStat].icon}
                  <span className="font-semibold text-blue-600">{stats[currentStat].number}</span>
                  <span className="text-gray-600">{stats[currentStat].label}</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Join India's First{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  EDU-LLM Teacher
                </span>
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Built by teachers. For classrooms. In every language.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 text-left"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => window.open("https://forms.gle/jSydHxxUx7TaAaYAA", "_blank")}
                >
                  {isHovered ? "Go Ahead" : "Become a Contributor"}
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 border-t border-gray-200 max-w-md mx-auto leading-7 pt-3">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-blue-600 mr-1" />
                  <span className="text-2xl font-bold text-blue-600">500+</span>
                </div>
                <p className="text-sm text-gray-600">Contributors</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="h-5 w-5 text-blue-600 mr-1" />
                  <span className="text-2xl font-bold text-blue-600">12+</span>
                </div>
                <p className="text-sm text-gray-600">Languages</p>
              </div>
            </div>
          </div>

           {/* Scroll Indicator */}
            <div className="flex justify-center mt-16">
             <a href="#demo-section" className="animate-bounce cursor-pointer">
                <ArrowDown className="h-6 w-6 text-blue-600" />
             </a>
      </div>
        </div>
      </div>
    </section>
  )
}
