import type { Metadata } from "next"
import { CheckCircle, Users, Award, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Lockeroom Wellness's mission to make licensed mental health support accessible, affordable, and confidential for everyone in Kenya.",
}

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
              We're on a mission to make mental health support accessible, affordable, and stigma-free for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Lockeroom Wellness was founded on the belief that everyone deserves access to quality mental health
                support. We created a platform that removes barriers—geographic, financial, and social—to connect people
                with licensed professionals who genuinely care.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our name reflects our commitment to creating a safe, confidential space where you can be yourself and
                discuss what matters most to you.
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-8 border border-border">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Accessible</h3>
                    <p className="text-muted-foreground">Available 24/7 from anywhere, on any device.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Confidential</h3>
                    <p className="text-muted-foreground">Encrypted sessions, handled in line with Kenya's Data Protection Act, 2019.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Professional</h3>
                    <p className="text-muted-foreground">All therapists are licensed and vetted.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Affordable</h3>
                    <p className="text-muted-foreground">Transparent pricing with no hidden fees.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Community</h3>
              <p className="text-muted-foreground">We believe in the power of connection and support.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Excellence</h3>
              <p className="text-muted-foreground">We maintain the highest standards of care.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Innovation</h3>
              <p className="text-muted-foreground">We use technology to improve mental health care.</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Integrity</h3>
              <p className="text-muted-foreground">We prioritize your privacy and trust above all.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Founded by mental health advocates and technology experts dedicated to transforming mental health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Rachel Green",
                role: "Founder & CEO",
                bio: "Licensed psychologist with 15+ years of clinical experience.",
              },
              {
                name: "Marcus Johnson",
                role: "Co-Founder & CTO",
                bio: "Tech entrepreneur passionate about healthcare innovation.",
              },
              {
                name: "Dr. Lisa Park",
                role: "Chief Clinical Officer",
                bio: "Psychiatrist dedicated to accessible mental health care.",
              },
            ].map((member, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Licensed Professionals</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <p className="text-muted-foreground">Sessions Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
