"use client"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { X, User, Mail, Phone, MapPin, GraduationCap } from "lucide-react"

interface JoinFormModalProps {
  showModal: boolean
  onClose: () => void
}

export function JoinFormModal({ showModal, onClose }: JoinFormModalProps) {
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
      onClose() // Close modal on successful submission
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

  if (!showModal) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <Card className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-8 text-center relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors">
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
                      onCheckedChange={(checked) => handleCheckboxChange("contentTypes", option, checked as boolean)}
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
              <Label className="text-sm font-medium text-gray-700">What languages do you teach or create in? *</Label>
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
                What excites you about AI in education? (Optional — helps you spot potential evangelists/collaborators)
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
  )
}
