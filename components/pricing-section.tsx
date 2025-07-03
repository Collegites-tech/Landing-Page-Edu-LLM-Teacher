import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Zap } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for individual educators getting started",
    features: [
      "Up to 30 students",
      "Basic AI tutoring",
      "5 lesson plans per month",
      "Email support",
      "Basic analytics",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    description: "Ideal for classrooms and small schools",
    features: [
      "Up to 150 students",
      "Advanced AI tutoring",
      "Unlimited lesson plans",
      "Automated grading",
      "Advanced analytics",
      "Priority support",
      "Parent communication tools",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large institutions and districts",
    features: [
      "Unlimited students",
      "Custom AI models",
      "API access",
      "Advanced integrations",
      "Dedicated support",
      "Custom training",
      "SLA guarantee",
      "On-premise deployment",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600">Choose the plan that fits your educational needs and budget</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-0 shadow-lg ${plan.popular ? "ring-2 ring-emerald-500" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-1 text-sm font-medium text-white">
                    <Zap className="h-3 w-3" />
                    Most Popular
                  </div>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? "bg-emerald-600 hover:bg-emerald-700" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">All plans include a 14-day free trial. No credit card required.</p>
        </div>
      </div>
    </section>
  )
}
