import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Brain, MessageSquare, PieChart, Users, Zap, CheckCircle, Target } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Intelligent Tutoring",
    description: "AI-powered personalized tutoring that adapts to each student's learning pace and style.",
  },
  {
    icon: MessageSquare,
    title: "Interactive Q&A",
    description: "Students can ask questions in natural language and receive instant, accurate explanations.",
  },
  {
    icon: BookOpen,
    title: "Content Generation",
    description: "Automatically generate lesson plans, quizzes, and educational materials tailored to your curriculum.",
  },
  {
    icon: PieChart,
    title: "Learning Analytics",
    description: "Comprehensive insights into student progress, engagement, and learning outcomes.",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description: "Facilitate group projects and peer-to-peer learning with AI-moderated discussions.",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description: "Provide immediate feedback on assignments and assessments to accelerate learning.",
  },
  {
    icon: CheckCircle,
    title: "Automated Grading",
    description: "Save time with AI-powered grading for essays, coding assignments, and more.",
  },
  {
    icon: Target,
    title: "Adaptive Learning",
    description: "Customize learning paths based on individual student needs and performance data.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">Powerful Features for Modern Education</h2>
          <p className="text-lg text-gray-600">
            Discover how our AI platform revolutionizes teaching and learning experiences
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                  <feature.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
