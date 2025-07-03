import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "High School Principal",
    school: "Lincoln High School",
    content:
      "EduAI has transformed how our teachers create lesson plans and assess student progress. The time savings alone have been incredible, but the personalized learning outcomes are what truly matter.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
  },
  {
    name: "Prof. Michael Chen",
    role: "Computer Science Professor",
    school: "State University",
    content:
      "The AI tutoring system has helped my students grasp complex algorithms much faster. It's like having a teaching assistant available 24/7 for every student.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "5th Grade Teacher",
    school: "Riverside Elementary",
    content:
      "My students are more engaged than ever. The AI adapts to each child's learning style, and I can see the difference in their confidence and performance.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Training Manager",
    school: "TechCorp Inc.",
    content:
      "We've reduced our training costs by 40% while improving completion rates. The AI creates personalized learning paths that keep our employees engaged.",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">Trusted by Educators Worldwide</h2>
          <p className="text-lg text-gray-600">
            See how EduAI is making a difference in classrooms and training centers globally
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.school}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
