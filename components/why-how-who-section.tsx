"use client"

import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { GripVertical, Users, Brain, Target, Globe } from "lucide-react"

const initialCards = [
  {
    id: "why",
    icon: Target,
    title: "Why This Matters",
    subtitle: "India-first, teacher-led AI revolution",
    content:
      "Global LLMs don't reflect Indian pedagogy, language, or syllabus. Our teacher-built model understands the unique needs of Bharat's classrooms, cultural context, and diverse learning styles.",
    color: "from-blue-50 to-gray-50",
    borderColor: "border-blue-200",
    iconColor: "from-blue-600 to-blue-800",
  },
  {
    id: "how",
    icon: Brain,
    title: "How You'll Help Shape",
    subtitle: "How the model thinks and explains",
    content:
      "Your content trains the LLM to think and teach like an Indian educator. Every lesson or quiz you contribute refines how the AI explains concepts, answers doubts, and supports students in their native language.",
    color: "from-gray-50 to-blue-50",
    borderColor: "border-gray-200",
    iconColor: "from-blue-600 to-blue-800",
  },
  {
    id: "who",
    icon: Users,
    title: "Who This is For",
    subtitle: "Teachers, tutors, creators, and edtech leaders",
    content:
      "Not just ChatGPT - this is a real classroom assistant that understands Indian curriculum, speaks regional languages, and respects our educational values and teaching methodologies.",
    color: "from-blue-50 to-gray-50",
    borderColor: "border-blue-200",
    iconColor: "from-blue-600 to-blue-800",
  },
]

export function WhyHowWhoSection() {
  const [cards, setCards] = useState(initialCards)
  const [draggedCard, setDraggedCard] = useState<string | null>(null)

  const handleDragStart = (e: React.DragEvent, cardId: string) => {
    setDraggedCard(cardId)
    e.dataTransfer.effectAllowed = "move"
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "move"
  }

  const handleDrop = (e: React.DragEvent, targetCardId: string) => {
    e.preventDefault()

    if (!draggedCard || draggedCard === targetCardId) return

    const draggedIndex = cards.findIndex((card) => card.id === draggedCard)
    const targetIndex = cards.findIndex((card) => card.id === targetCardId)

    const newCards = [...cards]
    const [draggedItem] = newCards.splice(draggedIndex, 1)
    newCards.splice(targetIndex, 0, draggedItem)

    setCards(newCards)
    setDraggedCard(null)
  }

  return (
    <section id="why" className="py-20 bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto mx-1">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Building India's Educational Future</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Drag and rearrange the cards below to explore how you can be part of this revolutionary journey
            </p>
            <p className="text-3xl md:text-4xl font-bold text-gray-500 mt-4">WHY + HOW + WHAT</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-0">
            {cards.map((card) => (
              <Card
                key={card.id}
                draggable
                onDragStart={(e) => handleDragStart(e, card.id)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, card.id)}
                className={`cursor-move hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br border-amber-400 ${card.color} ${card.borderColor} group border`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.iconColor} flex items-center justify-center shadow-lg`}
                    >
                      <card.icon className="h-6 w-6 text-white" />
                    </div>
                    <GripVertical className="h-5 w-5 text-gray-400 group-hover:text-orange-600 transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-black">{card.title}</CardTitle>
                  <p className="text-sm font-medium text-orange-600">{card.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-6">{card.content}</p>
                  <Button
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 bg-transparent"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg border border-blue-200">
              <Globe className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Supporting 12+ Indian languages and growing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
