import type { Metadata } from "next"
import { Star, Quote } from "lucide-react"

export const metadata: Metadata = {
  title: "Client Testimonials",
  description: "Real stories from clients who've found licensed mental health support through Lockeroom Wellness.",
}

const testimonials = [
  {
    id: 1,
    name: "Emma Johnson",
    role: "Marketing Professional",
    location: "New York, NY",
    content:
      "Lockeroom Wellness changed my life. I was struggling with anxiety for years, and finding Dr. Sarah was a game-changer. The platform is so user-friendly, and I finally feel heard and supported. I can't recommend this service enough.",
    rating: 5,
    image: "/testimonial-user-1.jpg",
  },
  {
    id: 2,
    name: "David Lee",
    role: "Software Engineer",
    location: "San Francisco, CA",
    content:
      "The flexibility to schedule sessions around my work has been incredible. Dr. Michael helped me manage my stress and find better work-life balance. The therapists are professional, compassionate, and truly care about their clients.",
    rating: 5,
    image: "/testimonial-user-2.jpg",
  },
  {
    id: 3,
    name: "Jessica Martinez",
    role: "Teacher",
    location: "Austin, TX",
    content:
      "I was nervous about online therapy, but Lockeroom made it so comfortable and accessible. The confidentiality and professionalism are top-notch. Dr. Maria's couples counseling saved my marriage. Thank you!",
    rating: 5,
    image: "/testimonial-user-3.jpg",
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Student",
    location: "Boston, MA",
    content:
      "As a college student, I couldn't afford traditional therapy. Lockeroom's pricing is reasonable, and the quality of care is exceptional. Dr. James helped me work through trauma I've been carrying for years.",
    rating: 5,
    image: "/testimonial-user-4.jpg",
  },
  {
    id: 5,
    name: "Sarah Williams",
    role: "Entrepreneur",
    location: "Los Angeles, CA",
    content:
      "Running a startup is stressful, and I needed support. The ability to book sessions on my schedule was perfect. Dr. Michael's coaching helped me develop better coping strategies and improve my overall wellbeing.",
    rating: 5,
    image: "/testimonial-user-5.jpg",
  },
  {
    id: 6,
    name: "Robert Thompson",
    role: "Healthcare Worker",
    location: "Chicago, IL",
    content:
      "Working in healthcare during the pandemic took a toll on my mental health. Lockeroom connected me with Dr. James, who specializes in trauma. His expertise and compassion made all the difference in my recovery.",
    rating: 5,
    image: "/testimonial-user-6.jpg",
  },
  {
    id: 7,
    name: "Amanda Foster",
    role: "Parent",
    location: "Seattle, WA",
    content:
      "Balancing parenthood and work was overwhelming. Dr. Maria's family therapy sessions helped us communicate better as a family. The platform made it easy to fit therapy into our busy schedule.",
    rating: 5,
    image: "/testimonial-user-7.jpg",
  },
  {
    id: 8,
    name: "James Wilson",
    role: "Recovering Individual",
    location: "Denver, CO",
    content:
      "I've been in recovery for 2 years, and Dr. David's support has been invaluable. His compassionate approach and expertise in addiction recovery gave me hope when I needed it most. Lockeroom is truly life-changing.",
    rating: 5,
    image: "/testimonial-user-8.jpg",
  },
]

export default function TestimonialsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Real Stories, Real Change
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-balance">
              Hear from people who've taken control of their mental health journey with Lockeroom Wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow flex flex-col"
              >
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/30 mb-4" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed flex-grow italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">By The Numbers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our impact speaks for itself. Here's what our community has achieved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-primary mb-2">10K+</div>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Licensed Professionals</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-primary mb-2">50K+</div>
              <p className="text-muted-foreground">Sessions Completed</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-primary mb-2">4.9★</div>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Users Trust Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-4">100%</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Data Protection Compliant</h3>
              <p className="text-muted-foreground">
                All sessions are encrypted and your data is handled per Kenya's Data Protection Act, 2019.
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-4">24/7</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Always Available</h3>
              <p className="text-muted-foreground">
                Access support whenever you need it, across all time zones and devices.
              </p>
            </div>
            <div className="bg-secondary rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-4">100%</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Licensed Professionals</h3>
              <p className="text-muted-foreground">
                Every therapist is vetted, licensed, and committed to your wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
            Join thousands of people who've transformed their mental health with Lockeroom Wellness.
          </p>
          <a
            href="/book"
            className="inline-block bg-primary-foreground text-primary px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Start Your Journey Today
          </a>
        </div>
      </section>
    </main>
  )
}
