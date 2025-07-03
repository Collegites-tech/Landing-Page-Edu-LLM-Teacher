import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
            <Sparkles className="h-4 w-4" />
            Join thousands of educators already using EduAI
          </div>

          <h2 className="text-3xl font-bold text-white md:text-4xl mb-6">Ready to Transform Your Teaching?</h2>

          <p className="text-lg text-emerald-100 mb-8">
            Start your free trial today and experience the power of AI in education. No setup fees, no long-term
            contracts, cancel anytime.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Schedule Demo
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-8 text-sm text-emerald-100">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-300"></div>
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-300"></div>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-300"></div>
              Cancel anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
