import { AlertTriangle, Phone, Mail, MessageCircle, Heart, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EmergencyPage() {
  const emergencyContacts = [
    {
      name: "Kenya Red Cross Society - Psychosocial Support",
      phone: "1199",
      altPhone: "+254 703 037 000",
      description: "24/7 emotional and psychological support hotline",
      availability: "24/7",
    },
    {
      name: "Befrienders Kenya",
      phone: "+254 722 178 177",
      email: "befrienderskenya@gmail.com",
      description: "Suicide prevention and emotional support",
      availability: "24/7",
    },
    {
      name: "Amani Counselling Centre",
      phone: "+254 719 637 506",
      email: "info@amanicounselling.org",
      description: "Professional counseling and mental health support",
      availability: "Mon-Fri 8AM-5PM",
    },
    {
      name: "PCEA Tunza Counselling Centre",
      phone: "+254 712 906 810",
      description: "Faith-based counseling and mental health services",
      availability: "Mon-Fri 9AM-5PM",
    },
    {
      name: "Moi Teaching and Referral Hospital - Mental Health",
      phone: "+254 53 203 3471",
      description: "Emergency psychiatric services and crisis intervention",
      availability: "24/7 Emergency",
    },
    {
      name: "Chiromo Hospital Group - Mental Health",
      phone: "+254 709 949 000",
      description: "Private psychiatric emergency services",
      availability: "24/7",
    },
  ]

  const internationalContacts = [
    {
      name: "International Association for Suicide Prevention",
      website: "https://www.iasp.info/resources/Crisis_Centres/",
      description: "Global directory of crisis centers",
    },
    {
      name: "Crisis Text Line (Global)",
      info: "Text HOME to 741741",
      description: "Free 24/7 crisis support via text",
    },
  ]

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
                Call 999, 911, or 112 for emergency services. If you are experiencing suicidal thoughts or a mental
                health crisis, please call one of the hotlines below immediately.
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
            You are not alone. Help is available 24/7. These resources provide immediate support for mental health
            crises, suicidal thoughts, and emotional distress.
          </p>
        </div>

        {/* Kenya Emergency Contacts */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Kenya Crisis Hotlines</h2>
          </div>
          <div className="grid gap-6">
            {emergencyContacts.map((contact, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{contact.name}</h3>
                    <p className="text-muted-foreground mb-3">{contact.description}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Clock className="w-4 h-4" />
                      <span>{contact.availability}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 min-w-[200px]">
                    {contact.phone && (
                      <Button asChild className="w-full">
                        <a href={`tel:${contact.phone}`} className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          {contact.phone}
                        </a>
                      </Button>
                    )}
                    {contact.altPhone && (
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <a href={`tel:${contact.altPhone}`} className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          {contact.altPhone}
                        </a>
                      </Button>
                    )}
                    {contact.email && (
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <a href={`mailto:${contact.email}`} className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* International Resources */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">International Resources</h2>
          </div>
          <div className="grid gap-6">
            {internationalContacts.map((contact, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{contact.name}</h3>
                <p className="text-muted-foreground mb-3">{contact.description}</p>
                {contact.website && (
                  <Button asChild variant="outline">
                    <a href={contact.website} target="_blank" rel="noopener noreferrer">
                      Visit Website
                    </a>
                  </Button>
                )}
                {contact.info && <p className="text-sm font-medium text-foreground mt-2">{contact.info}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Support */}
        <div className="bg-secondary rounded-lg p-8 text-center">
          <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-4">Need Non-Emergency Support?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            For non-crisis mental health support, schedule a session with one of our licensed professionals or use our
            AI chatbot for immediate guidance.
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
            life-threatening emergency, please call 999, 911, or your local emergency number immediately. The resources
            listed here are for informational purposes and to connect you with appropriate crisis support services.
          </p>
        </div>
      </div>
    </main>
  )
}
