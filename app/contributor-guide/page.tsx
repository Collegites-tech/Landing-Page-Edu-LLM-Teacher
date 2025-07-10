"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Users,
  FileText,
  MessageSquare,
  Globe,
  Shield,
  Mail,
  ExternalLink,
  Trophy,
  CheckCircle,
  Award,
  Target,
  Heart,
  Lightbulb,
  Clock,
  X,
  ChevronRight,
  Info,
} from "lucide-react"

export default function ContributorGuide() {
  const [currentStep, setCurrentStep] = useState(0)
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null)

  const data = {
    steps: [
      {
        id: "welcome",
        title: "Welcome",
        subtitle: "What is Bharat-EDU-LLM?",
        icon: Heart,
        color: "bg-gradient-to-br from-orange-400 to-orange-600",
      },
      {
        id: "getting-started",
        title: "Get Started",
        subtitle: "3 Simple Steps",
        icon: Award,
        color: "bg-gradient-to-br from-orange-500 to-orange-700",
      },
      {
        id: "contribute-rewards",
        title: "Contribute & Earn",
        subtitle: "Share & Get Rewarded",
        icon: Trophy,
        color: "bg-gradient-to-br from-orange-400 to-orange-600",
      },
      {
        id: "contact",
        title: "Get Help",
        subtitle: "Support & Community",
        icon: Mail,
        color: "bg-gradient-to-br from-orange-500 to-orange-700",
      },
    ],
    contributions: [
      { type: "Notes", format: "PDF, DOC (Typed or Scanned)", icon: FileText, points: "20-25" },
      { type: "Lesson Plans", format: "DOCX, PDF (with learning objectives)", icon: BookOpen, points: "40" },
      { type: "Slide Decks", format: "PPT, Google Slides", icon: FileText, points: "20-25" },
      { type: "MCQ Quizzes", format: "DOC, Form, Excel", icon: MessageSquare, points: "20" },
      { type: "Translations", format: "English + Hindi/Regional languages", icon: Globe, points: "40" },
      { type: "Feedback", format: "Suggestions and corrections", icon: MessageSquare, points: "15" },
    ],
    tiers: [
      { name: "Early Partner", badge: "🥉", color: "bg-amber-100 text-amber-800 border-amber-300" },
      { name: "Core Contributor", badge: "🥈", color: "bg-gray-100 text-gray-800 border-gray-300" },
      { name: "Co-Creator", badge: "🥇", color: "bg-yellow-100 text-yellow-800 border-yellow-300" },
    ],
    points: [
      {
        action: "Upload complete lesson plan",
        points: 40,
        description: "Comprehensive lesson plans with clear objectives and strategies",
      },
      {
        action: "Submit quiz (5+ MCQs)",
        points: 20,
        description: "Quality quiz sets with answer keys and explanations",
      },
      {
        action: "Share notes/slides",
        points: "20–25",
        description: "Teaching materials with educational value and detail",
      },
      {
        action: "Translate content",
        points: 40,
        description: "Accurate translations between English and Indian languages",
      },
      {
        action: "Refer another educator",
        points: 30,
        description: "Invite fellow teachers to join our contributor community",
      },
      { action: "Suggest improvements", points: 15, description: "Constructive feedback and enhancement suggestions" },
      { action: "Complete surveys", points: 15, description: "Participate in feedback forms and community surveys" },
    ],
    safety: [
      {
        id: "data-safety",
        title: "Your Data is Safe",
        icon: Shield,
        content: {
          description:
            "We collect minimal personal information (name, email, teaching role) only to personalize your contributor experience and maintain effective communication.",
          commitment:
            "Your personal data will never be sold, shared with third parties, or used commercially without your explicit consent. We maintain strict security protocols and comply with all privacy regulations.",
        },
      },
      {
        id: "content-usage",
        title: "How Your Content is Used",
        icon: CheckCircle,
        content: {
          points: [
            {
              title: "AI Training Enhancement",
              description:
                "Materials help train AI to think and respond like experienced Indian teachers with authentic cultural context.",
            },
            {
              title: "Multilingual Accuracy",
              description:
                "Translations enhance communication effectiveness across Indian languages while maintaining educational accuracy.",
            },
            {
              title: "Ownership & Attribution",
              description:
                "You retain full ownership. We request only a license for AI training and educational use with proper attribution.",
            },
          ],
        },
      },
      {
        id: "community-conduct",
        title: "Community Code of Conduct",
        icon: Users,
        content: {
          description:
            "We expect all contributors to maintain a respectful, collaborative, and purposeful environment. To ensure this, we follow clear guidelines:",
          expectedBehavior: [
            "Be respectful and constructive",
            "Avoid spam or off-topic posts",
            "Share ideas and questions freely",
            "Report concerns to admins",
            "Offer thoughtful feedback",
          ],
          consequences: {
            firstWarning: "Verbal or written warning with guidance on expected behavior",
            repeatedMisconduct: [
              "Temporary suspension",
              "Removal from community",
              "Loss of access and badges",
              "Disqualification from perks",
            ],
          },
        },
      },
    ],
    getStarted: [
      {
        step: 1,
        title: "Fill the Form",
        desc: "Complete our Early Partner Form",
        time: "5-10 minutes",
        color: "from-orange-400 to-orange-500",
      },
      {
        step: 2,
        title: "Join Community",
        desc: "Get added to WhatsApp Community",
        time: "2-3 business days",
        color: "from-orange-500 to-orange-600",
      },
      {
        step: 3,
        title: "Start Contributing",
        desc: "Share via Google Forms",
        time: "At your pace",
        color: "from-orange-600 to-orange-700",
      },
    ],
    contact: [
      {
        icon: Mail,
        title: "Email Support",
        desc: "support@collegites.tech",
        color: "from-orange-400 to-orange-500",
        link: "https://mail.google.com/mail/?view=cm&fs=1&to=support@collegites.tech&su=Support%20Request%20-%20Bharat-EDU-LLM&body=Hello%20Support%20Team,%0A%0AI%20need%20help%20with:%0A%0A[Please%20describe%20your%20issue%20here]%0A%0AThank%20you!",
      },
      {
        icon: Users,
        title: "Join Community",
        desc: "WhatsApp Community",
        color: "from-orange-500 to-orange-600",
        link: "https://forms.gle/jSydHxxUx7TaAaYAA",
      },
    ],
    welcome: [
      {
        icon: Lightbulb,
        title: "What is Bharat-EDU-LLM?",
        color: "from-orange-400 to-orange-500",
        content: [
          "India's first multilingual AI designed specifically for education. Built by teachers, for teachers, it learns from authentic Indian classroom materials.",
          "Unlike generic AI systems, our model understands Indian teaching methods, regional languages, and diverse learning styles.",
        ],
      },
      {
        icon: Target,
        title: "Your Role as Contributor",
        color: "from-orange-500 to-orange-600",
        content: [
          "Shape how AI understands Indian education by sharing your teaching materials—notes, lesson plans, quizzes, and translations.",
          "Help create an AI that thinks like an Indian teacher and serves diverse learners across the country.",
        ],
      },
    ],
  }

  const Card3D = ({ item, i, onClick }: any) => (
    <Card
      key={i}
      className={`bg-white/95 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden ${onClick ? "cursor-pointer" : ""} hover:scale-105 transition-all duration-300`}
      onClick={onClick}
    >
      <CardHeader className={`bg-gradient-to-r ${item.color} text-white p-${onClick ? "8" : "6"} text-center`}>
        {item.icon && <item.icon className="h-16 w-16 mx-auto mb-4" />}
        {item.step && (
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
            {item.step}
          </div>
        )}
        <CardTitle className="text-xl">{item.title}</CardTitle>
        {item.subtitle && <CardDescription className="text-orange-100">{item.subtitle}</CardDescription>}
      </CardHeader>
      <CardContent className={`p-${onClick ? "8" : "6"} ${onClick ? "text-center" : ""}`}>
        {item.content ? (
          item.content.map((text: string, j: number) => (
            <p key={j} className="text-gray-700 leading-relaxed mb-4">
              {text}
            </p>
          ))
        ) : (
          <>
            <p className="text-gray-700 font-medium">{item.desc}</p>
            {item.time && (
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mt-3">
                <Clock className="h-4 w-4" />
                <span>{item.time}</span>
              </div>
            )}
            {onClick && (
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 mt-4">
                View Details <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </>
        )}
        {item.link && (
          <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white rounded-full mt-4">
            <Link href={item.link} target="_blank">
              Get Help
            </Link>
          </Button>
        )}
      </CardContent>
    </Card>
  )

  const StepContent = () =>
    [
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {data.welcome.map((card, i) => (
          <Card3D key={i} item={card} i={i} />
        ))}
      </div>,
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.getStarted.map((step, i) => (
          <Card3D key={i} item={step} i={i} />
        ))}
      </div>,
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card3D
            item={{
              icon: BookOpen,
              title: "What You Can Contribute",
              subtitle: "Share your teaching materials",
              color: "from-orange-400 to-orange-500",
              desc: "Notes, Lesson Plans, Slides, Quizzes, Translations & More",
            }}
            i={0}
            onClick={() => setActiveModal("contribute")}
          />
          <Card3D
            item={{
              icon: Trophy,
              title: "Rewards & Recognition",
              subtitle: "Earn points and unlock tiers",
              color: "from-orange-500 to-orange-600",
              desc: "Early Partner, Core Contributor, Co-Creator Tiers",
            }}
            i={1}
            onClick={() => setActiveModal("rewards")}
          />
        </div>
        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl rounded-3xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-8 text-center">
            <Shield className="h-16 w-16 mx-auto mb-4" />
            <CardTitle className="text-2xl">Safety & Community</CardTitle>
            <CardDescription className="text-orange-100">
              Your data is protected and our community maintains high standards
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.safety.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => setActiveModal(topic.id)}
                  className="p-4 bg-orange-50 rounded-2xl hover:bg-orange-100 transition-all duration-300 text-center"
                >
                  <topic.icon className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-800 text-sm">{topic.title}</h3>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>,
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.contact.map((option, i) => (
          <Card3D key={i} item={option} i={i} />
        ))}
      </div>,
    ][currentStep]

  const ModalContent = () => {
    if (activeModal === "contribute")
      return (
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <div className="space-y-4">
              {data.contributions.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl border border-orange-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg">{item.type}</h3>
                      <p className="text-sm text-orange-600 font-medium">{item.format}</p>
                    </div>
                  </div>
                  <Badge className="bg-orange-600 text-white font-bold text-lg px-4 py-2">{item.points} pts</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )

    if (activeModal === "rewards")
      return (
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Contributor Tiers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.tiers.map((tier, i) => (
                <Card key={i} className="text-center border-2 rounded-3xl hover:scale-105 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="text-6xl mb-4">{tier.badge}</div>
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <Badge className={`${tier.color} text-lg px-4 py-2`}>Tier {i + 1}</Badge>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Points System</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.points.map((item, i) => (
                <div key={i} className="relative">
                  <button
                    className="w-full p-4 bg-gradient-to-r from-orange-100 to-orange-200 rounded-2xl border border-orange-300 hover:from-orange-200 hover:to-orange-300 transition-all duration-300 text-left"
                    onMouseEnter={() => setHoveredPoint(i)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-gray-800 text-sm">{item.action}</h4>
                      <Badge className="bg-orange-600 text-white font-bold">{item.points} pts</Badge>
                    </div>
                    <Info className="h-4 w-4 text-orange-600 mt-2" />
                  </button>
                  {hoveredPoint === i && (
                    <div className="absolute z-10 top-full left-0 right-0 mt-2 p-3 bg-white border border-gray-200 rounded-xl shadow-lg">
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )

    const topic = data.safety.find((t) => t.id === activeModal)
    if (!topic) return null

    if (activeModal === "data-safety")
      return (
        <div className="space-y-4">
          <p className="text-gray-700">{topic.content.description}</p>
          <Card className="bg-orange-50 border border-orange-200 rounded-2xl">
            <CardContent className="p-4">
              <h4 className="font-bold text-orange-800 mb-2">Our Privacy Commitment:</h4>
              <p className="text-sm text-gray-700">{topic.content.commitment}</p>
            </CardContent>
          </Card>
        </div>
      )

    if (activeModal === "content-usage")
      return (
        <div className="space-y-4">
          {topic.content.points?.map((point, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">{point.title}</h4>
                <p className="text-gray-700 text-sm">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      )

    if (activeModal === "community-conduct")
      return (
        <div className="space-y-6">
          <p className="text-gray-700">{topic.content.description}</p>

          <Card className="bg-green-50 border border-green-200 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg text-green-800 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Expected Behavior
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {topic.content.expectedBehavior?.map((behavior, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">{behavior}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-orange-100 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[
          { t: "20", l: "10", s: "32", o: "20" },
          { t: "40", r: "20", s: "24", o: "25" },
          { b: "20", l: "20", s: "40", o: "15" },
          { b: "40", r: "10", s: "28", o: "20" },
          { t: "1/2", l: "1/3", s: "20", o: "18" },
        ].map((c, i) => (
          <div
            key={i}
            className={`absolute ${c.t ? `top-${c.t}` : c.b ? `bottom-${c.b}` : ""} ${c.l ? `left-${c.l}` : c.r ? `right-${c.r}` : ""} w-${c.s} h-${c.s} ${i % 2 === 0 ? "bg-white/40" : "bg-orange-200/30"} rounded-full opacity-${c.o}`}
          />
        ))}
      </div>

      <div className="relative z-10 flex">
        <div className="w-20 lg:w-24 bg-white/30 backdrop-blur-md border-r border-orange-200/50 flex flex-col items-center py-8 space-y-6">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <BookOpen className="h-6 w-6 text-orange-600" />
          </div>
          <div className="flex flex-col space-y-4">
            {data.steps.map((step, i) => (
              <div key={step.id} className="flex flex-col items-center">
                <button
                  onClick={() => setCurrentStep(i)}
                  className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 font-bold text-lg ${i === currentStep ? step.color + " text-white shadow-xl" : i < currentStep ? "bg-white text-orange-600 border-2 border-orange-300 shadow-md" : "bg-white/50 text-orange-600 hover:bg-white/70"}`}
                >
                  {i < currentStep ? <CheckCircle className="w-6 h-6" /> : <span>{i + 1}</span>}
                  {i === currentStep && (
                    <div className="absolute -inset-1 rounded-full border-2 border-orange-300/50 animate-pulse" />
                  )}
                </button>
                {i < data.steps.length - 1 && (
                  <div
                    className={`w-0.5 h-8 mt-2 transition-all duration-300 ${i < currentStep ? "bg-orange-400/60" : "bg-orange-300/30"}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-white/30 backdrop-blur-md border-b border-orange-200/50 px-8 py-6">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Bharat-EDU-LLM</h1>
                <p className="text-gray-600 text-lg">Contributor Guide</p>
              </div>
              <Button
                asChild
                className="bg-orange-600 text-white hover:bg-orange-700 font-semibold px-6 py-3 rounded-full shadow-lg"
              >
                <Link href="https://forms.gle/jSydHxxUx7TaAaYAA" target="_blank" rel="noopener noreferrer">
                  Join Now <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="px-4 md:px-8 py-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">{data.steps[currentStep].title}</h2>
                <p className="text-gray-600 text-base md:text-lg">{data.steps[currentStep].subtitle}</p>
              </div>
              <div className="min-h-[500px]">
                <StepContent />
              </div>
            </div>
          </div>
        </div>
      </div>

      {activeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <Card className="bg-white max-w-5xl w-full max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl">
            <CardHeader className="flex flex-row items-center justify-between p-6 border-b">
              <CardTitle className="text-2xl text-gray-800">
                {activeModal === "contribute"
                  ? "What You Can Contribute"
                  : activeModal === "rewards"
                    ? "Rewards & Recognition"
                    : data.safety.find((topic) => topic.id === activeModal)?.title}
              </CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setActiveModal(null)} className="rounded-full">
                <X className="h-5 w-5" />
              </Button>
            </CardHeader>
            <CardContent className="p-6">
              <ModalContent />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
