import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Emma Johnson",
    role: "User",
    content:
      "Lockeroom Wellness changed my life. Finding the right therapist was easy, and the platform is so user-friendly. I finally feel heard.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Lee",
    role: "User",
    content:
      "The flexibility to schedule sessions around my work has been incredible. The therapists are professional and truly care about their clients.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica Martinez",
    role: "User",
    content:
      "I was nervous about online therapy, but Lockeroom made it so comfortable. The confidentiality and professionalism are top-notch.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Real stories from people who've taken control of their mental health journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
