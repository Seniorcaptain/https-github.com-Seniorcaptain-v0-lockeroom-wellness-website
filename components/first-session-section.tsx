import { MessageCircle, ShieldCheck, Calendar, Heart } from "lucide-react"

const steps = [
  {
    icon: Calendar,
    title: "You book a time that works",
    description:
      "Choose a therapist, a language you're comfortable in, and a slot that fits your schedule — online or in person.",
  },
  {
    icon: ShieldCheck,
    title: "Everything you share stays private",
    description:
      "Your session is confidential and encrypted, handled in line with the Kenya Data Protection Act, 2019. No one else finds out unless you tell them.",
  },
  {
    icon: MessageCircle,
    title: "You talk, at your own pace",
    description:
      "No pressure to have it all figured out. Your therapist will ask questions to understand what's going on and where you'd like support.",
  },
  {
    icon: Heart,
    title: "You leave with a next step",
    description:
      "Every session ends with something concrete — whether that's a coping strategy, a plan for the next session, or just knowing you don't have to carry it alone.",
  },
]

export default function FirstSessionSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            What to Expect in Your First Session
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Not sure what therapy actually looks like? Here's exactly what happens, step by step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
