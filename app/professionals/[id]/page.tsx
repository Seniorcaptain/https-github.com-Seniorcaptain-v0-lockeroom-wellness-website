import type { Metadata } from "next"
import { Star, Clock, DollarSign, Calendar, MessageSquare } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getProfessionalById } from "@/lib/professionals"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const professional = getProfessionalById(id)
  if (!professional) {
    return { title: "Professional Not Found" }
  }
  return {
    title: professional.name,
    description: `${professional.name}, ${professional.credentials} — specializing in ${professional.specialty}. ${professional.bio}`,
  }
}

export default async function ProfessionalDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const professional = getProfessionalById(id)

  if (!professional) {
    return (
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Professional not found</h1>
          <Link href="/professionals" className="text-primary hover:underline">
            Back to professionals
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/professionals" className="text-primary hover:underline mb-6 inline-block">
            ← Back to professionals
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Image */}
            <div>
              <Image
                src={professional.image || "/placeholder.svg"}
                alt={professional.name}
                width={400}
                height={400}
                className="w-full rounded-lg mb-6"
              />
            </div>

            {/* Info */}
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-foreground mb-2">{professional.name}</h1>
              <p className="text-xl text-primary font-medium mb-2">{professional.specialty}</p>
              <p className="text-muted-foreground mb-6">{professional.credentials}</p>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(professional.rating) ? "fill-primary text-primary" : "text-border"}`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-foreground">{professional.rating}</span>
                <span className="text-muted-foreground">({professional.reviews} reviews)</span>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-secondary rounded-lg p-4">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm">Hourly Rate</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">${professional.hourlyRate}</p>
                </div>
                <div className="bg-secondary rounded-lg p-4">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Experience</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{professional.experience}</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book"
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  <Calendar className="w-5 h-5" />
                  Book Session
                </Link>
                <button className="flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                  <MessageSquare className="w-5 h-5" />
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">About</h2>
                <p className="text-muted-foreground leading-relaxed">{professional.about}</p>
              </div>

              {/* Approach */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">My Approach</h2>
                <p className="text-muted-foreground leading-relaxed">{professional.approach}</p>
              </div>

              {/* Specializations */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Specializations</h2>
                <div className="flex flex-wrap gap-3">
                  {professional.specializations.map((spec) => (
                    <span
                      key={spec}
                      className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Education & Credentials</h2>
                <ul className="space-y-3">
                  {professional.education.map((edu, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-secondary border border-border rounded-lg p-8 sticky top-20">
                <h3 className="text-xl font-bold text-foreground mb-6">Quick Info</h3>

                <div className="space-y-6">
                  {/* Availability */}
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Availability</p>
                    <p className="text-foreground">{professional.availability}</p>
                  </div>

                  {/* Languages */}
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Languages</p>
                    <div className="flex flex-wrap gap-2">
                      {professional.languages.map((lang) => (
                        <span key={lang} className="bg-background text-foreground text-xs px-3 py-1 rounded-full">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href="/book"
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center block"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
