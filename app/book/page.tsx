"use client"

import { useState } from "react"
import { ChevronRight, Calendar, Clock, User, DollarSign } from "lucide-react"
import Image from "next/image"
import { professionals as allProfessionals } from "@/lib/professionals"

type BookingStep = "professional" | "date" | "time" | "details" | "confirmation"

interface BookingData {
  professional: string
  date: string
  time: string
  sessionType: string
  notes: string
}

const professionals = allProfessionals.map((p) => ({
  id: String(p.id),
  name: p.name,
  specialty: p.specialty,
  rate: p.hourlyRate,
  image: p.image,
}))

const sessionTypes = [
  { id: "initial", label: "Initial Consultation", duration: "60 minutes" },
  { id: "followup", label: "Follow-up Session", duration: "50 minutes" },
  { id: "couples", label: "Couples Session", duration: "60 minutes" },
]

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

export default function BookPage() {
  const [currentStep, setCurrentStep] = useState<BookingStep>("professional")
  const [bookingData, setBookingData] = useState<BookingData>({
    professional: "",
    date: "",
    time: "",
    sessionType: "initial",
    notes: "",
  })

  const selectedProfessional = professionals.find((p) => p.id === bookingData.professional)

  const handleNext = () => {
    const steps: BookingStep[] = ["professional", "date", "time", "details", "confirmation"]
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1])
    }
  }

  const handleBack = () => {
    const steps: BookingStep[] = ["professional", "date", "time", "details", "confirmation"]
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1])
    }
  }

  const handleConfirm = () => {
    // In a real app, this would submit to a backend
    console.log("Booking confirmed:", bookingData)
    alert("Booking confirmed! You'll receive a confirmation email shortly.")
  }

  return (
    <main className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Book Your Session</h1>
          <p className="text-lg text-muted-foreground">
            Schedule a session with a licensed mental health professional in just a few steps.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            {[
              { step: "professional", label: "Professional" },
              { step: "date", label: "Date" },
              { step: "time", label: "Time" },
              { step: "details", label: "Details" },
              { step: "confirmation", label: "Confirm" },
            ].map((item, index, array) => (
              <div key={item.step} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    currentStep === item.step
                      ? "bg-primary text-primary-foreground"
                      : array.findIndex((s) => s.step === currentStep) > index
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {index + 1}
                </div>
                <p className="text-sm font-medium text-foreground ml-2">{item.label}</p>
                {index < array.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-4 transition-colors ${
                      array.findIndex((s) => s.step === currentStep) > index ? "bg-primary" : "bg-border"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          {/* Step 1: Professional Selection */}
          {currentStep === "professional" && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Select a Professional</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {professionals.map((professional) => (
                  <button
                    key={professional.id}
                    onClick={() => setBookingData({ ...bookingData, professional: professional.id })}
                    className={`p-4 border-2 rounded-lg text-left transition-all ${
                      bookingData.professional === professional.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex gap-3 items-start">
                      {professional.image ? (
                        <Image
                          src={professional.image || "/placeholder.svg"}
                          alt={professional.name}
                          width={64}
                          height={64}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center text-xs text-muted-foreground text-center">
                          Photo Coming Soon
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{professional.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{professional.specialty}</p>
                        <p className="text-sm font-medium text-primary">${professional.rate}/hour</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Date Selection */}
          {currentStep === "date" && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Select a Date</h2>
              <div className="space-y-4">
                <input
                  type="date"
                  value={bookingData.date}
                  onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  min={new Date().toISOString().split("T")[0]}
                />
                {bookingData.date && (
                  <div className="bg-secondary rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">Selected Date:</p>
                    <p className="text-lg font-semibold text-foreground">
                      {new Date(bookingData.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Time Selection */}
          {currentStep === "time" && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Select a Time</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setBookingData({ ...bookingData, time: slot })}
                    className={`p-3 border-2 rounded-lg font-medium transition-all ${
                      bookingData.time === slot
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-foreground hover:border-primary"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Session Details */}
          {currentStep === "details" && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Session Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">Session Type</label>
                  <div className="space-y-2">
                    {sessionTypes.map((type) => (
                      <label
                        key={type.id}
                        className="flex items-center p-3 border border-border rounded-lg cursor-pointer hover:bg-secondary transition-colors"
                      >
                        <input
                          type="radio"
                          name="sessionType"
                          value={type.id}
                          checked={bookingData.sessionType === type.id}
                          onChange={(e) => setBookingData({ ...bookingData, sessionType: e.target.value })}
                          className="w-4 h-4"
                        />
                        <div className="ml-3 flex-1">
                          <p className="font-medium text-foreground">{type.label}</p>
                          <p className="text-sm text-muted-foreground">{type.duration}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="booking-notes" className="block text-sm font-semibold text-foreground mb-3">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    id="booking-notes"
                    value={bookingData.notes}
                    onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                    placeholder="Tell your therapist about what you'd like to discuss..."
                    aria-label="Additional notes for your booking"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    rows={4}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {currentStep === "confirmation" && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Confirm Your Booking</h2>
              <div className="space-y-4">
                {/* Professional */}
                <div className="bg-secondary rounded-lg p-4 flex items-start gap-4">
                  <User className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Professional</p>
                    <p className="font-semibold text-foreground">{selectedProfessional?.name}</p>
                    <p className="text-sm text-muted-foreground">{selectedProfessional?.specialty}</p>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="bg-secondary rounded-lg p-4 flex items-start gap-4">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Date & Time</p>
                    <p className="font-semibold text-foreground">
                      {new Date(bookingData.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "short",
                        day: "numeric",
                      })}{" "}
                      at {bookingData.time}
                    </p>
                  </div>
                </div>

                {/* Session Type */}
                <div className="bg-secondary rounded-lg p-4 flex items-start gap-4">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Session Type</p>
                    <p className="font-semibold text-foreground">
                      {sessionTypes.find((t) => t.id === bookingData.sessionType)?.label}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="bg-secondary rounded-lg p-4 flex items-start gap-4">
                  <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Session Cost</p>
                    <p className="font-semibold text-foreground">${selectedProfessional?.rate}</p>
                  </div>
                </div>

                {/* Notes */}
                {bookingData.notes && (
                  <div className="bg-secondary rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-2">Your Notes</p>
                    <p className="text-foreground italic">"{bookingData.notes}"</p>
                  </div>
                )}

                {/* Disclaimer */}
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <p className="text-sm text-foreground">
                    By confirming this booking, you agree to our terms of service and privacy policy. A confirmation
                    email will be sent to your registered email address.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === "professional"}
            className="px-6 py-3 border-2 border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Back
          </button>

          {currentStep !== "confirmation" ? (
            <button
              onClick={handleNext}
              disabled={
                (currentStep === "professional" && !bookingData.professional) ||
                (currentStep === "date" && !bookingData.date) ||
                (currentStep === "time" && !bookingData.time)
              }
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              Next <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleConfirm}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Confirm Booking
            </button>
          )}
        </div>
      </div>
    </main>
  )
}
