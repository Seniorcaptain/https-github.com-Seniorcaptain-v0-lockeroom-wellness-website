"use client"

import { useState } from "react"
import { Check, MessageCircle, Mail, Plus, Minus } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    id: "starter",
    name: "Starter Package",
    description: "4 sessions per month",
    price: 11250,
    currency: "KES",
    period: "per month",
    features: [
      "4 counselling sessions",
      "50-minute sessions",
      "Access to all professionals",
      "Secure messaging",
      "Email support",
    ],
    highlighted: false,
  },
  {
    id: "professional",
    name: "Professional Package",
    description: "8 sessions per month",
    price: 20500,
    currency: "KES",
    period: "per month",
    features: [
      "8 counselling sessions",
      "50-minute sessions",
      "Priority booking",
      "Secure messaging",
      "Phone support",
      "Flexible scheduling",
      "Progress tracking",
    ],
    highlighted: true,
  },
  {
    id: "premium",
    name: "Premium Package",
    description: "Unlimited sessions",
    price: 40000,
    currency: "KES",
    period: "per month",
    features: [
      "Unlimited sessions",
      "50-minute sessions",
      "Priority booking",
      "Secure messaging",
      "24/7 phone support",
      "Flexible scheduling",
      "Progress tracking",
      "Personalized care plan",
    ],
    highlighted: false,
  },
]

const individualSessions = [
  { id: "therapy-in-person", name: "Individual Therapy (In-Person)", duration: "50 minutes", price: 3000 },
  { id: "therapy-virtual", name: "Individual Therapy (Virtual)", duration: "50 minutes", price: 2000 },
  { id: "couples-in-person", name: "Couples Therapy (In-Person)", duration: "90 minutes", price: 5000 },
  { id: "couples-virtual", name: "Couples Therapy (Virtual)", duration: "90 minutes", price: 4500 },
  { id: "family-in-person", name: "Family Therapy (In-Person)", duration: "120 minutes", price: 6000 },
  { id: "family-virtual", name: "Family Therapy (Virtual)", duration: "120 minutes", price: 5500 },
  { id: "student-counselling", name: "Student Counselling (Virtual)", duration: "50 minutes", price: 1500 },
]

const psychometricsServices = [
  { id: "simple-assessment", name: "Simple Assessment", price: 4500 },
  { id: "diagnostic-testing", name: "Diagnostic Testing", price: 5000 },
  { id: "questionnaires", name: "Questionnaires", price: 3000 },
  { id: "clinical-interview", name: "Clinical Interview", price: 3000 },
  { id: "basic-diagnostics", name: "Basic Diagnostics Screening", price: 3000 },
  { id: "full-evaluation", name: "Full Psychological Evaluation Report", price: 6000 },
]

