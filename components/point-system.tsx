/*


"use client"

import { Trophy, Star, Gift, Medal } from "lucide-react"
import { Card } from "@/components/ui/card"

const contributions = [
  { title: "Structured Lesson Plans", points: 40, desc: "Class-wise plans with objectives and activities" },
  { title: "Topic-wise Notes", points: 30, desc: "Minimum 2 pages, clear and structured" },
  { title: "Concept Explanations", points: 30, desc: "Textbook-style explanations" },
  { title: "Regional Language Content", points: 40, desc: "Content in Hindi or regional languages" },
  { title: "Content Translation", points: 30, desc: "Translate existing content to local languages" },
  { title: "MCQs/Quizzes", points: 30, desc: "Topic-wise questions with answers" },
  { title: "Slide Presentations", points: 20, desc: "Minimum 5 slides per topic" },
  { title: "Model Corrections", points: 50, desc: "Suggest improvements to AI responses" }
]

const storeItems = [
  { name: "Digital Certificate", points: 100, desc: "Personalized achievement certificate", color: "border-blue-300" },
  { name: "Premium Resources", points: 200, desc: "Access exclusive teaching materials", color: "border-green-300" },
  { name: "AI Training Credits", points: 300, desc: "Priority AI model training", color: "border-pink-300" },
  { name: "Profile Spotlight", points: 500, desc: "Featured on homepage for 1 week", color: "border-yellow-300" },
]

const activities = [
  { name: "Daily Login", points: "+5 pts" },
  { name: "Review AI Response", points: "+10 pts" },
  { name: "Community Interaction", points: "+15 pts" },
  { name: "Share Success Story", points: "+25 pts" }
]

const bonuses = [
  { name: "Weekly Streak", points: "+50 pts" },
  { name: "Content Creator", points: "+100 pts" },
  { name: "Community Leader", points: "+200 pts" }
]

const leaderboard = [
  { name: "Priya Ma'am", region: "Tamil Nadu - Science Teacher", points: 2450 },
  { name: "Amit Sir", region: "Maharashtra - Math Teacher", points: 2180 },
  { name: "Rekha Ma'am", region: "UP - English Teacher", points: 1920 },
]

const stories = [
  { name: "Rekha Ma'am", tag: "R", title: "Mathematics Teacher, UP", quote: "Contributing to EDU-LLM has helped me digitize my 15 years of teaching experience. Now my methods can help students across India!" },
  { name: "Amit Sir", tag: "A", title: "Science Teacher, Maharashtra", quote: "The AI now explains physics concepts in Marathi just like I do in my classroom. It’s amazing to see my teaching style reflected in AI!" },
  { name: "Priya Ma'am", tag: "P", title: "English Teacher, Tamil Nadu", quote: "Being a Co-Creator has given me a platform to influence AI education. My students benefit from AI that understands Indian context!" },
]

export default function PointSystem() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Contribution Types & Points System</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
        {contributions.map((item, i) => (
          <div key={i} className="border rounded-lg p-4 bg-white shadow-sm">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-sm text-gray-800">{item.title}</h3>
              <span className="text-blue-600 font-bold text-sm">{item.points} pts</span>
            </div>
            <p className="text-xs text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl md:text-2xl font-bold text-center mb-6">What You Can Do With Points</h2>

      <div className="bg-blue-50 p-6 rounded-xl mb-12">
        <h3 className="text-center font-semibold text-lg text-gray-700 mb-4">🎁 Points Store</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {storeItems.map((item, i) => (
            <div key={i} className={`border-2 ${item.color} rounded-xl p-4 bg-white text-center`}>
              <h4 className="font-bold text-blue-700">{item.name}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
              <p className="font-semibold text-sm text-blue-500 mt-2">{item.points} pts</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h4 className="font-semibold text-gray-700 text-md mb-4">📅 Daily Activities</h4>
          <ul className="space-y-2 text-sm">
            {activities.map((a, i) => (
              <li key={i} className="flex justify-between">
                <span>{a.name}</span>
                <span className="text-blue-600 font-medium">{a.points}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h4 className="font-semibold text-gray-700 text-md mb-4">🌟 Bonus Challenges</h4>
          <ul className="space-y-2 text-sm">
            {bonuses.map((b, i) => (
              <li key={i} className="flex justify-between">
                <span>{b.name}</span>
                <span className="text-green-600 font-medium">{b.points}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-xl mb-12">
        <h3 className="text-center font-semibold text-lg text-gray-700 mb-4">🏆 Monthly Leaderboard</h3>
        <ul className="divide-y divide-gray-200">
          {leaderboard.map((l, i) => (
            <li key={i} className="flex justify-between py-2">
              <div>
                <p className="font-semibold text-gray-800">{l.name}</p>
                <p className="text-sm text-gray-500">{l.region}</p>
              </div>
              <p className="text-orange-600 font-bold text-sm">{l.points} pts</p>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-center">
          <button className="text-blue-600 text-sm font-medium underline">View Full Leaderboard</button>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-center text-lg font-semibold mb-6">🎉 Success Stories</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <div key={i} className="bg-white border rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold mr-3">
                  {s.tag}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{s.name}</p>
                  <p className="text-xs text-gray-500">{s.title}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 italic">"{s.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

*/
