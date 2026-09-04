import { Heart, Lock, Users, Wallet, Clock } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: '"Si Wewe Peke Yako"',
    subtitle: "Real talk, not textbook talk",
    description:
      "Our therapists understand what it means to be the firstborn carrying the family, the job hunt that's dragged on for two years, the \"umeshapata mtu?\" questions at every family function, or the pressure of being the one who \"made it\" and can't afford to fall apart. You won't have to explain the culture before you can explain the problem.",
  },
  {
    icon: Lock,
    title: "Confidential, Full Stop",
    description:
      "No one at your church, your estate, or your workplace will know you're here unless you tell them. Every session is encrypted and handled in line with the Kenya Data Protection Act, 2019 — not a foreign standard borrowed off a template.",
  },
  {
    icon: Users,
    title: "Licensed Professionals, Vetted Locally",
    description:
      "Every therapist on Lockeroom is a qualified, registered mental health professional — psychologists, counsellors, and psychiatrists who understand the Kenyan context, not imported advice that doesn't fit our reality.",
  },
  {
    icon: Wallet,
    title: '"Pesa Isikubane"',
    subtitle: "Don't let money be the reason you don't get help",
    description:
      "Sessions billed in KES, paid via M-Pesa, with transparent pricing and no hidden charges. We'll also show you where to find free or subsidized care if our fees aren't within reach right now — see Emergency & Free Resources.",
  },
  {
    icon: Clock,
    title: "Flexible, Fits Your Hustle",
    description:
      "Early morning before work, during lunch break, late evening after the matatu ride home, or weekends — book a slot that works around your schedule, not the other way round.",
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose Lockeroom Wellness
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            We're committed to making mental health support accessible, affordable, and effective for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{service.title}</h3>
                {service.subtitle && <p className="text-sm text-primary font-medium mb-3">{service.subtitle}</p>}
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
