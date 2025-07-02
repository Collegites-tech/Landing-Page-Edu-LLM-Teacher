"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Target, Lightbulb, Users, Globe, BookOpen, Award, GripVertical } from "lucide-react"

interface ContentCard {
  id: string
  title: string
  content: string
  icon: React.ReactNode
  color: string
  stats: string
}

export function WhyHowWhoSection() {
  const [cards, setCards] = useState<ContentCard[]>([
    {
      id: "why",
      title: "Why This Matters",
      content:
        "India-first, teacher-led AI revolution. Global LLMs don't reflect Indian pedagogy, language, or syllabus. This teacher-built model matters for Bharat's educational future.",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      stats: "22+ Languages Supported",
    },
    {
      id: "what",
      title: "What You'll Help Shape",
      content:
        "Your content trains the LLM to think and teach like an Indian educator. Every lesson or quiz you contribute refines how the AI explains concepts, answers doubts, and supports students.",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "from-blue-500 to-purple-500",
      stats: "10K+ Lessons Created",
    },
    {
      id: "who",
      title: "Who This is For",
      content:
        "Teachers, tutors, creators, and edtech leaders who want to build a real classroom assistant in Indian languages—not just another ChatGPT clone.",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      stats: "1000+ Educators Joined",
    },
  ])

  const [draggedCard, setDraggedCard] = useState<string | null>(null)
  const dragCounter = useRef(0)

  const handleDragStart = (e: React.DragEvent, cardId: string) => {
    setDraggedCard(cardId)
    e.dataTransfer.effectAllowed = "move"
    e.dataTransfer.setData("text/html", cardId)
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

    if (draggedCard && draggedCard !== targetId) {
      const draggedIndex = cards.findIndex((card) => card.id === draggedCard)
      const targetIndex = cards.findIndex((card) => card.id === targetId)

      const newCards = [...cards]
      const [draggedItem] = newCards.splice(draggedIndex, 1)
      newCards.splice(targetIndex, 0, draggedItem)

      setCards(newCards)
    }
    setDraggedCard(null)
  }

  return (
    <section id="why" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Why + How + Who</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Drag and rearrange these cards to explore different aspects of our mission
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <GripVertical className="w-4 h-4" />
            <span>Drag to reorder • Interactive experience</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={card.id}
              draggable
              onDragStart={(e) => handleDragStart(e, card.id)}
              onDragOver={handleDragOver}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, card.id)}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-grab active:cursor-grabbing transform hover:scale-105 ${
                draggedCard === card.id ? "opacity-50 rotate-3 scale-105" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${card.color} text-white shadow-lg`}>{card.icon}</div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <GripVertical className="w-5 h-5" />
                  <span className="text-xs">Drag me</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{card.content}</p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className={`text-sm font-semibold bg-gradient-to-r ${card.color} bg-clip-text text-transparent`}>
                  {card.stats}
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${card.color} opacity-${i < 4 ? "100" : "30"}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Globe className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900 mb-2">Multi-Language Support</h4>
            <p className="text-sm text-gray-600">Hindi, Tamil, Telugu, Bengali, Marathi, and 17+ more languages</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <BookOpen className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900 mb-2">Curriculum Aligned</h4>
            <p className="text-sm text-gray-600">NCERT, CBSE, ICSE, and state board syllabus integration</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h4 className="font-semibold text-gray-900 mb-2">Teacher Recognition</h4>
            <p className="text-sm text-gray-600">Certificates, badges, and community recognition for contributors</p>
          </div>
        </div>
      </div>
    </section>
  )
}
