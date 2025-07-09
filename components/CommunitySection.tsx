"use client"

import { useEffect, useRef, useState } from "react"
import {
  Users,
  Landmark,
  LineChart,
  MessageCircle,
  Star,
} from "lucide-react"

const testimonials = [
  {
    name: "Mark Williams",
    role: "Corporate Trainer",
    quote:
      "Our training department has seen a 300% increase in completion rates since switching to videos created with Collegetes AI. The interactive elements and professional quality make all the difference. We've saved over 20 hours per week in video production time.",
  },
  {
    name: "Aarav Mehta",
    role: "Math Teacher",
    quote:
      "Creating quizzes in multiple Indian languages has never been easier. This tool saves me hours every week!",
  },
  {
    name: "Sneha Rao",
    role: "Curriculum Designer",
    quote:
      "Our team loves how seamless the content submission process is. The community is also incredibly active and helpful.",
  },
]

export default function CommunitySection() {
  const initialStats = [
    {
      icon: Users,
      value: "500+",
      label: "Active Contributors",
      color: "text-blue-600",
    },
    {
      icon: Landmark,
      value: "2,000+",
      label: "Content Pieces",
      color: "text-green-600",
    },
    {
      icon: LineChart,
      value: "12+",
      label: "Languages Supported",
      color: "text-purple-600",
    },
    {
      icon: MessageCircle,
      value: "1,200+",
      label: "Community Members",
      color: "text-orange-600",
    },
  ]

  const guidelines = [
    {
      iconSrc: "/shield.png",
      title: "Invite-Only Community",
      description:
        "No spam, no self-promotion, real name policy for authentic connections",
    },
    {
      iconSrc: "/medal.png",
      title: "Peer Recognition",
      description: "Weekly spotlight features and top contributor leaderboards",
    },
    {
      iconSrc: "/calendar.png",
      title: "Regular Events",
      description:
        "Monthly Zoom webinars with updates and contributor recognitions",
    },
    {
      iconSrc: "/search-file.png",
      title: "Transparency",
      description:
        "See how your content trains the LLM via feedback dashboard",
    },
  ]

  const [stats, setStats] = useState(initialStats)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Modal state
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null)

  const handleCardClick = (index: number) => {
    setActiveCardIndex(index)
    setIsPaused(true)
  }

  const closeModal = () => {
    setActiveCardIndex(null)
    setIsPaused(false)
  }

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 6000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused])

  useEffect(() => {
    const statInterval = setInterval(() => {
      setStats((prev) => {
        const newStats = [...prev]
        ;[newStats[0], newStats[1]] = [newStats[1], newStats[0]]
        ;[newStats[2], newStats[3]] = [newStats[3], newStats[2]]
        return newStats
      })
    }, 6000)
    return () => clearInterval(statInterval)
  }, [])

  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)
  const handleClick = () => setIsPaused(true)

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-4 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Join Our Growing Community
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Educators from across India are already shaping the future of AI-powered education
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20 transition-all duration-700 ease-in-out">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-lg p-6 text-center hover:shadow-xl transition-all duration-700 ease-in-out transform cursor-pointer"
              onClick={() => handleCardClick(index)}
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

        {/* Modal for Stats Cards */}
        {activeCardIndex !== null && (
          <>
            <div
              className="fixed inset-0 bg-black/40 z-40 transition-opacity"
              onClick={closeModal}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border border-gray-300">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 border-2 border-amber-400 rounded-full">
                      {(() => {
                        const Icon = stats[activeCardIndex].icon
                        const color = stats[activeCardIndex].color
                        return <Icon className={`w-8 h-8 ${color}`} />
                      })()}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {stats[activeCardIndex].label}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Status: <strong>{stats[activeCardIndex].value}</strong>
                  </p>
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Guidelines Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Community Guidelines
        </h2>

        <div className="h-8" />

        {/* Guidelines Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {guidelines.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-4 text-center border border-gray-200 hover:shadow-md transition-all duration-500"
            >
              <div className="flex justify-center mb-3">
                <div className="bg-blue-100 p-2.5 rounded-full">
                  <img
                    src={item.iconSrc}
                    alt={item.title}
                    className="w-5 h-5 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-1">
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
