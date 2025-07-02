"use client"

import { Globe, Mail, Twitter, Linkedin, Github, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">EDU-LLM Teacher</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Building India's first educational AI model by teachers, for teachers. Empowering classrooms with AI that
              understands Indian pedagogy and languages.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#why" className="hover:text-orange-500 transition-colors">
                  Why This Matters
                </a>
              </li>
              <li>
                <a href="#tiers" className="hover:text-orange-500 transition-colors">
                  Contributor Tiers
                </a>
              </li>
              <li>
                <a href="#contributor-form" className="hover:text-orange-500 transition-colors">
                  Join Now
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <Globe className="w-4 h-4" />
              <span className="text-sm">Available in 22+ Indian Languages</span>
            </div>

            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} EDU-LLM Teacher. Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>in India 🇮🇳</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
