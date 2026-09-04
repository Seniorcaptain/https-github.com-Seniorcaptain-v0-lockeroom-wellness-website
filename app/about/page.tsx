import type { Metadata } from "next"
import Link from "next/link"
import { CheckCircle, Heart, Lock, Compass, Sparkles, Award, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Lockeroom Wellness's mission to make licensed mental health support accessible, affordable, and confidential for everyone in Kenya.",
}

const values = [
  {
    icon: Heart,
    title: "Heshima",
    subtitle: "Respect",
    description: "You're treated as a whole person, not a diagnosis.",
  },
  {
    icon: Lock,
    title: "Usiri",
    subtitle: "Confidentiality",
    description: "What's said in session stays in session — protected under the Kenya Data Protection Act, 2019.",
  },
  {
    icon: Compass,
    title: "Upatikanaji",
    subtitle: "Accessibility",
    description: "Online, in-person, and hybrid options so location and time zone aren't a barrier.",
  },
  {
    icon: Sparkles,
    title: "Uwazi",
    subtitle: "Transparency",
    description: "Clear KES pricing, no hidden fees, no surprise charges after the session.",
  },
  {
    icon: Award,
    title: "Weledi",
    subtitle: "Professionalism",
    description:
      "Every therapist is licensed and vetted against Kenya's regulatory standards for psychologists and counsellors.",
  },
  {
    icon: Users,
    title: "Jamii",
    subtitle: "Community",
    description:
      "We partner with local organizations working on suicide prevention, GBV support, and addiction recovery rather than operating in isolation.",
  },
]

const stats = [
  { value: "1 in 4", label: "Kenyans experience a mental health condition in their lifetime" },
  { value: "75%", label: "of people with a mental health condition in Kenya never get treated" },
  { value: "1.9M", label: "Kenyans live with depression" },
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              About Lockeroom Wellness
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-balance">
              We're on a mission to make mental health support accessible, affordable, and stigma-free for everyone
              in Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Lockeroom Wellness exists because too many Kenyans are taught to "pray it away," "toughen up," or
                "sema tu utapona" instead of getting real support. We built a platform that removes the three
                biggest barriers to mental healthcare in Kenya — cost, distance, and stigma — so getting help feels
                as normal as seeing a doctor for a fever.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The name "Lockeroom" is deliberate: it's the space where you take the armor off. Before the game
                face goes back on for work, family, or social media, this is where you get to just be honest about
                how you're actually doing.
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-8 border border-border">
              <h3 className="font-semibold text-foreground mb-4">Why "Lockeroom" resonates here</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Kenyan culture prizes resilience — "Mkenya hukalia shida" — but that same strength can become a
                reason people suffer in silence. We're pro-strength, not anti-culture: real strength includes
                knowing when to ask for support, the same way an athlete relies on a coach and a team.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground text-sm">Available 24/7 from anywhere, on any device.</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground text-sm">Transparent KES pricing, paid via M-Pesa.</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground text-sm">All therapists are licensed and vetted.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-20">
            <h3 className="font-semibold text-foreground mb-2">How your data is protected</h3>
            <p className="text-muted-foreground leading-relaxed">
              All client data is handled in accordance with Kenya's Data Protection Act, 2019, and sessions are
              encrypted. Our clinical practice is aligned with the Kenya Mental Health Act (2023) and the Kenya
              Mental Health Policy (2015–2030).
            </p>
          </div>

          {/* Core Values */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-12">
              What guides every session, every conversation, and every decision we make.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <div key={value.title} className="text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {value.title} <span className="text-muted-foreground font-normal">({value.subtitle})</span>
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our clinical team is led by registered psychologists and counsellors — full profiles coming soon.
          </p>
          <Link
            href="/professionals"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Meet Our Therapists
          </Link>
        </div>
      </section>

      {/* Stats Section — sourced, not invented usage numbers */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Why This Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-8">
            {stats.map((stat) => (
              <div key={stat.value}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-8">
            Sources: WHO / Kenya Mental Health Policy 2015–2030; Kenya Ministry of Health.
          </p>
        </div>
      </section>
    </main>
  )
}
