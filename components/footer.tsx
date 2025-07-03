import Link from "next/link"
import { GraduationCap, Twitter, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-orange-400" />
              <span className="text-xl font-bold">EDU-LLM Teacher</span>
            </div>
            <p className="text-gray-400 mb-4">
              Building India's first educational AI by teachers, for teachers. Empowering classrooms across Bharat with
              multilingual AI assistance.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-orange-400">For Contributors</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Become a Contributor
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contribution Guidelines
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Community Forum
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Recognition Program
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-orange-400">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Training Materials
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Best Practices
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-orange-400">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@edu-llm.in</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">© 2024 EDU-LLM Teacher. Made with ❤️ in India.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
