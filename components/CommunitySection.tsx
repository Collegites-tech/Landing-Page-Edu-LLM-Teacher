"use client"

import { Users, Landmark, LineChart, MessageCircle } from "lucide-react"

export default function CommunitySection() {
  const stats = [
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

  return (
    <section className="py-20 bg-white" id="community">
      <div className="container mx-auto px-4 text-center">

        {/* 🔵 Button */}
        <div className="mb-6">
          <a
            href="https://forms.gle/jSydHxxUx7TaAaYAA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-full transition-none hover:bg-blue-600"
          >
            Become a Contributor
          </a>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Join Our Growing Community
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Educators from across India are already shaping the future of AI-powered education
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center hover:shadow-md transition"
            >
              <div className={`flex justify-center mb-4`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <div className="text-2xl font-bold text-gray-800">{item.value}</div>
              <div className="text-sm text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
