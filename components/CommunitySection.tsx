"use client"

import { useEffect, useState } from "react"
import {
  Users,
  Landmark,
  LineChart,
  MessageCircle,
  ShieldCheck,
  Award,
  Calendar,
  TrendingUp
} from "lucide-react"

export default function CommunitySection() {
  const initialStats = [
    {
      icon: Users,
      value: "500+",
      label: "Active Contributors",
      color: "text-blue-600"
    },
    {
      icon: Landmark,
      value: "2,000+",
      label: "Content Pieces",
      color: "text-green-600"
    },
    {
      icon: LineChart,
      value: "12+",
      label: "Languages Supported",
      color: "text-purple-600"
    },
    {
      icon: MessageCircle,
      value: "1,200+",
      label: "Community Members",
      color: "text-orange-600"
    }
  ]

  const guidelines = [
    {
      icon: ShieldCheck,
      title: "Invite-Only Community",
      description:
        "No spam, no self-promotion, real name policy for authentic connections"
    },
    {
      icon: Award,
      title: "Peer Recognition",
      description: "Weekly spotlight features and top contributor leaderboards"
    },
    {
      icon: Calendar,
      title: "Regular Events",
      description:
        "Monthly Zoom webinars with updates and contributor recognitions"
    },
    {
      icon: TrendingUp,
      title: "Transparency",
      description:
        "See how your content trains the LLM via feedback dashboard"
    }
  ]

  const [stats, setStats] = useState(initialStats)

  // Swapping logic every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => {
        const newStats = [...prev]
        // Swap in pairs
        ;[newStats[0], newStats[1]] = [newStats[1], newStats[0]]
        ;[newStats[2], newStats[3]] = [newStats[3], newStats[2]]
        return newStats
      })
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="container mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Join Our Growing Community
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Educators from across India are already shaping the future of AI-powered education
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20 transition-all duration-700 ease-in-out">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center hover:shadow-md transition-all duration-700 ease-in-out transform"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 border-2 border-amber-400 rounded-full">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-800">{item.value}</div>
              <div className="text-sm text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Community Guidelines Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Community Guidelines
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          {guidelines.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 text-center border border-gray-200 hover:shadow-md transition-all duration-500"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
