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
  TrendingUp,
  Star
} from "lucide-react"

const testimonials = [
  {
    name: "Mark Williams",
    role: "Corporate Trainer",
    quote:
      "Our training department has seen a 300% increase in completion rates since switching to videos created with Collegetes AI. The interactive elements and professional quality make all the difference. We've saved over 20 hours per week in video production time."
  },
  {
    name: "Aarav Mehta",
    role: "Math Teacher",
    quote:
      "Creating quizzes in multiple Indian languages has never been easier. This tool saves me hours every week!"
  },
  {
    name: "Sneha Rao",
    role: "Curriculum Designer",
    quote:
      "Our team loves how seamless the content submission process is. The community is also incredibly active and helpful."
  }
]

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
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const statInterval = setInterval(() => {
      setStats((prev) => {
        const newStats = [...prev]
        ;[newStats[0], newStats[1]] = [newStats[1], newStats[0]]
        ;[newStats[2], newStats[3]] = [newStats[3], newStats[2]]
        return newStats
      })
    }, 6000)

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => {
      clearInterval(statInterval)
      clearInterval(testimonialInterval)
    }
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-100">
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

        {/* Testimonial Carousel */}
        <div className="relative mx-auto max-w-4xl w-full mb-20">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-amber-200 transition-all duration-700 ease-in-out">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500" />
                ))}
              </div>
              <p className="italic text-gray-700 text-lg max-w-3xl transition-opacity duration-500 ease-in-out">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <div className="text-center mt-4">
                <p className="font-semibold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>
          </div>
        </div>

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
                  <item.icon className="w-5 h-5 text-blue-600" />
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
