"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send your message.")
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Get in Touch</h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-balance">
              Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8">Contact Information</h2>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">support@lockeroomwellness.ke</p>
                  <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground">+254 702 123 456</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri, 8am-6pm EAT</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Office</h3>
                  <p className="text-muted-foreground">Nairobi, Kenya</p>
                  <p className="text-muted-foreground">Available across Kenya</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 8am - 6pm</p>
                  <p className="text-muted-foreground">Saturday: 10am - 4pm</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center" role="status" aria-live="polite">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-lg font-semibold text-green-900 mb-2">Thank you for reaching out!</p>
                    <p className="text-green-800">We've received your message and will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="billing">Billing Question</option>
                        <option value="professional">Professional Inquiry</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        rows={5}
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    {error && (
                      <p role="alert" className="text-sm text-destructive">
                        {error}
                      </p>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 active:opacity-75 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Send message to Lockeroom Wellness"
                    >
                      <Send className="w-5 h-5" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Find answers to common questions about our service.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How do I get started?",
                a: "Simply sign up on our platform, browse our network of professionals, and book your first session. It takes just a few minutes!",
              },
              {
                q: "Is my information secure?",
                a: "Yes. We use industry-standard encryption and security measures, and handle your personal and health information in compliance with Kenya's Data Protection Act, 2019, as registered with the Office of the Data Protection Commissioner.",
              },
              {
                q: "Can I change my therapist?",
                a: "Absolutely. You can browse other professionals and switch at any time if you feel a different match would be better.",
              },
              {
                q: "What if I need to cancel a session?",
                a: "You can cancel or reschedule sessions up to 24 hours before your appointment without penalty.",
              },
              {
                q: "Can I pay with M-Pesa?",
                a: "Yes. All sessions can be paid via M-Pesa. You'll get a confirmation instantly — no waiting on bank transfers.",
              },
              {
                q: "Will my employer or family find out I'm seeing a therapist?",
                a: "No. Sessions are confidential and protected under the Kenya Data Protection Act, 2019. Nothing is shared without your written consent, except where Kenyan law requires disclosure to prevent serious harm.",
              },
              {
                q: "Is online therapy really as effective as face-to-face?",
                a: "For many concerns — anxiety, stress, relationship issues, mild-to-moderate depression — yes. For crises or conditions needing in-person clinical assessment, we'll guide you to the right level of care, including in-person referral when needed.",
              },
              {
                q: "What if I can't afford ongoing sessions?",
                a: "Ask about sliding-scale pricing, or see our Emergency & Free Resources page for low-cost and free options in Nairobi, Mombasa, Kisumu, Eldoret, and Nakuru.",
              },
              {
                q: "Do you have therapists who speak Kiswahili or Sheng?",
                a: "Yes — you can filter by language when browsing professionals.",
              },
              {
                q: "Is there a crisis line?",
                a: "Yes. If you're in immediate danger, call 999 or Kenya Red Cross's 24/7 crisis line at 1199. For non-emergency support, our chatbot and Emergency Resources page list additional hotlines.",
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
    </main>
  )
}
