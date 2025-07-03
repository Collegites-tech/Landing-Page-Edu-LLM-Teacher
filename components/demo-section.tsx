"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, BookOpen } from "lucide-react"

export function DemoSection() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">See EDU-LLM in Action</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch how our AI creates educational content in Indian languages, tailored for local curriculum
            </p>
          </div>

          <Card className="overflow-hidden shadow-2xl bg-gradient-to-br from-white to-blue-50">
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-black/10 border-amber-500 border"></div>
              <div className="relative z-10 text-center space-y-4 w-full h-full flex items-center justify-center">
                {showVideo ? (
                  <iframe
                    src="https://collegites.logicsyner.com/full/preview/eduVideoGenerator/68663a6f75ada168ab703ca4"
                    title="EDU-LLM Demo Video"
                    allow="autoplay; fullscreen"
                    className="w-full h-full rounded-md"
                  />
                ) : (
                  <div
                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => setShowVideo(true)}
                  >
                    <Play className="h-10 w-10 text-blue-600 ml-1" />
                  </div>
                )}
              </div>
            </div>

            <div className="p-8 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-800 text-lg">Mathematics - Class 8</p>
                    <p className="text-gray-600">Algebra Quiz Generation in Hindi</p>
                  </div>
                </div>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                  Try Demo
                </Button>
              </div>
            </div>
          </Card>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-md border-orange-400 border">
              <div className="text-2xl font-bold text-blue-600 mb-2">30 sec</div>
              <p className="text-gray-600">Quick content generation</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md border-amber-400 border">
              <div className="text-2xl font-bold text-blue-600 mb-2">12+</div>
              <p className="text-gray-600">Indian languages supported</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md border-amber-400 border">
              <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">Curriculum aligned</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
