import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
          Ready to Prioritize Your Mental Health?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
          Take the first step toward better mental wellness. Connect with a licensed professional today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="bg-primary-foreground text-primary px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Book Your First Session
          </Link>
          <Link
            href="/contact"
            className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary-foreground hover:text-primary transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
