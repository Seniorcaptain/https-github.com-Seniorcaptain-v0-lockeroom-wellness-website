import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

const struggles = [
  "Work and hustle burnout — job insecurity, long hours, \"sasa hivi hakuna kazi rahisi\"",
  "Relationship and marriage pressure, including family and in-law expectations",
  "Anxiety, overthinking, and panic that shows up as a tight chest or racing thoughts",
  "Grief and loss — including delayed grief many Kenyans never got space to process",
  "Parenting stress and raising children in the city vs. shamba upbringing",
  "Substance use — alcohol, bhang, and prescription misuse",
  "Exam and career pressure on students and young professionals",
  "Post-election, financial, or crime-related trauma and anxiety",
]

export default function StrugglesSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            What People Actually Struggle With
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            If any of this sounds familiar, you're not alone — and you don't have to figure it out by yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {struggles.map((item) => (
            <div key={item} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-foreground text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/professionals"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Find the Right Therapist for You
          </Link>
        </div>
      </div>
    </section>
  )
}
