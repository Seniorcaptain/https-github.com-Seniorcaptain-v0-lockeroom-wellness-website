import { Heart, Lock, Users, Clock } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Work with licensed therapists who understand your unique needs and provide personalized support.",
  },
  {
    icon: Lock,
    title: "Complete Confidentiality",
    description: "Your privacy is our priority. All sessions are encrypted and protected by HIPAA compliance.",
  },
  {
    icon: Users,
    title: "Diverse Professionals",
    description: "Choose from hundreds of licensed therapists specializing in various areas of mental health.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Book sessions at times that work for you, with availability 24/7 across all time zones.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
