"use client"
import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
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
  User,
  Phone,
  MapPin,
  GraduationCap,
} from "lucide-react"

export default function ContributorGuide() {
  const [currentStep, setCurrentStep] = useState(0)
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null)
  const [showJoinForm, setShowJoinForm] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    description: "",
    institute: "",
    subjects: "",
    contentContribution: "",
    contentTypes: [] as string[],
    languages: [] as string[],
    aiTesting: "",
    aiExcitement: "",
    additionalInfo: "",
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const errors: Record<string, string> = {}
    if (!formData.fullName.trim()) errors.fullName = "Full name is required"
    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address"
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required"
    } else if (!/^[+]?[\d\s-()]{10,}$/.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number"
    }
    if (!formData.location.trim()) errors.location = "Location is required"
    if (!formData.description) errors.description = "Please select what describes you"
    if (!formData.subjects.trim()) errors.subjects = "Please specify your subjects/classes"
    if (!formData.contentContribution) errors.contentContribution = "Please select your content contribution preference"
    if (formData.contentTypes.length === 0) errors.contentTypes = "Please select at least one content type"
    if (formData.languages.length === 0) errors.languages = "Please select at least one language"
    if (!formData.aiTesting) errors.aiTesting = "Please select your AI testing preference"
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Form submitted:", formData)
      alert("Thank you for joining! We'll be in touch soon.")
      setShowJoinForm(false)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        description: "",
        institute: "",
        subjects: "",
        contentContribution: "",
        contentTypes: [],
        languages: [],
        aiTesting: "",
        aiExcitement: "",
        additionalInfo: "",
      })
    }
  }

  const handleCheckboxChange = (field: "contentTypes" | "languages", value: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: checked ? [...prev[field], value] : prev[field].filter((item) => item !== value),
    }))
  }

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
        title: "Your Data is Safe",
        icon: Shield,
        content: {
          description:
            "We collect minimal personal information (name, email, teaching role) only to personalize your contributor experience and maintain effective communication.",
          commitment:
            "Your personal data will never be sold, shared with third parties, or used commercially without your explicit consent. We maintain strict security protocols and comply with all privacy regulations.",
          termsAndConditions: {
            title: "Terms & Conditions",
            sections: [
              {
                title: "1. Purpose of the Program",
                content:
                  "The Program allows educators, researchers, and education professionals to contribute educational material that may be used to train and improve Bharat-EDU-LLM, India's first teacher-led education language model.",
              },
              {
                title: "2. Eligibility",
                content:
                  "To join the Program, you must: Be 18 years or older, Be an educator, tutor, or edtech professional, Provide accurate information during signup.",
              },
              {
                title: "3. Content Contribution",
                content:
                  "By submitting educational content (notes, slides, quizzes, lesson plans, translations, feedback, etc.), you: Grant Bharat-EDU-LLM a non-exclusive, royalty-free, worldwide license to use, modify, adapt, and reproduce your content for educational and model training purposes. Retain ownership and authorship of your original work. Agree that your name and affiliation may be displayed as a contributor (only if you've provided consent).",
              },
              {
                title: "4. Content Guidelines",
                content:
                  "You agree to: Submit original or educationally licensed material only. Avoid plagiarized, AI-generated (without modification), harmful, or promotional content. Follow contribution formats and quality standards as outlined in the Contributor Guidelines.",
              },
              {
                title: "5. Community Code of Conduct",
                content:
                  "All contributors must: Maintain respectful, inclusive behavior in communication channels (WhatsApp, Telegram, webinars). Avoid spam, hate speech, or any form of harassment. Support and uplift fellow educators. Violations may lead to removal from the Program.",
              },
              {
                title: "6. Changes to Level Status or Rewards",
                content:
                  "Your contributor level, badges, and perks are subject to change based on your activity level, contribution quality, and adherence to community rules. We reserve the right to update the program's structure at any time.",
              },
              {
                title: "7. Opt-Out and Content Removal",
                content:
                  "You can leave the Program at any time by contacting admin@collegites.tech. On request, we will: Remove your name and profile from public contributor listings. Retain rights to use already contributed content for training purposes (to maintain model continuity).",
              },
              {
                title: "8. Limitation of Liability",
                content:
                  "We do not guarantee specific results, rewards, or uses of your contribution. The Program is offered on a voluntary basis. You are responsible for ensuring that your contributions comply with your institution's or employer's policies.",
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

  const Card3D = ({ item, onClick }: any) => (
    <Card
      className={`bg-white/80 animate-metallic-gradient border-0 shadow-xl rounded-3xl overflow-hidden ${onClick ? "cursor-pointer hover:scale-105 hover:shadow-2xl" : ""} transition-all duration-300`}
      onClick={onClick}
    >
      <CardHeader className={`bg-gradient-to-r ${item.color} text-white p-6 sm:p-8 text-center`}>
        {item.icon && <item.icon className="h-12 w-12 mx-auto mb-3 sm:h-16 sm:w-16 sm:mb-4" />}
        {item.step && (
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">
            {item.step}
          </div>
        )}
        <CardTitle className="text-lg sm:text-xl">{item.title}</CardTitle>
        {item.subtitle && <CardDescription className="text-orange-100">{item.subtitle}</CardDescription>}
      </CardHeader>
      <CardContent className={`p-6 sm:p-8 ${onClick ? "text-center" : ""}`}>
        {item.content ? (
          item.content.map((text: string, j: number) => (
            <p key={j} className="text-gray-700 leading-relaxed mb-4">
              {text}
            </p>
          ))
        ) : (
          <>
            <p className="text-gray-700 font-medium mb-4">{item.desc}</p>
            {item.time && (
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-4">
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
              {item.buttonText || "Get Help"}
            </Link>
          </Button>
        )}
        {item.isJoinButton && (
          <Button
            onClick={() => setShowJoinForm(true)}
            className="bg-orange-600 hover:bg-orange-700 text-white rounded-full mt-4"
          >
            Join Us
          </Button>
        )}
      </CardContent>
    </Card>
  )

  const renderSection = (stepIndex: number) => {
    switch (stepIndex) {
      case 0:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {data.welcome.map((card, i) => (
              <Card3D key={i} item={card} />
            ))}
          </div>
        )
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.getStarted.map((step, i) => (
              <Card3D key={i} item={step} />
            ))}
          </div>
        )
      case 2:
        return (
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
                      className="p-4 bg-white animate-metallic-gradient rounded-2xl hover:bg-orange-100 hover:scale-105 hover:shadow-lg transition-all duration-300 text-center"
                    >
                      <topic.icon className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                      <h3 className="font-semibold text-gray-800 text-sm">{topic.title}</h3>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )
      case 3:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.contact.map((option, i) => (
              <Card3D key={i} item={option} />
            ))}
          </div>
        )
      default:
        return null
    }
  }

  const ModalContent = () => {
    if (activeModal === "contribute") {
      return (
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <div className="space-y-4">
              {data.contributions.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 animate-metallic-gradient rounded-2xl border border-orange-200 hover:scale-[1.01] hover:shadow-md transition-all duration-300"
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
            <p className="text-gray-700 text-base leading-relaxed">{topic.content.description}</p>
            <Card className="animate-metallic-gradient border border-orange-200 rounded-2xl hover:scale-[1.01] hover:shadow-md transition-all duration-300">
              <CardContent className="p-4">
                <h4 className="font-bold text-orange-800 mb-2">Our Privacy Commitment:</h4>
                <p className="text-sm text-gray-700">{topic.content.commitment}</p>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 border-b border-orange-200 pb-2">
              {topic.content.termsAndConditions.title}
            </h3>
            <div className="space-y-4">
              {topic.content.termsAndConditions.sections.map((section, i) => (
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
              {topic.content.termsAndConditions.dataUsePolicy.title}
            </h3>
            <div className="space-y-4">
              {topic.content.termsAndConditions.dataUsePolicy.sections.map((section, i) => (
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
                {topic.content.termsAndConditions.jurisdiction.title}
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                {topic.content.termsAndConditions.jurisdiction.content}
              </p>
            </CardContent>
          </Card>
          <Card className="animate-metallic-gradient border border-orange-100 rounded-xl hover:scale-[1.01] hover:shadow-md transition-all duration-300">
            <CardContent className="p-4">
              <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                {topic.content.termsAndConditions.grievanceOfficer.title}
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed">
                {topic.content.termsAndConditions.grievanceOfficer.content}
              </p>
            </CardContent>
          </Card>
        </div>
      )
    }

    if (activeModal === "content-usage") {
      return (
        <div className="space-y-4">
          {topic.content.points?.map((point, i) => (
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
          <p className="text-gray-700">{topic.content.description}</p>
          <Card className="animate-metallic-gradient border border-green-200 rounded-2xl hover:scale-[1.01] hover:shadow-md transition-all duration-300">
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
        {/* Header */}
        <div className="bg-orange-50/70 backdrop-blur-md border-b border-orange-200/50 px-4 md:px-8 py-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Bharat-EDU-LLM</h1>
              <p className="text-gray-600 text-base md:text-lg">Contributor Guide</p>
            </div>
            <Button
              onClick={() => setShowJoinForm(true)}
              className="bg-orange-600 text-white hover:bg-orange-700 font-semibold px-6 py-3 rounded-full shadow-lg"
            >
              Join Us <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex">
          {/* Desktop Sidebar */}
          <div className="hidden lg:flex w-24 bg-orange-50/70 backdrop-blur-md border-r border-orange-200/50 flex-col items-center py-8 space-y-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <BookOpen className="h-6 w-6 text-orange-600" />
            </div>
            <div className="flex flex-col space-y-4">
              {data.steps.map((step, i) => (
                <div key={step.id} className="flex flex-col items-center">
                  <button
                    onClick={() => setCurrentStep(i)}
                    className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 font-bold text-lg ${
                      i === currentStep
                        ? step.color + " text-white shadow-xl"
                        : i < currentStep
                          ? "bg-white text-orange-600 border-2 border-orange-300 shadow-md"
                          : "bg-white/50 text-orange-600 hover:bg-white/70"
                    }`}
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

          {/* Main Content */}
          <div className="flex-1">
            {/* Desktop Step View */}
            <div className="hidden lg:block px-8 py-8 animate-metallic-gradient">
              <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-1">{data.steps[currentStep].title}</h2>
                  <p className="text-gray-600 text-lg">{data.steps[currentStep].subtitle}</p>
                </div>
                <div className="min-h-[500px]">{renderSection(currentStep)}</div>
              </div>
            </div>

            {/* Mobile Scrollable View */}
            <div className="lg:hidden px-4 py-8 animate-metallic-gradient space-y-16">
              <div className="max-w-6xl mx-auto">
                {data.steps.map((step, i) => (
                  <div key={step.id} className="mb-16">
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-gray-800 mb-1">{step.title}</h2>
                      <p className="text-gray-600">{step.subtitle}</p>
                    </div>
                    {renderSection(i)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Join Form Modal */}
      {showJoinForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <Card className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 text-center relative">
              <button
                onClick={() => setShowJoinForm(false)}
                className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold mb-2">
                Join the Founding Educators Circle for India's First AI Teacher - BHARAT-EDU LLM
              </CardTitle>
              <CardDescription className="text-orange-100 text-lg">
                India's first AI teacher — Built with India's best teachers
              </CardDescription>
              <p className="text-orange-100 mt-2 text-left max-w-2xl mx-auto">
                We're building an AI model designed specifically for education — not a chatbot, but an assistant that
                understands subjects, boards, languages, and how teachers really teach.
                <br />
                <br />
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <User className="h-4 w-4 text-orange-500" />
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      placeholder="Type here"
                      value={formData.fullName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                      className={`border-2 rounded-xl ${formErrors.fullName ? "border-red-500" : "border-gray-300"}`}
                    />
                    {formErrors.fullName && <p className="text-red-500 text-xs">{formErrors.fullName}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Mail className="h-4 w-4 text-orange-500" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Type here"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className={`border-2 rounded-xl ${formErrors.email ? "border-red-500" : "border-gray-300"}`}
                    />
                    <p className="text-xs text-gray-500">We will contact you for further interactions through email</p>
                    {formErrors.email && <p className="text-red-500 text-xs">{formErrors.email}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Phone className="h-4 w-4 text-orange-500" />
                      Phone / WhatsApp *
                    </Label>
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      className={`border-2 rounded-xl ${formErrors.phone ? "border-red-500" : "border-gray-300"}`}
                    />
                    {formErrors.phone && <p className="text-red-500 text-xs">{formErrors.phone}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-orange-500" />
                      Location / City *
                    </Label>
                    <Input
                      id="location"
                      placeholder="Type here"
                      value={formData.location}
                      onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                      className={`border-2 rounded-xl ${formErrors.location ? "border-red-500" : "border-gray-300"}`}
                    />
                    {formErrors.location && <p className="text-red-500 text-xs">{formErrors.location}</p>}
                  </div>
                </div>
                {/* Description */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-gray-700">Which of these best describes you? *</Label>
                  <RadioGroup
                    value={formData.description}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, description: value }))}
                    className="space-y-2"
                  >
                    {[
                      "School teacher",
                      "Private tutor / coaching center",
                      "Content creator (YouTube, Insta, etc.)",
                      "EdTech founder or team member",
                      "Other",
                    ].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className="text-sm">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  {formErrors.description && <p className="text-red-500 text-xs">{formErrors.description}</p>}
                </div>
                {/* Institute */}
                <div className="space-y-2">
                  <Label htmlFor="institute" className="text-sm font-medium text-gray-700">
                    Associated Institute
                  </Label>
                  <Input
                    id="institute"
                    placeholder="Your answer"
                    value={formData.institute}
                    onChange={(e) => setFormData((prev) => ({ ...prev, institute: e.target.value }))}
                    className="border-2 rounded-xl border-gray-300"
                  />
                </div>
                {/* Subjects */}
                <div className="space-y-2">
                  <Label htmlFor="subjects" className="text-sm font-medium text-gray-700">
                    What subjects or classes do you focus on? Example: Class 10 Science, CBSE History, NEET prep, etc. *
                  </Label>
                  <Input
                    id="subjects"
                    placeholder="Your answer"
                    value={formData.subjects}
                    onChange={(e) => setFormData((prev) => ({ ...prev, subjects: e.target.value }))}
                    className={`border-2 rounded-xl ${formErrors.subjects ? "border-red-500" : "border-gray-300"}`}
                  />
                  {formErrors.subjects && <p className="text-red-500 text-xs">{formErrors.subjects}</p>}
                </div>
                {/* Content Contribution */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-gray-700">
                    Would you be open to contributing content (like slides, quizzes, notes)? *
                  </Label>
                  <RadioGroup
                    value={formData.contentContribution}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, contentContribution: value }))}
                    className="space-y-2"
                  >
                    {["Yes - original work", "Yes - adapted / curated", "Maybe"].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`content-${option}`} />
                        <Label htmlFor={`content-${option}`} className="text-sm">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  {formErrors.contentContribution && (
                    <p className="text-red-500 text-xs">{formErrors.contentContribution}</p>
                  )}
                </div>
                {/* Content Types */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-gray-700">
                    What kind of content do you currently create or use? *
                  </Label>
                  <div className="space-y-2">
                    {["Slides / Notes", "MCQs / Quizzes", "Video lectures", "Worksheets", "Other"].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <Checkbox
                          id={`type-${option}`}
                          checked={formData.contentTypes.includes(option)}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange("contentTypes", option, checked as boolean)
                          }
                        />
                        <Label htmlFor={`type-${option}`} className="text-sm">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {formErrors.contentTypes && <p className="text-red-500 text-xs">{formErrors.contentTypes}</p>}
                </div>
                {/* Languages */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-gray-700">
                    What languages do you teach or create in? *
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {["English", "Hindi", "Tamil", "Bengali", "Telugu", "Marathi", "Other"].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <Checkbox
                          id={`lang-${option}`}
                          checked={formData.languages.includes(option)}
                          onCheckedChange={(checked) => handleCheckboxChange("languages", option, checked as boolean)}
                        />
                        <Label htmlFor={`lang-${option}`} className="text-sm">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </div>
                  {formErrors.languages && <p className="text-red-500 text-xs">{formErrors.languages}</p>}
                </div>
                {/* AI Testing */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-gray-700">
                    Would you be open to testing AI tools and giving feedback? *
                  </Label>
                  <RadioGroup
                    value={formData.aiTesting}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, aiTesting: value }))}
                    className="space-y-2"
                  >
                    {["Yes", "No"].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`ai-${option}`} />
                        <Label htmlFor={`ai-${option}`} className="text-sm">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                  {formErrors.aiTesting && <p className="text-red-500 text-xs">{formErrors.aiTesting}</p>}
                </div>
                {/* AI Excitement */}
                <div className="space-y-2">
                  <Label htmlFor="aiExcitement" className="text-sm font-medium text-gray-700">
                    What excites you about AI in education? (Optional — helps you spot potential
                    evangelists/collaborators)
                  </Label>
                  <Textarea
                    id="aiExcitement"
                    placeholder="Your answer"
                    value={formData.aiExcitement}
                    onChange={(e) => setFormData((prev) => ({ ...prev, aiExcitement: e.target.value }))}
                    className="border-2 rounded-xl border-gray-300 min-h-[100px]"
                  />
                </div>
                {/* Additional Info */}
                <div className="space-y-2">
                  <Label htmlFor="additionalInfo" className="text-sm font-medium text-gray-700">
                    Anything else you'd like to share? (Optional paragraph)
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    placeholder="Your answer"
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData((prev) => ({ ...prev, additionalInfo: e.target.value }))}
                    className="border-2 rounded-xl border-gray-300 min-h-[100px]"
                  />
                </div>
                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <Button
                    type="submit"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold"
                  >
                    Join Us
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Other Modals */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <Card className="bg-white max-w-5xl w-full max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl animate-metallic-gradient">
            <CardHeader className="flex flex-row items-center justify-between p-6 border-b">
              <CardTitle className="text-xl md:text-2xl text-gray-800">
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
