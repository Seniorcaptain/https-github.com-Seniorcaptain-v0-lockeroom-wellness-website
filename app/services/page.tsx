import { Brain, Heart, Users, Lightbulb, Zap, Shield } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Brain,
    title: "Individual Therapy",
    description:
      "One-on-one sessions with licensed therapists to address anxiety, depression, trauma, and other mental health concerns.",
    features: ["Personalized treatment plans", "Flexible scheduling", "Multiple therapy modalities"],
  },
  {
    icon: Heart,
    title: "Couples Counseling",
    description:
      "Professional guidance for couples looking to strengthen their relationship and improve communication.",
    features: ["Relationship assessment", "Communication coaching", "Conflict resolution"],
  },
  {
    icon: Users,
    title: "Family Therapy",
    description: "Support for families navigating challenges and working toward healthier dynamics.",
    features: ["Family assessments", "Parenting support", "Intergenerational healing"],
  },
  {
    icon: Lightbulb,
    title: "Coaching & Wellness",
    description: "Goal-oriented sessions focused on personal growth, career development, and life transitions.",
    features: ["Life coaching", "Career counseling", "Wellness planning"],
  },
  {
    icon: Zap,
    title: "Crisis Support",
    description: "Immediate support for individuals experiencing acute mental health crises or emergencies.",
    features: ["24/7 availability", "Rapid response", "Safety planning"],
  },
  {
    icon: Shield,
    title: "Specialized Treatment",
    description: "Targeted therapy for specific conditions including PTSD, OCD, eating disorders, and addiction.",
    features: ["Evidence-based treatments", "Specialized expertise", "Comprehensive care"],
  },
]

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Our Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-balance">
              Comprehensive mental health support tailored to your unique needs and circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting started with Lockeroom Wellness is simple and straightforward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Sign Up",
                description: "Create your account and complete a brief assessment.",
              },
              {
                step: "2",
                title: "Browse Professionals",
                description: "Explore our network of licensed therapists and counselors.",
              },
              {
                step: "3",
                title: "Book a Session",
                description: "Schedule your first session at a time that works for you.",
              },
              {
                step: "4",
                title: "Start Healing",
                description: "Connect with your therapist and begin your wellness journey.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < 3 && <div className="hidden md:block absolute top-6 left-full w-8 h-0.5 bg-border"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Take the first step toward better mental health today. Our team is ready to support you.
          </p>
          <Link
            href="/book"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Book Your First Session
          </Link>
        </div>
      </section>
    </main>
  )
}
