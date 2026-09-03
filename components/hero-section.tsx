import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center gap-8 lg:pr-12">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
                Mental Wellness for Everyone
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                Connect with licensed mental health professionals in a confidential, accessible platform designed to
                support your journey toward better mental health.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity text-center"
              >
                Start Your Journey
              </Link>
              <Link
                href="/about"
                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-colors text-center"
              >
                Learn More
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">500+</div>
                <p className="text-sm text-muted-foreground">Licensed Professionals</p>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-primary">4.9★</div>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block">
            <div className="relative overflow-hidden rounded-[2rem] bg-secondary p-3 shadow-sm">
              <Image
                src="/professional-therapist-woman.png"
                alt="A Lockeroom Wellness therapist ready to listen"
                width={640}
                height={760}
                className="h-[34rem] w-full rounded-[1.5rem] object-cover object-top"
                priority
              />
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-background/95 p-5 shadow-lg backdrop-blur-sm">
                <p className="text-sm font-semibold text-primary">A calmer space starts here</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Private, compassionate care from professionals who understand.</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
