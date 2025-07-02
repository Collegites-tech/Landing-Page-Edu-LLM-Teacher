import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EDU-LLM Teacher - India's First Educational AI",
  description:
    "Join India's first EDU-LLM Teacher. Built by teachers, for classrooms, in every language. Help shape the future of Indian education with AI.",
  keywords: "education, AI, LLM, India, teachers, Hindi, regional languages, classroom, pedagogy",
  authors: [{ name: "EDU-LLM Team" }],
  openGraph: {
    title: "EDU-LLM Teacher - India's First Educational AI",
    description: "Join India's first EDU-LLM Teacher. Built by teachers, for classrooms, in every language.",
    type: "website",
    locale: "en_IN",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
