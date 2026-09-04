import Link from "next/link"

const whatsappLink =
  "https://wa.me/254702123456?text=Hi%20Lockeroom%20Wellness%2C%20I%27d%20like%20to%20talk%20to%20someone."

export default function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
          Huna Haja Kuvumilia Peke Yako
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
          Whether it's your first time considering therapy or you've been meaning to book for months, the first
          step is the hardest — and it's the one that matters most.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="bg-primary-foreground text-primary px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Book Your First Session
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            Chat With Us on WhatsApp
          </a>
        </div>
        <p className="text-sm text-primary-foreground/80 mt-6">
          Crisis support available now —{" "}
          <Link href="/emergency" className="underline">
            see Emergency Resources
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
