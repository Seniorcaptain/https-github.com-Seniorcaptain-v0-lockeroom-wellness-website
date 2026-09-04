import type { Metadata } from "next"
import { Brain, Heart, Users, Lightbulb, Zap, Shield } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Lockeroom Wellness's therapy and counseling services, from individual sessions to specialized mental health support, delivered by licensed professionals.",
}

const services = [
  {
    icon: Brain,
    title: "Individual Therapy",
    description:
      "For anxiety, depression, burnout, trauma, and the everyday overwhelm of hustle-culture life in Kenya's cities and towns.",
    features: [
      "Sessions in English, Kiswahili, or Sheng — whichever you're most comfortable in",
      "Support for job stress, financial anxiety, and \"hustle burnout\"",
      "Trauma-informed care, including for crime, accidents, and past abuse",
    ],
  },
  {
    icon: Heart,
    title: "Couples Counselling",
    description:
      "For couples navigating communication breakdowns, trust issues, financial disagreements, or pressure from extended family involvement in the relationship.",
    features: [
      "Pre-marital counselling (\"kabla ya ndoa\")",
      "Conflict resolution around finances, in-laws, and parenting",
      "Support through infidelity, separation, or reconciliation",
    ],
  },
  {
    icon: Users,
    title: "Family Therapy",
    description:
      "For families working through generational conflict, blended-family dynamics, or the tension between traditional expectations and modern life.",
    features: [
      "Parent–teen communication, especially around independence and social media",
      "Extended-family and in-law mediation support",
      "Support for families affected by a member's mental illness or substance use",
    ],
  },
  {
    icon: Lightbulb,
    title: "Coaching & Wellness",
    description:
      "Goal-oriented sessions for career transitions, side-hustle burnout, and life direction — especially for young professionals and students.",
    features: [
      "Career clarity for the \"what am I even doing with my life\" season",
      "Study and exam-pressure coping strategies for students",
      "Building healthy routines around work, sleep, and finances",
    ],
  },
  {
    icon: Zap,
    title: "Crisis Support",
    description:
      "Same-day support for acute distress, panic, or suicidal thoughts — with a clear, fast path to emergency services when needed.",
    features: [
      "Same-day booking where available",
      "Safety planning you can actually use at home",
      "Direct referral to emergency numbers when a situation needs more than a session can offer",
    ],
  },
  {
    icon: Shield,
    title: "Specialised Treatment",
    description:
      "Focused care for PTSD, OCD, eating disorders, and substance use disorders — including alcohol and bhang dependency, which NACADA has flagged as major risk factors for depression in Kenya.",
    features: [
      "Evidence-based treatment plans",
      "Coordination with NACADA-affiliated recovery programs where appropriate",
      "Non-judgmental care for people worried about stigma around addiction",
    ],
  },
]

const howItWorks = [
  {
    step: "1",
    title: "Answer a Few Questions",
    description: "Tell us what's going on, in confidence. No forms in confusing medical jargon.",
  },
  {
    step: "2",
    title: "Get Matched",
    description: "We recommend therapists based on your needs, language preference, and budget.",
  },
  {
    step: "3",
    title: "Book & Pay via M-Pesa",
    description: "Choose a time that works and confirm your slot securely.",
  },
  {
    step: "4",
    title: "Show Up As You Are",
    description: "Online or in person. No pretending required.",
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
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
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
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-8 h-0.5 bg-border"></div>
                )}
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
