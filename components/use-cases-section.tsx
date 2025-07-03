import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { School, Users2, Building2, Home } from "lucide-react"

const useCases = [
  {
    icon: School,
    title: "K-12 Schools",
    description: "Enhance classroom learning with personalized AI tutoring and automated assessment tools.",
    benefits: [
      "Personalized learning paths",
      "Automated grading and feedback",
      "Parent-teacher communication tools",
      "Curriculum alignment tracking",
    ],
  },
  {
    icon: Building2,
    title: "Higher Education",
    description: "Support university students and faculty with advanced research and learning capabilities.",
    benefits: [
      "Research assistance and citation help",
      "Complex problem-solving support",
      "Thesis and paper writing guidance",
      "Course content optimization",
    ],
  },
  {
    icon: Users2,
    title: "Corporate Training",
    description: "Accelerate employee development with AI-powered training and skill assessment.",
    benefits: [
      "Skill gap analysis",
      "Customized training modules",
      "Progress tracking and reporting",
      "Compliance training automation",
    ],
  },
  {
    icon: Home,
    title: "Homeschooling",
    description: "Provide comprehensive educational support for homeschooling families.",
    benefits: [
      "Curriculum planning assistance",
      "Interactive learning activities",
      "Progress monitoring tools",
      "Educational resource recommendations",
    ],
  },
]

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">Perfect for Every Educational Setting</h2>
          <p className="text-lg text-gray-600">
            Our AI platform adapts to meet the unique needs of different educational environments
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-100">
                  <useCase.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">{useCase.title}</CardTitle>
                <CardDescription className="text-gray-600">{useCase.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
