import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { professionals as allProfessionals } from "@/lib/professionals"

const professionals = allProfessionals.slice(0, 4)

export default function FeaturedProfessionals() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Meet Our Professionals</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Our network includes licensed therapists, counselors, and psychiatrists ready to support you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {professionals.map((professional) => (
            <div
              key={professional.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {professional.image ? (
                <Image
                  src={professional.image || "/placeholder.svg"}
                  alt={professional.name}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-secondary flex items-center justify-center">
                  <p className="text-muted-foreground">Coming Soon</p>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-1">{professional.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{professional.specialty}</p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(professional.rating) ? "fill-primary text-primary" : "text-border"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">{professional.rating}</span>
                  <span className="text-sm text-muted-foreground">({professional.reviews})</span>
                </div>
                <Link
                  href={`/professionals/${professional.id}`}
                  className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:opacity-90 transition-opacity text-center text-sm"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/professionals"
            className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Browse All Professionals
          </Link>
        </div>
      </div>
    </section>
  )
}
