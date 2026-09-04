import type { Metadata } from "next"
import { AlertTriangle, Shield, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Emergency & Crisis Resources",
  description:
    "In crisis? Find 24/7 emergency mental health resources and hotlines in Kenya, including Kenya Red Cross, Befrienders Kenya, NACADA, and GBV support lines.",
  robots: { index: true, follow: true },
}

interface Contact {
  name: string
  phone?: string
  altPhone?: string
  description?: string
}

interface ResourceGroup {
  title: string
  contacts: Contact[]
}

const resourceGroups: ResourceGroup[] = [
  {
    title: "If you're in immediate danger",
    contacts: [
      { name: "Emergency Services (Police / Fire / Ambulance)", phone: "999", altPhone: "112" },
      { name: "Kenya Red Cross Emergency Line", phone: "1199" },
    ],
  },
  {
    title: "Suicide & emotional crisis support",
    contacts: [
      {
        name: "Befrienders Kenya",
        phone: "+254 722 178 177",
        altPhone: "+254 793 594 849 · +254 754 580 252",
        description: "Call, SMS, or WhatsApp, Mon–Sun 9am–5pm",
      },
      { name: "Niskize", phone: "0900 620 800" },
      { name: "Emergency Medicine Kenya Foundation", phone: "0800 723 253" },
    ],
  },
  {
    title: "Gender-based & domestic violence",
    contacts: [
      { name: "GBV Helpline", phone: "1195", altPhone: "1196 (for men) · SMS \"HELP\" to 1198" },
      { name: "Gender Violence Recovery Centre", phone: "0800 720 565" },
      { name: "Coalition on Violence Against Women (COVAW)", phone: "0800 720 553" },
    ],
  },
  {
    title: "Substance use & addiction",
    contacts: [{ name: "NACADA Toll-Free Helpline", phone: "1192" }],
  },
  {
    title: "Children",
    contacts: [{ name: "National Child Helpline", phone: "116" }],
  },
  {
    title: "Low-cost / free counselling in major towns",
    contacts: [
      { name: "Kenyatta National Hospital Youth Centre", description: "Free counselling for under-25s" },
      { name: "Amani Counselling Centre", description: "Nairobi, Mombasa, Kisumu" },
      { name: "Kamili Mental Health Organisation", phone: "0700 327 701" },
    ],
  },
]

export default function EmergencyPage() {
  return (
    <main className="min-h-screen">
      {/* Alert Banner */}
      <div className="bg-red-50 border-b border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-red-900 mb-2">If you are in immediate danger</h2>
              <p className="text-red-800 mb-3">
                Call 999 or 112 for emergency services. If you are experiencing suicidal thoughts or a mental health
                crisis, please call one of the hotlines below immediately.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                  <a href="tel:999">Call 999</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50 bg-transparent"
                >
                  <a href="tel:1199">Kenya Red Cross: 1199</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Emergency Mental Health Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            You are not alone. Help is available. These resources provide immediate support for mental health
            crises, suicidal thoughts, and emotional distress, across Kenya.
          </p>
        </div>

        {/* Resource Groups */}
        <div className="space-y-12 mb-16">
          {resourceGroups.map((group) => (
            <div key={group.title}>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">{group.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.contacts.map((contact) => (
                  <div key={contact.name} className="bg-card border border-border rounded-lg p-6">
                    <h3 className="font-semibold text-foreground mb-1">{contact.name}</h3>
                    {contact.phone && (
                      <a
                        href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                        className="text-primary font-medium hover:underline block"
                      >
                        {contact.phone}
                      </a>
                    )}
                    {contact.altPhone && <p className="text-sm text-muted-foreground mt-1">{contact.altPhone}</p>}
                    {contact.description && (
                      <p className="text-sm text-muted-foreground mt-1">{contact.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Support */}
        <div className="bg-secondary rounded-lg p-8 text-center">
          <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-4">Need Non-Emergency Support?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            For non-crisis mental health support, schedule a session with one of our licensed professionals or use
            our chatbot for immediate guidance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/book">Book a Session</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/professionals">Find a Professional</Link>
            </Button>
          </div>
        </div>

        {/* Warning Note */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-lg p-6">
          <p className="text-sm text-amber-900">
            <strong>Important:</strong> This website does not provide emergency services. If you are experiencing a
            life-threatening emergency, please call 999 or 112 immediately. The resources listed here are for
            informational purposes and to connect you with appropriate crisis support services. Phone numbers and
            hours are subject to change — please verify directly with each organization if a number doesn't
            connect.
          </p>
        </div>
      </div>
    </main>
  )
}
