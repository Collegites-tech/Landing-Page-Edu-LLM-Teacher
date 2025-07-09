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
} from "lucide-react"

export default function ContributorGuide() {
  const [currentStep, setCurrentStep] = useState(0)
  const [activeModal, setActiveModal] = useState<string | null>(null)

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
      {
        type: "Notes",
        format: "PDF, DOC (Typed or Scanned)",
        icon: FileText,
        points: "20-25",
        description: "Share your teaching notes and classroom materials to help AI understand Indian teaching methods.",
      },
      {
        type: "Lesson Plans",
        format: "DOCX, PDF (with learning objectives)",
        icon: BookOpen,
        points: "40",
        description:
          "Upload structured lesson plans with objectives and teaching strategies for maximum AI training value.",
      },
      {
        type: "Slide Decks",
        format: "PPT, Google Slides",
        icon: FileText,
        points: "20-25",
        description:
          "Contribute presentation slides to help AI learn visual teaching and content presentation methods.",
      },
      {
        type: "MCQ Quizzes",
        format: "DOC, Form, Excel",
        icon: MessageSquare,
        points: "20",
        description: "Share quiz questions and assessments to train AI in student evaluation and testing methods.",
      },
      {
        type: "Translations",
        format: "English + Hindi/Regional languages",
        icon: Globe,
        points: "40",
        description: "Provide multilingual educational content to make AI accessible across Indian languages.",
      },
      {
        type: "Feedback",
        format: "Suggestions and corrections",
        icon: MessageSquare,
        points: "15",
        description: "Offer expert insights and improvements to continuously enhance AI quality and accuracy.",
      },
    ],
    tiers: [
      {
        name: "Early Partner",
        badge: "🥉",
        perks: "Badge + Certificate + Tool Access",
        color: "bg-amber-50 text-amber-700 border-amber-200",
        description: "Join as an Early Partner and get exclusive access to contributor tools and resources.",
      },
      {
        name: "Core Contributor",
        badge: "🥈",
        perks: "Public Recognition + Beta Access",
        color: "bg-gray-50 text-gray-700 border-gray-200",
        description: "Advance through consistent contributions and enjoy public recognition with early feature access.",
      },
      {
        name: "Co-Creator",
        badge: "🥇",
        perks: "Featured Profile + Collaboration Invites",
        color: "bg-yellow-50 text-yellow-700 border-yellow-200",
        description: "Reach the highest tier with featured recognition and exclusive collaboration opportunities.",
      },
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
        link: "mailto:support@collegites.tech",
      },
      {
        icon: Users,
        title: "Join Community",
        desc: "WhatsApp Community",
        color: "from-orange-500 to-orange-600",
        link: "https://forms.gle/jSydHxxUx7TaAaYAA",
      },
      {
        icon: Globe,
        title: "Visit Website",
        desc: "collegites.tech",
        color: "from-orange-600 to-orange-700",
        link: "https://collegites.tech/",
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
      className={`bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden ${onClick ? "cursor-pointer" : ""} hover:scale-105 transition-all duration-300`}
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
          item.content.map((text: string, i: number) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4">
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
        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.contact.map((option, i) => (
          <Card3D key={i} item={option} i={i} />
        ))}
      </div>,
    ][currentStep]

  const ModalContent = () => {
    if (activeModal === "contribute")
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.contributions.map((item, i) => (
            <Card key={i} className="border border-gray-200 rounded-2xl">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <item.icon className="h-6 w-6 text-orange-600" />
                  <CardTitle className="text-lg">{item.type}</CardTitle>
                </div>
                <p className="text-sm text-orange-600 font-medium">{item.format}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 text-sm">{item.description}</p>
                <Badge className="bg-orange-600 text-white">{item.points} points</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      )
    if (activeModal === "rewards")
      return (
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contributor Tiers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.tiers.map((tier, i) => (
                <Card key={i} className="text-center border border-gray-200 rounded-2xl">
                  <CardHeader>
                    <div className="text-4xl mb-2">{tier.badge}</div>
                    <CardTitle className="text-lg">{tier.name}</CardTitle>
                    <Badge className={tier.color}>Tier {i + 1}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">{tier.perks}</p>
                    <p className="text-xs text-gray-500">{tier.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Points System</h3>
            <div className="space-y-3">
              {data.points.map((item, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.action}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <Badge className="bg-orange-600 text-white font-bold">{item.points} pts</Badge>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            <Card className="bg-red-50 border border-red-200 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg text-red-800">Misconduct Consequences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-yellow-100 border border-yellow-300 rounded-xl">
                  <h5 className="font-semibold text-yellow-800 text-sm mb-1">First Warning</h5>
                  <p className="text-xs text-yellow-700">{topic.content.consequences?.firstWarning}</p>
                </div>
                <div className="p-3 bg-red-100 border border-red-300 rounded-xl">
                  <h5 className="font-semibold text-red-800 text-sm mb-1">Repeated Misconduct</h5>
                  <ul className="text-xs text-red-700 space-y-1">
                    {topic.content.consequences?.repeatedMisconduct?.map((consequence, i) => (
                      <li key={i}>• {consequence}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-orange-300 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[
          { t: "20", l: "10", s: "32", o: "40" },
          { t: "40", r: "20", s: "24", o: "50" },
          { b: "20", l: "20", s: "40", o: "30" },
          { b: "40", r: "10", s: "28", o: "40" },
          { t: "1/2", l: "1/3", s: "20", o: "35" },
        ].map((c, i) => (
          <div
            key={i}
            className={`absolute ${c.t ? `top-${c.t}` : c.b ? `bottom-${c.b}` : ""} ${c.l ? `left-${c.l}` : c.r ? `right-${c.r}` : ""} w-${c.s} h-${c.s} ${i % 2 === 0 ? "bg-white/30" : "bg-orange-200"} rounded-full opacity-${c.o}`}
          />
        ))}
      </div>

      <div className="relative z-10 flex">
        <div className="w-20 lg:w-24 bg-white/20 backdrop-blur-md border-r border-white/30 flex flex-col items-center py-8 space-y-6">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <BookOpen className="h-6 w-6 text-orange-600" />
          </div>
          <div className="flex flex-col space-y-4">
            {data.steps.map((step, i) => (
              <div key={step.id} className="flex flex-col items-center">
                <button
                  onClick={() => setCurrentStep(i)}
                  className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 font-bold text-lg ${i === currentStep ? step.color + " text-white shadow-xl" : i < currentStep ? "bg-white text-orange-600 border-2 border-orange-300 shadow-md" : "bg-white/30 text-white hover:bg-white/40"}`}
                >
                  {i < currentStep ? <CheckCircle className="w-6 h-6" /> : <span>{i + 1}</span>}
                  {i === currentStep && (
                    <div className="absolute -inset-1 rounded-full border-2 border-white/50 animate-pulse" />
                  )}
                </button>
                {i < data.steps.length - 1 && (
                  <div
                    className={`w-0.5 h-8 mt-2 transition-all duration-300 ${i < currentStep ? "bg-white/60" : "bg-white/30"}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-white/20 backdrop-blur-md border-b border-white/30 px-8 py-6">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">Bharat-EDU-LLM</h1>
                <p className="text-white/90 text-lg">Contributor Guide</p>
              </div>
              <Button
                asChild
                className="bg-white text-orange-600 hover:bg-white/90 font-semibold px-6 py-3 rounded-full shadow-lg"
              >
                <Link href="https://forms.gle/jSydHxxUx7TaAaYAA" target="_blank" rel="noopener noreferrer">
                  Join Now <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="px-8 py-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-1">{data.steps[currentStep].title}</h2>
                <p className="text-white/90 text-lg">{data.steps[currentStep].subtitle}</p>
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
          <Card className="bg-white max-w-4xl w-full max-h-[80vh] overflow-y-auto rounded-3xl shadow-2xl">
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
