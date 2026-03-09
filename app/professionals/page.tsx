"use client"

import { useState } from "react"
import { Star, MapPin, Clock, DollarSign, Search } from "lucide-react"
import Link from "next/link"

const professionals = [
  {
    id: 1,
    name: "Dr. Louise Brenda",
    specialty: "Mental Health & Wellness",
    credentials: "Licensed Clinical Psychologist",
    rating: 4.9,
    reviews: 128,
    hourlyRate: 120,
    availability: "Mon-Fri, 9am-6pm",
    bio: "Dedicated to providing comprehensive mental health support with a compassionate approach and evidence-based therapeutic techniques.",
    image: null,
    languages: ["English"],
    experience: "12+ years",
  },
  {
    id: 2,
    name: "Malusha Manase",
    specialty: "Counseling & Support",
    credentials: "Licensed Professional Counselor",
    rating: 4.8,
    reviews: 95,
    hourlyRate: 110,
    availability: "Tue-Sat, 10am-7pm",
    bio: "Specializing in personalized counseling services to help clients achieve emotional wellness and build resilience.",
    image: null,
    languages: ["English"],
    experience: "10+ years",
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
                {professional.image && (
                  <img
                    src={professional.image}
                    alt={professional.name}
                    className="w-full h-48 object-cover"
                  />
                )}
                {!professional.image && (
                  <div className="w-full h-48 bg-secondary flex items-center justify-center">
                    <p className="text-muted-foreground">Coming Soon</p>
                  </div>
                )}

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
