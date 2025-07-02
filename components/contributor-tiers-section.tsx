"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Award, Star, Crown, GripVertical, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Tier {
  id: string
  level: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  benefits: string[]
  badge: string
  popular?: boolean
}

export function ContributorTiersSection() {
  const [tiers, setTiers] = useState<Tier[]>([
    {
      id: "bronze",
      level: "🥉",
      title: "Early Partner",
      description: "Contribute content + feedback",
      icon: <Award className="w-8 h-8" />,
      color: "from-amber-400 to-orange-500",
      benefits: [
        "Digital badge and certificate",
        "Access to first beta tools",
        "Featured name on contributor wall",
        "Monthly newsletter updates",
      ],
      badge: "Early Adopter",
    },
    {
      id: "silver",
      level: "🥈",
      title: "Core Contributor",
      description: "Quality contributions + more feedback rounds",
      icon: <Star className="w-8 h-8" />,
      color: "from-gray-400 to-gray-600",
      benefits: [
        "Spotlight story feature",
        "Social media shout-out",
        "Beta-test new tools first",
        "Invite new members (5 slots)",
        "Vote on new features",
        "Quarterly video calls with team",
      ],
      badge: "Core Member",
      popular: true,
    },
    {
      id: "gold",
      level: "🥇",
      title: "Co-Creator",
      description: "Consistent contributions + community involvement",
      icon: <Crown className="w-8 h-8" />,
      color: "from-yellow-400 to-yellow-600",
      benefits: [
        '"Co-created EDU-LLM" digital badge',
        "Profile featured on website",
        "Speaking slot in webinars",
        "Team meeting access",
        "Early access to everything",
        "Revenue sharing opportunities",
        "Mentorship program access",
      ],
      badge: "Co-Creator",
    },
  ])

  const [draggedTier, setDraggedTier] = useState<string | null>(null)
  const dragCounter = useRef(0)

  const handleDragStart = (e: React.DragEvent, tierId: string) => {
    setDraggedTier(tierId)
    e.dataTransfer.effectAllowed = "move"
    e.dataTransfer.setData("text/html", tierId)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
  }

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    dragCounter.current++
  }

  const handleDragLeave = (e: React.DragEvent) => {
    dragCounter.current--
  }

  const handleDrop = (e: React.DragEvent, targetId: string) => {
    e.preventDefault()
    dragCounter.current = 0

    if (draggedTier && draggedTier !== targetId) {
      const draggedIndex = tiers.findIndex((tier) => tier.id === draggedTier)
      const targetIndex = tiers.findIndex((tier) => tier.id === targetId)

      const newTiers = [...tiers]
      const [draggedItem] = newTiers.splice(draggedIndex, 1)
      newTiers.splice(targetIndex, 0, draggedItem)

      setTiers(newTiers)
    }
    setDraggedTier(null)
  }

  const scrollToForm = () => {
    const formSection = document.getElementById("contributor-form")
    formSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="tiers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What You Get <span className="text-orange-600">(Tiers)</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Drag to reorder and explore different contributor levels. Each tier offers unique benefits and recognition.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <GripVertical className="w-4 h-4" />
            <span>Interactive tiers • Drag to explore</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={tier.id}
              draggable
              onDragStart={(e) => handleDragStart(e, tier.id)}
              onDragOver={handleDragOver}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, tier.id)}
              className={`relative bg-white border-2 ${
                tier.popular ? "border-orange-300 shadow-xl" : "border-gray-200"
              } rounded-2xl p-8 hover:border-orange-300 transition-all duration-300 cursor-grab active:cursor-grabbing transform hover:scale-105 ${
                draggedTier === tier.id ? "opacity-50 rotate-2 scale-105 shadow-2xl" : "shadow-lg hover:shadow-xl"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    🔥 Most Popular
                  </div>
                </div>
              )}

              {/* Drag Handle */}
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                <GripVertical className="w-5 h-5 text-gray-400" />
                <span className="text-xs text-gray-400">Drag</span>
              </div>

              {/* Tier Badge */}
              <div className="absolute -top-4 left-8">
                <div
                  className={`px-4 py-2 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${tier.color} shadow-lg`}
                >
                  {tier.badge}
                </div>
              </div>

              {/* Content */}
              <div className="text-center mb-6 mt-4">
                <div className="text-4xl mb-2">{tier.level}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.title}</h3>
                <p className="text-gray-600">{tier.description}</p>
              </div>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                {tier.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <Button
                onClick={scrollToForm}
                className={`w-full bg-gradient-to-r ${tier.color} text-white hover:opacity-90 transition-all duration-300 group`}
              >
                Join as {tier.title}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Contributor Form Section */}
        <div id="contributor-form" className="mt-20 max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-orange-50 via-white to-blue-50 rounded-2xl p-8 shadow-xl border border-orange-100">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Contribute? 🚀</h3>
              <p className="text-gray-600 mb-2">Join thousands of educators building India's first EDU-LLM</p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <span>✅ Free to join</span>
                <span>✅ Instant access</span>
                <span>✅ Community support</span>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Teaching Experience</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200">
                    <option>Select your experience level</option>
                    <option>0-2 years</option>
                    <option>3-5 years</option>
                    <option>6-10 years</option>
                    <option>10+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Language</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200">
                    <option>Select primary language</option>
                    <option>Hindi</option>
                    <option>English</option>
                    <option>Tamil</option>
                    <option>Telugu</option>
                    <option>Bengali</option>
                    <option>Marathi</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subjects You Teach</label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  rows={3}
                  placeholder="Mathematics, Science, Hindi, Social Studies, etc."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How would you like to contribute?
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Create lesson plans",
                    "Design quizzes",
                    "Provide feedback",
                    "Test new features",
                    "Translate content",
                    "Community support",
                  ].map((option) => (
                    <label key={option} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                🎉 Join the Revolution
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By joining, you agree to our Terms of Service and Privacy Policy. We respect your privacy and will never
                spam you.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
