"use client"

import { useState, useEffect } from "react"
import { Play, ChevronDown, Sparkles, Globe, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [currentStat, setCurrentStat] = useState(0)

  const stats = [
    { number: "22+", label: "Indian Languages", icon: <Globe className="w-5 h-5" /> },
    { number: "1000+", label: "Teachers Joined", icon: <Users className="w-5 h-5" /> },
    { number: "50K+", label: "Students Impacted", icon: <Sparkles className="w-5 h-5" /> },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const scrollToForm = () => {
    const formSection = document.getElementById("contributor-form")
    formSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-orange-50/30 to-blue-50/30 pt-20"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-dot-pattern animate-pulse" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-bounce delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-green-200 rounded-full opacity-20 animate-bounce delay-2000"></div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Sticky Info Box */}
          <div className="sticky top-24 bg-white/90 backdrop-blur-sm border border-orange-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-start space-x-3">
              <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
              <div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <span className="font-semibold text-gray-900">Help build India's first EDU-LLM</span> by sharing your
                  lessons, quizzes, and ideas — an AI teacher made for Indian classrooms in every language
                </p>
                {/* Dynamic Stats */}
                <div className="flex items-center space-x-2 text-sm">
                  {stats[currentStat].icon}
                  <span className="font-semibold text-orange-600">{stats[currentStat].number}</span>
                  <span className="text-gray-600">{stats[currentStat].label}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Join India's First{" "}
              <span className="bg-gradient-to-r from-orange-600 via-red-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
                EDU-LLM Teacher
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              <span className="font-semibold text-orange-600">Built by teachers.</span>{" "}
              <span className="font-semibold text-blue-600">For classrooms.</span>{" "}
              <span className="font-semibold text-black">In every language.</span>
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToForm}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {isHovered ? "🚀 Sign Up Now" : "✨ Become a Contributor"}
              </Button>

              <Button
                variant="outline"
                onClick={() => document.getElementById("why")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 text-lg font-semibold rounded-full border-2 border-gray-300 hover:border-orange-500 hover:text-orange-600 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Right Content - Demo Video */}
        <div className="relative">
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            {/* Video Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
              {!isVideoPlaying ? (
                <div className="text-center space-y-4">
                  <div
                    className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto cursor-pointer hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <div className="text-white space-y-2">
                    <p className="font-semibold text-lg">Watch AI in Action</p>
                    <p className="text-sm text-gray-300 max-w-xs mx-auto">
                      See how our EDU-LLM creates slides, answers questions, and generates quizzes in Hindi and regional
                      languages
                    </p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                  <div className="text-center text-white space-y-4">
                    <div className="animate-spin w-12 h-12 border-4 border-white border-t-transparent rounded-full mx-auto"></div>
                    <p>Loading Demo Video...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Demo Features Overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center justify-between text-white text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span>🎯 Creating Quiz in Hindi</span>
                  </div>
                  <span>0:32 / 0:45</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Achievement Badges */}
          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
            🔥 Live Demo
          </div>
          <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            🇮🇳 Made in India
          </div>
          <div className="absolute top-1/2 -left-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg transform -rotate-12">
            AI Powered
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <ChevronDown className="w-6 h-6 text-gray-400" />
          <span className="text-xs text-gray-400">Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}
