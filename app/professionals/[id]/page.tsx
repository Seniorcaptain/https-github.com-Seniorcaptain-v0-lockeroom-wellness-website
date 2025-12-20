import { Star, Clock, DollarSign, Calendar, MessageSquare } from "lucide-react"
import Link from "next/link"

// Mock data - in a real app, this would come from a database
const professionals: Record<
  string,
  {
    id: number
    name: string
    specialty: string
    credentials: string
    rating: number
    reviews: number
    hourlyRate: number
    availability: string
    bio: string
    image: string
    languages: string[]
    experience: string
    about: string
    approach: string
    specializations: string[]
    education: string[]
  }
> = {
  "1": {
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
    about:
      "Dr. Sarah Mitchell is a compassionate and experienced clinical psychologist dedicated to helping individuals overcome anxiety and depression. With over 12 years of practice, she has helped hundreds of clients achieve lasting change through evidence-based therapeutic approaches.",
    approach:
      "I use a combination of Cognitive Behavioral Therapy (CBT), mindfulness-based interventions, and acceptance and commitment therapy (ACT) tailored to each client's unique needs. My goal is to empower you with practical tools and strategies for managing anxiety and building resilience.",
    specializations: ["Generalized Anxiety Disorder", "Social Anxiety", "Depression", "Panic Disorder", "OCD"],
    education: [
      "PhD in Clinical Psychology - University of California",
      "MA in Psychology - Stanford University",
      "BA in Psychology - UC Berkeley",
    ],
  },
  "2": {
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
    about:
      "Dr. James Chen is a board-certified psychiatrist with extensive experience in trauma treatment and PTSD recovery. He specializes in evidence-based approaches including EMDR and trauma-focused CBT.",
    approach:
      "I believe in creating a safe, supportive environment where healing can occur. My approach combines pharmacological interventions when appropriate with psychotherapy to address both the symptoms and root causes of trauma.",
    specializations: ["PTSD", "Complex Trauma", "Childhood Trauma", "Combat-Related PTSD", "Grief & Loss"],
    education: [
      "MD - Harvard Medical School",
      "Residency in Psychiatry - Massachusetts General Hospital",
      "Fellowship in Trauma - National Center for PTSD",
    ],
  },
  "3": {
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
    about:
      "Dr. Maria Rodriguez is a licensed marriage and family therapist with a passion for helping couples and families navigate challenges and build healthier relationships. Her warm, non-judgmental approach creates a safe space for honest communication.",
    approach:
      "I use evidence-based couples therapy techniques including the Gottman Method and Emotionally Focused Therapy (EFT). I help couples improve communication, resolve conflicts, and rebuild intimacy and connection.",
    specializations: [
      "Couples Therapy",
      "Marriage Counseling",
      "Family Therapy",
      "Premarital Counseling",
      "Infidelity",
    ],
    education: [
      "MA in Marriage and Family Therapy - University of Texas",
      "BA in Psychology - University of Mexico",
      "Certified Gottman Therapist",
    ],
  },
  "4": {
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
    about:
      "Dr. Michael Thompson specializes in helping professionals manage stress and achieve better work-life balance. His practical, goal-oriented approach has helped countless clients reduce burnout and improve overall wellbeing.",
    approach:
      "I combine stress management techniques, mindfulness practices, and lifestyle coaching to help you build sustainable habits for better mental health. We'll work together to identify stressors and develop personalized coping strategies.",
    specializations: ["Work Stress", "Burnout", "Mindfulness", "Work-Life Balance", "Executive Coaching"],
    education: [
      "MA in Counseling - University of Colorado",
      "BA in Psychology - University of Washington",
      "Certified Mindfulness Instructor",
    ],
  },
  "5": {
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
    about:
      "Dr. Emily Watson is a registered dietitian and clinical psychologist specializing in eating disorders. She provides comprehensive, integrated treatment that addresses both the psychological and nutritional aspects of recovery.",
    approach:
      "I use evidence-based treatments including Cognitive Behavioral Therapy for Eating Disorders (CBT-E) and Dialectical Behavior Therapy (DBT). My integrated approach combines psychological therapy with nutritional counseling for holistic recovery.",
    specializations: ["Anorexia Nervosa", "Bulimia Nervosa", "Binge Eating Disorder", "Orthorexia", "Body Image"],
    education: [
      "PhD in Clinical Psychology - University of Pennsylvania",
      "MS in Nutrition - Cornell University",
      "Registered Dietitian Nutritionist (RDN)",
    ],
  },
  "6": {
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
    about:
      "Dr. David Park is a licensed clinical social worker and certified addiction specialist with 13+ years of experience in substance abuse treatment and recovery. He brings compassion, expertise, and hope to the recovery journey.",
    approach:
      "I believe recovery is possible for everyone. I use evidence-based treatments including motivational interviewing, cognitive behavioral therapy, and 12-step facilitation. I also help clients build strong support networks and develop relapse prevention strategies.",
    specializations: [
      "Alcohol Addiction",
      "Drug Addiction",
      "Opioid Addiction",
      "Relapse Prevention",
      "Family Support",
    ],
    education: [
      "MSW - University of Southern California",
      "BA in Social Work - UCLA",
      "Certified Addiction Counselor (CAC)",
      "Certified Addiction Specialist (CAS)",
    ],
  },
}

export default function ProfessionalDetailPage({ params }: { params: { id: string } }) {
  const professional = professionals[params.id]

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
              <img
                src={professional.image || "/placeholder.svg"}
                alt={professional.name}
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
