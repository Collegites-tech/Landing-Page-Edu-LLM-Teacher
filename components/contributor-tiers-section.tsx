"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  GripVertical,
  Award,
  Star,
  Crown,
  Users,
  Gift,
  Trophy,
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const initialTiers = [
  {
    id: "bronze",
    icon: Award,
    title: "Early Partner",
    emoji: "🥉",
    subtitle: "Contribute content + feedback",
    description: "Start your journey as a contributor to India's first EDU-LLM",
    benefits: [
      "Contributor badge and certificate",
      "Access to first tools and features",
      "Featured name on contributor wall",
      "Early access to new releases",
    ],
    iconColor: "from-orange-500 to-amber-500",
  },
  {
    id: "silver",
    icon: Star,
    title: "Core Contributor",
    emoji: "🥈",
    subtitle: "Quality contributions + feedback rounds",
    description: "Become a key voice in shaping our AI's teaching methodology",
    benefits: [
      "Spotlight story and shout-out posts",
      "Invite to beta-test next tools",
      "Ability to invite new members",
      "Vote on new features and roadmap",
      "Priority support and feedback",
    ],
    iconColor: "from-orange-500 to-yellow-500",
  },
  {
    id: "gold",
    icon: Crown,
    title: "Co-Creator",
    emoji: "🥇",
    subtitle: "Consistent contributions + community involvement",
    description: "Lead the revolution in Indian educational AI technology",
    benefits: [
      '"Co-created EDU-LLM" digital badge',
      "Personal profile featured on site",
      "Speaking slot in webinars",
      "Special access to team meetings",
      "Early access to all new features",
      "Direct input on product roadmap",
    ],
    iconColor: "from-orange-600 to-yellow-500",
  },
]

function HoverButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <Button
      className="w-full max-w-[360px] h-14 text-xl bg-orange-600 text-white rounded-full transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-lg"
      onClick={() =>
        window.open("https://forms.gle/jSydHxxUx7TaAaYAA", "_blank")
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? "Join Us" : "Become a Contributor"}
    </Button>
  )
}

export function ContributorTiersSection() {
  const [tiers, setTiers] = useState(initialTiers)
  const [draggedTier, setDraggedTier] = useState<string | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })

  const handleDragStart = (e: React.DragEvent, tierId: string) => {
    setDraggedTier(tierId)
    e.dataTransfer.effectAllowed = "move"
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
  }

  const handleDrop = (e: React.DragEvent, targetTierId: string) => {
    e.preventDefault()
    if (!draggedTier || draggedTier === targetTierId) return

    const draggedIndex = tiers.findIndex((tier) => tier.id === draggedTier)
    const targetIndex = tiers.findIndex((tier) => tier.id === targetTierId)

    const newTiers = [...tiers]
    const [draggedItem] = newTiers.splice(draggedIndex, 1)
    newTiers.splice(targetIndex, 0, draggedItem)

    setTiers(newTiers)
    setDraggedTier(null)
  }

  return (
    <section
      id="tiers"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-orange-50 to-orange-200"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-4">
              What You Get as a Contributor
            </h2>
            <p className="text-lg text-orange-800 max-w-2xl mx-auto mb-8">
              Join thousands of educators shaping the future of AI-powered education in India. Drag the tiers to explore different contribution levels.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-orange-700">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>500+ Contributors</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4" />
                <span>Recognition & Rewards</span>
              </div>
              <div className="flex items-center gap-2">
                <Gift className="h-4 w-4" />
                <span>Exclusive Benefits</span>
              </div>
            </div>
          </div>

          {/* Responsive layout: vertical on small, grid on medium and up */}
          <div className="flex flex-col gap-6 md:grid md:grid-cols-3">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ x: -100, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="w-full"
              >
                <Card
                  draggable
                  onDragStart={(e) => handleDragStart(e, tier.id)}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, tier.id)}
                  className="flex flex-col justify-between h-full bg-white border-2 border-orange-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 cursor-pointer p-5"
                >
                  <CardHeader className="pb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tier.iconColor} flex items-center justify-center shadow-lg`}
                        >
                          <tier.icon className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-2xl">{tier.emoji}</span>
                      </div>
                      <GripVertical className="h-5 w-5 text-gray-400 group-hover:text-orange-600 transition-colors" />
                    </div>

                    <CardTitle className="text-xl text-black mb-2">
                      {tier.title}
                    </CardTitle>
                    <p className="text-sm font-medium text-black mb-3">
                      {tier.subtitle}
                    </p>
                    <p className="text-sm text-black">{tier.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-6 flex-1">
                    <div className="space-y-3">
                      {tier.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-black">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center space-y-6">
            <div className="w-full flex justify-center px-4">
              <HoverButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
