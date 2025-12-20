"use client"

import { useState } from "react"
import { Star, MapPin, Clock, DollarSign, Search } from "lucide-react"
import Link from "next/link"

const professionals = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    specialty: "Anxiety & Depression",
    credentials: "PhD, Licensed Clinical Psychologist",
    rating: 4.9,
    reviews: 128,
    hourlyRate: 120,
    availability: "Mon-Fri, 9am-6pm",
    bio: "Specializing in cognitive behavioral therapy for anxiety and depression with 12+ years of experience.",
    image: "/professional-therapist-woman.png",
    languages: ["English", "Spanish"],
    experience: "12+ years",
  },
  {
    id: 2,
    name: "Dr. James Chen",
    specialty: "Trauma & PTSD",
    credentials: "MD, Board-Certified Psychiatrist",
    rating: 4.8,
    reviews: 95,
    hourlyRate: 150,
    availability: "Tue-Sat, 10am-7pm",
    bio: "Expert in trauma-focused therapy and PTSD treatment using evidence-based approaches.",
    image: "/professional-therapist-man.jpg",
    languages: ["English", "Mandarin"],
    experience: "15+ years",
  },
  {
    id: 3,
    name: "Dr. Maria Rodriguez",
    specialty: "Relationship Counseling",
    credentials: "LMFT, Licensed Marriage & Family Therapist",
    rating: 4.9,
    reviews: 142,
    hourlyRate: 130,
    availability: "Mon-Thu, 2pm-8pm",
    bio: "Helping couples and families improve communication and build stronger relationships.",
    image: "/professional-therapist-woman.png",
    languages: ["English", "Spanish", "Portuguese"],
    experience: "10+ years",
  },
  {
    id: 4,
    name: "Dr. Michael Thompson",
    specialty: "Stress Management",
    credentials: "MA, Licensed Professional Counselor",
    rating: 4.7,
    reviews: 87,
    hourlyRate: 110,
    availability: "Wed-Sun, 11am-7pm",
    bio: "Specializing in stress reduction, mindfulness, and work-life balance coaching.",
    image: "/professional-therapist-man.jpg",
    languages: ["English"],
    experience: "8+ years",
  },
  {
    id: 5,
    name: "Dr. Emily Watson",
    specialty: "Eating Disorders",
    credentials: "PhD, Registered Dietitian Psychologist",
    rating: 4.9,
    reviews: 110,
    hourlyRate: 140,
    availability: "Mon-Fri, 8am-5pm",
    bio: "Comprehensive treatment for eating disorders combining therapy and nutritional counseling.",
    image: "/professional-therapist-woman.png",
    languages: ["English"],
    experience: "11+ years",
  },
  {
    id: 6,
    name: "Dr. David Park",
    specialty: "Addiction & Recovery",
    credentials: "LCSW, Certified Addiction Specialist",
    rating: 4.8,
    reviews: 103,
    hourlyRate: 125,
    availability: "Tue-Sat, 9am-6pm",
    bio: "Specialized treatment for substance abuse and addiction recovery with compassionate care.",
    image: "/professional-therapist-man.jpg",
    languages: ["English", "Korean"],
    experience: "13+ years",
  },
]

export default function ProfessionalsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("All")

  const specialties = ["All", ...new Set(professionals.map((p) => p.specialty))]

  const filteredProfessionals = professionals.filter((professional) => {
    const matchesSearch =
      professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      professional.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = selectedSpecialty === "All" || professional.specialty === selectedSpecialty
    return matchesSearch && matchesSpecialty
  })

  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
              Find Your Perfect Therapist
            </h1>
            <p className="text-lg text-muted-foreground text-balance">
              Browse our network of 500+ licensed mental health professionals ready to support you.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Results */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="mb-12 flex flex-wrap gap-3">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  selectedSpecialty === specialty
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-muted"
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredProfessionals.length} of {professionals.length} professionals
            </p>
          </div>

          {/* Professionals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProfessionals.map((professional) => (
              <div
                key={professional.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Image */}
                <img
                  src={professional.image || "/placeholder.svg"}
                  alt={professional.name}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{professional.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{professional.specialty}</p>
                  <p className="text-xs text-muted-foreground mb-4">{professional.credentials}</p>

                  {/* Rating */}
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

                  {/* Details */}
                  <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      <span>${professional.hourlyRate}/hour</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{professional.availability}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{professional.experience}</span>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-6">
                    <p className="text-xs text-muted-foreground mb-2">Languages</p>
                    <div className="flex flex-wrap gap-2">
                      {professional.languages.map((lang) => (
                        <span key={lang} className="bg-secondary text-foreground text-xs px-2 py-1 rounded">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
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

          {/* No Results */}
          {filteredProfessionals.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">No professionals found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedSpecialty("All")
                }}
                className="text-primary font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
