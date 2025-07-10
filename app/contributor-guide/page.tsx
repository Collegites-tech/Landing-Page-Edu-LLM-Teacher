"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
      { type: "Notes", format: "PDF, DOC", icon: FileText, points: "20–25" },
      {
        type: "Lesson Plans",
        format: "DOCX, PDF",
        icon: BookOpen,
        points: "40",
      },
      { type: "Slide Decks", format: "PPT", icon: FileText, points: "20–25" },
      { type: "MCQ Quizzes", format: "DOC, Form", icon: MessageSquare, points: "20" },
      { type: "Translations", format: "English + Regional", icon: Globe, points: "40" },
      { type: "Feedback", format: "Suggestions/Corrections", icon: MessageSquare, points: "15" },
    ],
    tiers: [
      {
        name: "Early Partner",
        badge: "🥉",
        color: "bg-amber-100 text-amber-800 border-amber-300",
      },
      {
        name: "Core Contributor",
        badge: "🥈",
        color: "bg-gray-100 text-gray-800 border-gray-300",
      },
      { name: "Co‑Creator", badge: "🥇", color: "bg-yellow-100 text-yellow-800 border-yellow-300" },
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
      {
        action: "Suggest improvements",
        points: 15,
        description: "Constructive feedback and enhancement suggestions",
      },
      {
        action: "Complete surveys",
        points: 15,
        description: "Participate in feedback forms and community surveys",
      },
    ],
    safety: [
      {
        id: "data-safety",
        title: "Your Data is Safe",
        icon: Shield,
        content: {
          description:
            "We collect minimal personal information only to personalize your experience.",
          commitment:
            "Data is never sold, shared, or used commercially without consent. We comply with strict privacy protocols.",
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
                "Helps train AI to respond like experienced Indian teachers with cultural context.",
            },
            {
              title: "Multilingual Accuracy",
              description:
                "Enhances language support across Indian languages with educational fidelity.",
            },
            {
              title: "Ownership & Attribution",
              description:
                "You retain ownership. We ask only licensing for educational AI use with attribution.",
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
            "We expect respect, collaboration, and clarity in all interactions.",
          expectedBehavior: [
            "Be respectful and constructive",
            "Avoid spam or off-topic posts",
            "Share ideas and questions",
            "Report concerns",
            "Offer thoughtful feedback",
          ],
          consequences: {
            firstWarning:
              "Verbal or written warning with guidance",
            repeatedMisconduct: [
              "Temporary suspension",
              "Removal from community",
              "Loss of access/badges",
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
        time: "5–10 minutes",
        color: "from-orange-400 to-orange-500",
      },
      {
        step: 2,
        title: "Join Community",
        desc: "Get added to WhatsApp Community",
        time: "2–3 days",
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
        link:
          "https://mail.google.com/mail/?view=cm&fs=1&to=support@collegites.tech...",
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
        title: "What is Bharat‑EDU‑LLM?",
        color: "from-orange-400 to-orange-500",
        content: [
          "India’s first multilingual AI designed by teachers for teachers.",
          "Focused on Indian teaching methods, regional languages, learning styles.",
        ],
      },
      {
        icon: Target,
        title: "Your Role",
        color: "from-orange-500 to-orange-600",
        content: [
          "Share teaching materials—notes, lesson plans, quizzes, translations.",
          "Help build an AI that understands diverse learners across India.",
        ],
      },
    ],
  }

  function Card3D({ item, onClick }: any) {
    const base = onClick ? "cursor-pointer hover:scale-105" : ""
    return (
      <Card className={`bg-white/95 backdrop-blur-sm border-0 shadow-lg rounded-2xl overflow-hidden transform-gpu transition ${base}`}>
        <CardHeader
          className={`bg-gradient-to-r ${item.color} text-white px-4 py-6 sm:px-8 sm:py-8 text-center`}
        >
          {item.icon && <item.icon className="h-12 w-12 mx-auto mb-3" />}
          <CardTitle className="text-lg sm:text-xl font-bold">{item.title}</CardTitle>
          {item.subtitle && (
            <CardDescription className="text-orange-100">
              {item.subtitle}
            </CardDescription>
          )}
        </CardHeader>

        <CardContent className="px-4 py-6 sm:px-8 sm:py-8 text-sm sm:text-base">
          {item.content
            ? item.content.map((c: string, i: number) => (
                <p key={i} className="text-gray-700 mb-4">{c}</p>
              ))
            : (
              <>
                {item.desc && (
                  <p className="text-gray-700 font-medium">{item.desc}</p>
                )}
                {item.time && (
                  <div className="flex items-center gap-2 text-gray-600 mt-3">
                    <Clock className="h-4 w-4" />
                    <span>{item.time}</span>
                  </div>
                )}
                {onClick && (
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full mt-4">
                    View Details <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </>
            )}
          {item.link && (
            <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full mt-4">
              <Link href={item.link} target="_blank">
                Get Help
              </Link>
            </Button>
          )}
        </CardContent>
      </Card>
    )
  }

  function StepContent() {
    switch (currentStep) {
      case 0:
        return (
          <div className="grid grid-cols-1 gap-6">
            {data.welcome.map((d, i) => (
              <Card3D key={i} item={d} />
            ))}
          </div>
        )
      case 1:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {data.getStarted.map((d, i) => (
              <Card3D key={i} item={d} />
            ))}
          </div>
        )
      case 2:
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card3D
                item={{
                  icon: BookOpen,
                  title: "What You Can Contribute",
                  subtitle: "Teaching materials & more",
                  color: "from-orange-400 to-orange-500",
                  desc: "Notes, Lesson Plans, Slides, Quizzes, Translations",
                }}
                onClick={() => setActiveModal("contribute")}
              />
              <Card3D
                item={{
                  icon: Trophy,
                  title: "Rewards & Recognition",
                  subtitle: "Earn tiers & points",
                  color: "from-orange-500 to-orange-600",
                  desc: "Early Partner, Core Contributor, Co‑Creator tiers",
                }}
                onClick={() => setActiveModal("rewards")}
              />
            </div>
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg rounded-2xl">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-8 py-6 text-center">
                <Shield className="h-12 w-12 mx-auto mb-3" />
                <CardTitle className="text-xl">Safety & Community</CardTitle>
                <CardDescription className="text-orange-100">
                  Your data is protected & community standards upheld
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 py-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {data.safety.map(s => (
                    <button
                      key={s.id}
                      onClick={() => setActiveModal(s.id)}
                      className="p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition text-center"
                    >
                      <s.icon className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                      <h3 className="font-semibold text-gray-800 text-sm">{s.title}</h3>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )
      case 3:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.contact.map((d, i) => (
              <Card3D key={i} item={d} />
            ))}
          </div>
        )
      default:
        return null
    }
  }

  function ModalContent() {
    if (activeModal === "contribute") {
      return (
        <div className="space-y-4">
          {data.contributions.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center p-4 bg-orange-50 rounded-xl border border-orange-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{item.type}</h3>
                  <p className="text-orange-600 text-sm">{item.format}</p>
                </div>
              </div>
              <Badge className="bg-orange-600 text-white font-semibold">
                {item.points} pts
              </Badge>
            </div>
          ))}
        </div>
      )
    }

    if (activeModal === "rewards") {
      return (
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-center">Contributor Tiers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {data.tiers.map((tier, i) => (
                <Card key={i} className="text-center border-2 rounded-2xl shadow-sm">
                  <CardHeader className="pb-4">
                    <div className="text-4xl mb-2">{tier.badge}</div>
                    <CardTitle className="text-lg">{tier.name}</CardTitle>
                    <Badge className={`${tier.color} text-sm px-3 py-1`}>
                      Tier {i + 1}
                    </Badge>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-center">Points System</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative">
              {data.points.map((item, i) => (
                <div key={i} className="relative">
                  <button
                    onMouseEnter={() => setHoveredPoint(i)}
                    onMouseLeave={() => setHoveredPoint(null)}
                    className="w-full p-4 bg-orange-100 rounded-xl border border-orange-300 text-left hover:bg-orange-200 transition"
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold text-gray-800 text-sm">
                        {item.action}
                      </h4>
                      <Badge className="bg-orange-600 text-white text-sm">
                        {item.points} pts
                      </Badge>
                    </div>
                    <Info className="h-4 w-4 text-orange-600 mt-2" />
                  </button>
                  {hoveredPoint === i && (
                    <div className="absolute z-10 top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 text-sm max-w-full overflow-auto">
                      {item.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }

    const topic = data.safety.find(t => t.id === activeModal)
    if (!topic) return null

    if (activeModal === "data-safety") {
      return (
        <div className="space-y-4">
          <p className="text-gray-700">{topic.content.description}</p>
          <Card className="bg-orange-50 border border-orange-200 rounded-xl">
            <CardContent className="p-4">
              <h4 className="font-semibold text-orange-800">Our Privacy Commitment</h4>
              <p className="text-gray-700 text-sm">{topic.content.commitment}</p>
            </CardContent>
          </Card>
        </div>
      )
    }

    if (activeModal === "content-usage") {
      return (
        <div className="space-y-4">
          {topic.content.points?.map((pt, i) => (
            <div key={i} className="flex gap-3 items-start bg-gray-50 p-4 rounded-xl">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800 text-sm">{pt.title}</h4>
                <p className="text-gray-700 text-sm">{pt.description}</p>
              </div>
            </div>
          ))}
        </div>
      )
    }

    if (activeModal === "community-conduct") {
      return (
        <div className="space-y-6">
          <p className="text-gray-700">{topic.content.description}</p>
          <Card className="bg-green-50 border border-green-200 rounded-xl">
            <CardHeader>
              <CardTitle className="text-lg text-green-800 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" /> Expected Behavior
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {topic.content.expectedBehavior?.map((b, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">{b}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      )
    }

    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-orange-50 relative">
      <div className="absolute inset-0 overflow-hidden">
        {[{ t: "10", l: "5", s: "20", o: "20" }, { b: "10", r: "10", s: "24", o: "15" }].map((c, i) => (
          <div
            key={i}
            className={`absolute ${c.t ? `top-${c.t}` : ""} ${c.b ? `bottom-${c.b}` : ""} ${
              c.l ? `left-${c.l}` : ""
            } ${c.r ? `right-${c.r}` : ""} w-${c.s} h-${c.s} ${
              i % 2 === 0 ? "bg-white/40" : "bg-orange-200/30"
            } rounded-full opacity-${c.o}`}
          />
        ))}
      </div>

      <div className="relative flex flex-col sm:flex-row">
        <div className="hidden sm:flex w-20 lg:w-24 bg-white/30 backdrop-blur-md border-r border-orange-200/50 flex-col items-center py-8 space-y-6">
          {data.steps.map((step, i) => (
            <div key={step.id} className="flex flex-col items-center">
              <button
                onClick={() => setCurrentStep(i)}
                className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 shadow ${
                  i === currentStep
                    ? `${step.color} text-white shadow-xl`
                    : i < currentStep
                    ? "bg-white text-orange-600 border-2 border-orange-300 shadow-md"
                    : "bg-white/50 text-orange-600 hover:bg-white/70"
                }`}
              >
                {i < currentStep ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <span className="font-medium">{i + 1}</span>
                )}
                {i === currentStep && (
                  <span className="absolute -inset-1 rounded-full border-2 border-orange-300/50 animate-pulse" />
                )}
              </button>
              {i < data.steps.length - 1 && (
                <div
                  className={`w-px h-8 mt-2 ${
                    i < currentStep ? "bg-orange-400/60" : "bg-orange-300/30"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex-1">
          {/* Header */}
          <div className="bg-white/30 backdrop-blur-md border-b border-orange-200/50 px-4 py-6">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Bharat‑EDU‑LLM</h1>
                <p className="text-gray-600">Contributor Guide</p>
              </div>
              <Button asChild className="bg-orange-600 text-white px-4 py-2 rounded-full shadow-sm">
                <Link
                  href="https://forms.gle/jSydHxxUx7TaAaYAA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Now <ExternalLink className="inline-block ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 sm:px-8 py-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                  {data.steps[currentStep].title}
                </h2>
                <p className="text-gray-600">
                  {data.steps[currentStep].subtitle}
                </p>
              </div>
              <div className="min-h-[400px]">
                <StepContent />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl mx-4">
            <div className="flex justify-end p-2">
              <button
                onClick={() => setActiveModal(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="max-h-[80vh] overflow-y-auto px-4 sm:px-8 py-6">
              <ModalContent />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
