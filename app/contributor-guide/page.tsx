"use client"
import { useState, useEffect, useRef, useCallback } from "react"
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
  const [isScrollingProgrammatically, setIsScrollingProgrammatically] = useState(false)

  // Refs for each section to observe their visibility
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  const data = {
    steps: [
      {
        id: "welcome",
        title: "Welcome",
        subtitle: "What is Bharat-EDU-LLM?",
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
        title: "Your Data Is Safe",
        subtitle: "T&C & Data policy",
        icon: Shield,
        content: {
          description: "",
          commitment:
            "Your personal data will never be sold, shared with third parties, or used commercially without your explicit consent. We maintain strict security protocols and comply with all privacy regulations.  By joining the Bharat-EDU-LLM Contributor Program, you agree to how we collect and use your shared data to support the development of India's first educator-led AI.",
          termsAndConditions: {
            title: "Terms & Conditions",
            sections: [
              {
                title: "1. What We Collect",
                content:
                  "We collect basic personal and professional details (like your name, email, subject expertise, and content submissions). Optional data like photos or social media handles may be included if you choose.",
              },
              {
                title: "2. Why We Use Your Data",
                content:
                  " Your data helps us manage your contributor role, track participation, assign tier levels, and enhance the model's understanding of Indian education. Submitted content is used to train and refine the AI.",
              },
              {
                title: "3. Content Ownership & Use",
                content:
                  "You retain ownership of your content, but by submitting it, you grant us a non-exclusive, royalty-free license to use it for research and training purposes—even if you leave the program. Public recognition is only shown with your consent.",
              },
              {
                title: "4. Data Security",
                content:
                  " All data is securely stored and accessible only to authorized team members. We follow strong security protocols but cannot guarantee absolute safety, as with any online service.",
              },
              {
                title: "5. Third-Party Tools",
                content:
                  " We use tools like Google Forms, WhatsApp, and internal platforms to manage contributions and communication. These tools are used strictly for educational purposes not advertising.",
              },
              {
                title: "6. Data Sharing",
                content:
                  "We do not sell or share your private data. Public display (like your name or institution) is only done with your permission and never includes sensitive contact info.",
              },
              {
                title: "7. Your Rights",
                content:
                  " You can access, update, or withdraw your data at any time. If you leave the program, we'll remove your public profile, but your submitted content may still be used under the license granted.",
              },
              {
                title: "8. Policy Updates",
                content:
                  " We may revise this policy over time and will inform you of major changes. Continued participation means acceptance of updated terms.",
              },
              {
                title: "9. Jurisdiction",
                content:
                  " This Privacy Policy shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with this Privacy Policy shall be subject to the exclusive jurisdiction of the courts in Bhopal, Madhya Pradesh.",
              },
            ],
            dataUsePolicy: {
              title: "Data Use Policy",
              sections: [
                {
                  title: "1. What Data We Collect",
                  content:
                    "We collect: Your Name, Email, Phone number, Role (e.g., teacher, creator), Affiliation, Subjects taught, Content uploaded, Optional: Profile photo, social handles (for recognition), Feedback and contribution activity (to improve the model).",
                },
                {
                  title: "2. How We Use Your Data",
                  content:
                    "Your data is used to: Personalize your contributor experience, Assign contributor levels and track points, Recognize you (if you've opted-in), Improve Bharat-EDU-LLM through contributed content and feedback, Communicate updates and opportunities with you.",
                },
                {
                  title: "3. Content Usage",
                  content:
                    "Any educational material you contribute may be: Used to train Bharat-EDU-LLM and improve its outputs, Analyzed for quality, structure, and educational alignment, Used in anonymized or attributed form (with your permission) in public-facing materials.",
                },
                {
                  title: "4. Storage and Security",
                  content:
                    "Store your data on secure servers with encryption, Limit access to authorized personnel only, Never sell or rent your data to third parties.",
                },
                {
                  title: "5. Your Rights",
                  content:
                    "You may: Request to see what data we have, Ask for your profile to be updated or deleted, Withdraw consent for public recognition or email communication. Email us at: admin@collegites.tech for any such request.",
                },
              ],
            },
            jurisdiction: {
              title: "Jurisdiction",
              content:
                "This Privacy Policy shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with this Privacy Policy shall be subject to the exclusive jurisdiction of the courts in Bhopal, Madhya Pradesh.",
            },
            grievanceOfficer: {
              title: "Grievance Officer",
              content:
                "LOGICSYNER INNOVATIONS BHOPAL - Sagar Saini. Address: Logicsyner Innovations Private Limited, 348/349 Bhanwar Nagar, Nabibagh, Bhopal, Madhya Pradesh, PIN:462038. Contact: Phone: +91 97527 04505 | Time: Monday - Friday (9:00 - 18:00)",
            },
          },
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
        desc: "Click the 'Join Us' Button to Get Started",
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
        buttonText: "Join Us",
        isJoinButton: true,
      },
    ],
    welcome: [
      {
        id: "welcome-what-is",
        icon: Lightbulb,
        title: "What is Bharat-EDU-LLM?",
        color: "from-orange-400 to-orange-500",
        content: [
          "Bharat-EDU-LLM is India's first multilingual AI model created specially for education and it's being built in collaboration with and for educators across the country,. Instead of relying on generic internet content, this AI learns directly from real classroom materials like lesson plans, notes, quizzes, and slides shared by Indian educators.",
          "What makes it different from regular AI tools is that it understands how Indian teachers actually teach. It picks up on the different teaching styles, the languages spoken in classrooms, and the unique ways students learn across the country whether it's explaining core concepts in Hindi, summarizing notes in Tamil, or adapting a teaching style familiar to rural classrooms, Bharat-EDU-LLM aims to think, respond, and teach the way an Indian educator would.",
          "At its core, the model is driven by the principle of teacher-led AI development. It does not replace educators it learns from them. It learns from the wisdom and experience of educators to become more helpful for explaining concepts clearly, answering student questions in local languages, or creating teaching materials that work for Indian learners.",
          "Through this initiative, we are not merely building a technical model we are shaping a national educational asset rooted in India's classrooms, languages, and teaching ideas.",
        ],
      },
      {
        id: "welcome-your-role",
        icon: Target,
        title: "Your Role as Contributor",
        color: "from-orange-500 to-orange-600",
        content: [
          "As a contributor, you play a key part in building something truly meaningful an AI that understands how education really works in India. By sharing your own teaching materials, like notes, lesson plans, quizzes, slides, or translations, you're helping train an AI model that learns directly from real educators like you.",
          "Your contributions shape how the AI explains topics, answers questions, and supports students in a way that reflects Indian classrooms, languages, and teaching styles. Whether it's helping a student in a rural school or assisting a teacher in a multilingual setting, your input ensures the AI stays grounded in the realities of Indian education.",
          "Simply put, you're not just uploading content you're helping build a tool that empowers teachers and learners across the country.",
        ],
      },
    ],
  }

  // Updated Card3D component with more compact header
  const Card3D = ({ item, onClick }: any) => {
    const TRUNCATION_LIMIT = 600
    return (
      <Card
        className={`bg-white/80 animate-metallic-gradient border-0 shadow-xl rounded-3xl overflow-hidden ${onClick ? "cursor-pointer hover:scale-105 hover:shadow-2xl" : ""} transition-all duration-300`}
        onClick={onClick}
      >
        <CardHeader className={`bg-gradient-to-r ${item.color} text-white p-4 sm:p-5 text-center`}>
          {item.step && (
            <div className="flex items-center justify-center gap-2 mx-auto">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold">
                {item.step}
              </div>
              <CardTitle className="text-lg sm:text-xl">{item.title}</CardTitle>
            </div>
          )}
          {!item.step && <CardTitle className="text-lg">{item.title}</CardTitle>}
          {!item.step && item.subtitle && (
            <CardDescription className="text-orange-100 text-sm">{item.subtitle}</CardDescription>
          )}
        </CardHeader>
        <CardContent className={`p-5 ${onClick ? "text-center" : ""}`}>
          {item.content ? (
            <>
              <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                {item.content.join(" ").length > TRUNCATION_LIMIT
                  ? `${item.content.join(" ").substring(0, TRUNCATION_LIMIT)}...`
                  : item.content.join(" ")}
              </p>
              {item.content.join(" ").length > TRUNCATION_LIMIT && (
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 hover:text-orange-600 rounded-full px-4 mt-2 text-sm bg-transparent"
                  onClick={() => setActiveModal(item.id)}
                >
                  Learn More
                </Button>
              )}
            </>
          ) : (
            <>
              {item.step && item.subtitle && <p className="text-orange-600 text-sm mb-2">{item.subtitle}</p>}{" "}
              {/* Moved subtitle here for step cards */}
              <p className="text-gray-700 font-medium mb-3 text-sm">{item.desc}</p>
              {item.time && (
                <div className="flex items-center justify-center gap-2 text-xs text-gray-600 mb-3">
                  <Clock className="h-3 w-3" />
                  <span>{item.time}</span>
                </div>
              )}
              {onClick && (
                <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-4 mt-2 text-sm">
                  View Details <ChevronRight className="ml-1 h-3 w-3" />
                </Button>
              )}
            </>
          )}
          {item.link && (
            <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white rounded-full mt-3 text-sm">
              <Link href={item.link} target="_blank">
                {item.buttonText || "Get Help"}
              </Link>
            </Button>
          )}
          {item.isJoinButton && (
            <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white rounded-full mt-3 text-sm">
              <Link href="https://forms.gle/jSydHxxUx7TaAaYAA" target="_blank">
                Join Us
              </Link>
            </Button>
          )}
        </CardContent>
      </Card>
    )
  }

  // This function now returns the content for a specific section, to be rendered multiple times
  const renderSectionContent = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {data.welcome.map((card, i) => (
              <Card3D key={i} item={card} />
            ))}
          </div>
        )
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {data.getStarted.map((step, i) => (
              <Card3D key={i} item={step} />
            ))}
          </div>
        )
      case 2:
        return (
          <div className="space-y-6 lg:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Card3D
                item={{
                  icon: BookOpen,
                  title: "What You Can Contribute",
                  subtitle: "Share your teaching materials",
                  color: "from-orange-400 to-orange-500",
                  desc: "Notes, Lesson Plans, Slides, Quizzes, Translations & More",
                }}
                onClick={() => setActiveModal("contribute")}
              />
              <Card3D
                item={{
                  icon: Trophy,
                  title: "Rewards & Recognition",
                  subtitle: "Earn points and unlock levels",
                  color: "from-orange-500 to-orange-600",
                  desc: "Early Partner, Core Contributor, Co-Creator Levels",
                }}
                onClick={() => setActiveModal("rewards")}
              />
            </div>
            <Card className="bg-white/80 animate-metallic-gradient border-0 shadow-xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-4 lg:p-5 text-center">
                <Shield className="h-10 w-10 lg:h-12 lg:w-12 mx-auto mb-2 lg:mb-3" />
                <CardTitle className="text-lg lg:text-xl">Safety & Community</CardTitle>
                <CardDescription className="text-orange-100 text-sm">
                  Your data is protected and our community maintains high standards
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 lg:p-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
                  {data.safety.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => setActiveModal(topic.id)}
                      className="p-3 bg-white animate-metallic-gradient rounded-2xl hover:bg-orange-100 hover:scale-105 hover:shadow-lg transition-all duration-300 text-center"
                    >
                      <topic.icon className="h-5 w-5 lg:h-6 lg:w-6 text-orange-500 mx-auto mb-2" />
                      <h3 className="font-semibold text-gray-800 text-xs lg:text-sm">{topic.title}</h3>
                      {topic.subtitle && <p className="text-xs text-gray-600">{topic.subtitle}</p>}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )
      case 3:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {data.contact.map((option, i) => (
              <Card3D key={i} item={option} />
            ))}
          </div>
        )
      default:
        return null
    }
  }

  // Change the header height constants
  const headerHeight = 160 // Increased from 120px for desktop
  const mobileHeaderHeight = 140 // Added separate mobile header height

  // Intersection Observer to detect current section in view
  useEffect(() => {
    const headerHeight = 160 // Increased from 120
    const rootMargin = `-${headerHeight}px 0px 0px 0px`
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isScrollingProgrammatically) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1 && index !== currentStep) {
              setCurrentStep(index)
            }
          }
        })
      },
      {
        root: null,
        rootMargin: rootMargin,
        threshold: 0.3, // Reduced threshold for better detection
      },
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref)
        }
      })
      observer.disconnect()
    }
  }, [isScrollingProgrammatically, currentStep])

  // Smooth scroll to the target step
  const handleStepClick = useCallback((stepIndex: number) => {
    if (sectionRefs.current[stepIndex]) {
      setIsScrollingProgrammatically(true)
      const headerHeight = 160 // Increased from 120
      const targetScrollPosition = sectionRefs.current[stepIndex]!.offsetTop - headerHeight
      window.scrollTo({ top: targetScrollPosition, behavior: "smooth" })
      setTimeout(() => {
        setIsScrollingProgrammatically(false)
      }, 1000)
    }
    setCurrentStep(stepIndex)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (window.innerWidth < 1024) return
      let newStep = currentStep
      if (event.key === "ArrowDown" || event.key === " ") {
        newStep = Math.min(currentStep + 1, data.steps.length - 1)
        event.preventDefault()
      } else if (event.key === "ArrowUp") {
        newStep = Math.max(currentStep - 1, 0)
        event.preventDefault()
      }
      if (newStep !== currentStep) {
        handleStepClick(newStep)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentStep, handleStepClick, data.steps.length])

  const ModalContent = () => {
    const welcomeCard = data.welcome.find((card) => card.id === activeModal)
    if (welcomeCard) {
      return (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800">{welcomeCard.title}</h3>
          {welcomeCard.subtitle && <p className="text-orange-600 text-sm">{welcomeCard.subtitle}</p>}
          {welcomeCard.content.map((paragraph: string, i: number) => (
            <p key={i} className="text-gray-700 leading-relaxed text-base">
              {paragraph}
            </p>
          ))}
        </div>
      )
    }

    if (activeModal === "contribute") {
      return (
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <div className="space-y-3">
              {data.contributions.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 lg:p-4 animate-metallic-gradient rounded-xl border border-orange-200 hover:scale-[1.01] hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-800 text-sm lg:text-base truncate">{item.type}</h3>
                      <p className="text-xs lg:text-sm text-orange-600 font-medium truncate">{item.format}</p>
                    </div>
                  </div>
                  <Badge className="bg-orange-600 text-white font-semibold text-xs lg:text-sm px-2 py-1 lg:px-3 lg:py-1 flex-shrink-0 ml-2">
                    {item.points} pts
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )
    }

    if (activeModal === "rewards") {
      return (
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">Contributor Levels</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.tiers.map((tier, i) => (
                <Card
                  key={i}
                  className="text-center border-2 rounded-3xl hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-metallic-gradient"
                >
                  <CardHeader className="pb-4">
                    <div className="text-6xl mb-4">{tier.badge}</div>
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <Badge
                      className={`${tier.color} text-lg px-4 py-2 hover:bg-orange-200 hover:text-orange-900 transition-colors`}
                    >
                      Level {i + 1}
                    </Badge>
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
                    className="w-full p-4 animate-metallic-gradient rounded-2xl border border-orange-300 hover:from-orange-200 hover:to-orange-300 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 text-left"
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
    }

    const topic = data.safety.find((t) => t.id === activeModal)
    if (!topic) return null

    if (activeModal === "data-safety") {
      return (
        <div className="space-y-6 max-h-[70vh] overflow-y-auto">
          <div className="space-y-4">
            <p className="text-gray-700 text-base leading-relaxed">{topic.content?.commitment}</p>
            <Card className="animate-metallic-gradient border border-orange-200 rounded-2xl hover:scale-[1.01] hover:shadow-md transition-all duration-300">
              <CardContent className="p-4">
                <h4 className="font-bold text-orange-800 mb-2">Our Privacy Commitment:</h4>
                <p className="text-sm text-gray-700">{topic.content?.commitment}</p>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 border-b border-orange-200 pb-2">
              {topic.content?.termsAndConditions?.title}
            </h3>
            <div className="space-y-4">
              {topic.content?.termsAndConditions?.sections.map((section, i) => (
                <Card
                  key={i}
                  className="animate-metallic-gradient border border-orange-100 rounded-xl hover:scale-[1.01] hover:shadow-md transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">{section.title}</h4>
                    <p className="text-xs text-gray-700 leading-relaxed">{section.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 border-b border-orange-200 pb-2">
              {topic.content?.termsAndConditions?.dataUsePolicy?.title}
            </h3>
            <div className="space-y-4">
              {topic.content?.termsAndConditions?.dataUsePolicy?.sections.map((section, i) => (
                <Card
                  key={i}
                  className="animate-metallic-gradient border border-orange-100 rounded-xl hover:scale-[1.01] hover:shadow-md transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">{section.title}</h4>
                    <p className="text-xs text-gray-700 leading-relaxed">{section.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <Card className="animate-metallic-gradient border border-orange-100 rounded-xl hover:scale-[1.01] hover:shadow-md transition-all duration-300">
            <CardContent className="p-4">
              <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                {topic.content?.termsAndConditions?.jurisdiction?.title}
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                {topic.content?.termsAndConditions?.jurisdiction?.content}
              </p>
            </CardContent>
          </Card>
          <Card className="animate-metallic-gradient border border-orange-100 rounded-xl hover:scale-[1.01] hover:shadow-md transition-all duration-300">
            <CardContent className="p-4">
              <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                {topic.content?.termsAndConditions?.grievanceOfficer?.title}
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                {topic.content?.termsAndConditions?.grievanceOfficer?.content}
              </p>
            </CardContent>
          </Card>
        </div>
      )
    }

    if (activeModal === "content-usage") {
      return (
        <div className="space-y-4">
          {topic.content?.points?.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 animate-metallic-gradient rounded-2xl hover:scale-[1.01] hover:shadow-md transition-all duration-300"
            >
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">{point.title}</h4>
                <p className="text-gray-700 text-sm">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      )
    }

    if (activeModal === "community-conduct") {
      return (
        <div className="space-y-6">
          <p className="text-gray-700">{topic.content?.description}</p>
          <Card className="animate-metallic-gradient border border-green-200 rounded-2xl hover:scale-[1.01] hover:shadow-md transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-lg text-green-800 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Expected Behavior
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {topic.content?.expectedBehavior?.map((behavior, i) => (
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
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-orange-100 relative overflow-hidden">
      {/* Background decorations */}
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

      <div className="relative z-10">
        <div className="flex">
          {/* Desktop Sidebar */}
          <div className="hidden lg:flex fixed top-0 left-0 z-50 h-screen w-20 xl:w-24 bg-orange-50/70 backdrop-blur-md border-r border-orange-200/50 flex-col items-center py-6 lg:py-8 space-y-4 lg:space-y-6">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-orange-300">
              <BookOpen className="h-5 w-5 lg:h-6 lg:w-6 text-orange-600" />
            </div>
            <div className="flex flex-col space-y-3 lg:space-y-4">
              {data.steps.map((step, i) => (
                <div key={step.id} className="flex flex-col items-center">
                  <button
                    onClick={() => handleStepClick(i)}
                    className={`relative w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 font-bold text-base lg:text-lg ${
                      i === currentStep
                        ? step.color + " text-white shadow-xl" // Active step: solid orange, white text
                        : "bg-white text-orange-600 border-2 border-orange-300 shadow-md" // Inactive steps (both completed and future): white, orange text, orange border
                    }`}
                  >
                    {i < currentStep ? <CheckCircle className="w-5 h-5 lg:w-6 lg:w-6" /> : <span>{i + 1}</span>}
                    {i === currentStep && (
                      // Subtle glow for the active step
                      <div className="absolute -inset-1 rounded-full border-2 border-orange-300/50 animate-pulse" />
                    )}
                  </button>
                  {i < data.steps.length - 1 && (
                    <div
                      className={`w-0.5 h-6 lg:h-8 mt-2 transition-all duration-300 bg-orange-300/60`} // Thinner, consistent orange line
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Area with Fixed Header */}
          <div className="flex-1 lg:ml-20 xl:ml-24">
            {/* Fixed Top Bar - increased height for better visibility */}
            <div className="fixed top-0 z-20 w-full lg:w-[calc(100%-80px)] xl:w-[calc(100%-96px)] lg:left-20 xl:left-24 bg-orange-50/70 backdrop-blur-md border-b border-orange-200/50 px-4 md:px-8 py-0 lg:py-0">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800 mb-1 lg:mb-2">
                    Bharat-EDU-LLM
                  </h1>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">Contributor Guide</p>
                </div>
                <Button
                  asChild
                  className="bg-orange-600 text-white hover:bg-orange-700 font-semibold px-4 lg:px-6 py-2 lg:py-3 rounded-full shadow-lg text-sm lg:text-base"
                >
                  <Link href="https://forms.gle/jSydHxxUx7TaAaYAA" target="_blank">
                    Join Us <ExternalLink className="ml-2 h-3 w-3 lg:h-4 lg:w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Desktop Scrollable View - increased top padding */}
            <div className="hidden lg:block px-6 lg:px-8 py-6 lg:py-8 animate-metallic-gradient pt-[180px]">
              <div className="max-w-6xl mx-auto">
                {data.steps.map((step, i) => (
                  <div
                    key={step.id}
                    ref={(el) => (sectionRefs.current[i] = el)}
                    className="mb-20 min-h-[calc(100vh-180px)] flex flex-col"
                  >
                    {/* Section header with much better spacing */}
                    <div className="mb-10 lg:mb-12 pt-8 lg:pt-12">
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3 lg:mb-4">{step.title}</h2>
                      <p className="text-gray-600 text-lg lg:text-xl">{step.subtitle}</p>
                    </div>
                    {renderSectionContent(i)}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Scrollable View - increased top padding */}
            <div className="lg:hidden px-4 py-6 animate-metallic-gradient space-y-16 pt-[160px]">
              <div className="max-w-6xl mx-auto">
                {data.steps.map((step, i) => (
                  <div key={step.id} className="mb-16">
                    {/* Section header with better spacing for mobile */}
                    <div className="mb-10 pt-8">
                      <h2 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h2>
                      <p className="text-gray-600 text-base">{step.subtitle}</p>
                    </div>
                    {renderSectionContent(i)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal remains the same */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <Card className="bg-white max-w-5xl w-full max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl animate-metallic-gradient">
            <CardHeader className="flex flex-row items-center justify-between p-4 lg:p-6 border-b">
              <CardTitle className="text-lg md:text-xl lg:text-2xl text-gray-800">
                {activeModal === "contribute"
                  ? "What You Can Contribute"
                  : activeModal === "rewards"
                    ? "Rewards & Recognition"
                    : data.safety.find((topic) => topic.id === activeModal)?.title ||
                      data.welcome.find((card) => card.id === activeModal)?.title}
              </CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setActiveModal(null)} className="rounded-full">
                <X className="h-4 w-4 lg:h-5 lg:w-5" />
              </Button>
            </CardHeader>
            <CardContent className="p-4 lg:p-6">
              <ModalContent />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