export function PricingCalculator() {
  const [selectedItems, setSelectedItems] = useState<{ [key: string]: number }>({})

  const handleItemChange = (id: string, quantity: number) => {
    setSelectedItems((prev) => {
      const newState = { ...prev }
      if (quantity <= 0) {
        delete newState[id]
      } else {
        newState[id] = quantity
      }
      return newState
    })
  }

  const calculateTotal = () => {
    let total = 0

    Object.keys(selectedItems).forEach((itemId) => {
      const plan = pricingPlans.find((p) => p.id === itemId)
      const session = individualSessions.find((s) => s.id === itemId)
      const psychometric = psychometricsServices.find((s) => s.id === itemId)

      const item = plan || session || psychometric
      if (item) {
        total += item.price * selectedItems[itemId]
      }
    })

    return total
  }

  const whatsappLink =
    "https://wa.me/254718123456?text=Hi%20Lockeroom%20Wellness,%20I%20would%20like%20to%20inquire%20about%20corporate%20rates."
  const emailLink = "mailto:Sales@lockeroomwellness.com?subject=Corporate%20Rates%20Inquiry"

  const hasSelectedItems = Object.keys(selectedItems).length > 0

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Transparent, Affordable Pricing
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-balance">
              Mental health care that fits your budget. Choose the plan that works best for you.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Pricing Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Monthly Packages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Counselling Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => handleItemChange(plan.id, selectedItems[plan.id] ? selectedItems[plan.id] + 1 : 1)}
                  className={`rounded-lg border-2 transition-all text-left cursor-pointer overflow-hidden ${
                    selectedItems[plan.id]
                      ? "border-primary bg-primary/5 md:scale-105 shadow-lg"
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                >
                  <div className="p-8">
                    {plan.highlighted && (
                      <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                        MOST POPULAR
                      </div>
                    )}

                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                    <div className="mb-6">
                      <span className="text-5xl font-bold text-foreground">{plan.price.toLocaleString()}</span>
                      <span className="text-muted-foreground ml-2">
                        {plan.currency} {plan.period}
                      </span>
                    </div>

                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {selectedItems[plan.id] && (
                      <div className="flex items-center gap-3 pt-4 border-t border-border">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleItemChange(plan.id, Math.max(0, (selectedItems[plan.id] || 0) - 1))
                          }}
                          className="p-2 rounded hover:bg-secondary transition-colors"
                        >
                          <Minus className="w-4 h-4 text-foreground" />
                        </button>
                        <span className="text-foreground font-semibold min-w-8 text-center">
                          {selectedItems[plan.id]}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleItemChange(plan.id, (selectedItems[plan.id] || 0) + 1)
                          }}
                          className="p-2 rounded hover:bg-secondary transition-colors"
                        >
                          <Plus className="w-4 h-4 text-foreground" />
                        </button>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Individual Sessions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-2">Individual Sessions</h2>
            <p className="text-muted-foreground mb-6">
              Pay per session for flexible, personalized mental health support.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {individualSessions.map((session) => (
                <div
                  key={session.id}
                  className={`bg-card border rounded-lg p-6 transition-all cursor-pointer hover:border-primary/50 ${
                    selectedItems[session.id] ? "border-primary bg-primary/5" : "border-border"
                  }`}
                  onClick={() =>
                    handleItemChange(session.id, selectedItems[session.id] ? selectedItems[session.id] + 1 : 1)
                  }
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{session.name}</h4>
                      <p className="text-sm text-muted-foreground">{session.duration}</p>
                    </div>
                    <span className="text-xl font-bold text-primary">KES {session.price.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleItemChange(session.id, Math.max(0, (selectedItems[session.id] || 0) - 1))
                      }}
                      className="p-2 rounded hover:bg-secondary transition-colors"
                    >
                      <Minus className="w-4 h-4 text-foreground" />
                    </button>
                    <span className="text-foreground font-semibold min-w-8 text-center">
                      {selectedItems[session.id] || 0}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleItemChange(session.id, (selectedItems[session.id] || 0) + 1)
                      }}
                      className="p-2 rounded hover:bg-secondary transition-colors"
                    >
                      <Plus className="w-4 h-4 text-foreground" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Psychometric Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-2">Psychometric Assessment Services</h2>
            <p className="text-muted-foreground mb-6">
              Comprehensive psychological evaluations to support your mental health journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {psychometricsServices.map((service) => (
                <div
                  key={service.id}
                  className={`bg-card border rounded-lg p-6 transition-all cursor-pointer hover:border-primary/50 ${
                    selectedItems[service.id] ? "border-primary bg-primary/5" : "border-border"
                  }`}
                  onClick={() =>
                    handleItemChange(service.id, selectedItems[service.id] ? selectedItems[service.id] + 1 : 1)
                  }
                >
                  <h4 className="text-lg font-semibold text-foreground mb-4">{service.name}</h4>
                  <p className="text-xl font-bold text-primary mb-4">KES {service.price.toLocaleString()}</p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleItemChange(service.id, Math.max(0, (selectedItems[service.id] || 0) - 1))
                      }}
                      className="p-2 rounded hover:bg-secondary transition-colors"
                    >
                      <Minus className="w-4 h-4 text-foreground" />
                    </button>
                    <span className="text-foreground font-semibold min-w-8 text-center">
                      {selectedItems[service.id] || 0}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleItemChange(service.id, (selectedItems[service.id] || 0) + 1)
                      }}
                      className="p-2 rounded hover:bg-secondary transition-colors"
                    >
                      <Plus className="w-4 h-4 text-foreground" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Total Summary */}
          {hasSelectedItems && (
            <div className="bg-primary/10 border-2 border-primary rounded-lg p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-muted-foreground mb-2">Your Total</p>
                  <p className="text-5xl font-bold text-primary">KES {calculateTotal().toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground mt-2">inclusive of all selected items</p>
                </div>
                <Link
                  href="/book"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Proceed to Booking
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Corporate Rates */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/10 border-2 border-primary rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-3">Corporate Rates</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Looking for bulk pricing or corporate wellness packages? We offer customized rates subject to quotation
              for organizations of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Get Quote via WhatsApp
              </a>
              <a
                href={emailLink}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <Mail className="w-5 h-5" />
                Get Quote via Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Pricing FAQ</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Can I switch between packages?",
                a: "Yes, you can upgrade or downgrade your package anytime. Changes take effect in your next billing cycle.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept M-Pesa, bank transfers, credit cards, and other digital payment methods for your convenience.",
              },
              {
                q: "Can I combine sessions and packages?",
                a: "Absolutely. Many clients mix package sessions with individual sessions based on their needs.",
              },
              {
                q: "Do unused sessions roll over?",
                a: "Package sessions are valid for the calendar month. We recommend planning sessions to maximize your benefits.",
              },
              {
                q: "Are there discounts for annual billing?",
                a: "Yes, we offer special rates for annual commitments. Contact our team to discuss options tailored to your situation.",
              },
              {
                q: "Do you offer corporate packages?",
                a: "Yes, we provide customized corporate wellness solutions. Contact us for a quote tailored to your organization's needs.",
              },
            ].map((item, index) => (
              <details key={index} className="bg-card border border-border rounded-lg p-6 cursor-pointer group">
                <summary className="font-semibold text-foreground flex items-center justify-between">
                  {item.q}
                  <span className="text-primary group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Ready to Invest in Your Mental Health?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
            Choose a plan that works for you and start your journey to wellness today.
          </p>
          {!hasSelectedItems && (
            <p className="text-primary-foreground/75">Start by selecting items above to proceed.</p>
          )}
        </div>
      </section>
    </main>
  )
}
