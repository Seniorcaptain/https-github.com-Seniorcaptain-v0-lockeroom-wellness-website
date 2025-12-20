import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
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

          {/* Right Visual - Botanical Element */}
          <div className="hidden lg:flex justify-center items-center relative h-96">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Decorative botanical background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl"></div>
              </div>

              {/* Plant illustration using SVG */}
              <svg
                viewBox="0 0 300 400"
                className="w-full h-full max-w-sm relative z-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Stem */}
                <path
                  d="M 150 400 Q 145 350 140 300 Q 135 250 140 200 Q 145 150 150 100"
                  stroke="oklch(0.4 0.08 100)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Left leaves */}
                <ellipse
                  cx="100"
                  cy="280"
                  rx="35"
                  ry="55"
                  fill="oklch(0.35 0.12 140)"
                  opacity="0.9"
                  transform="rotate(-35 100 280)"
                />
                <ellipse
                  cx="80"
                  cy="200"
                  rx="30"
                  ry="50"
                  fill="oklch(0.35 0.12 140)"
                  opacity="0.85"
                  transform="rotate(-40 80 200)"
                />
                <ellipse
                  cx="95"
                  cy="120"
                  rx="28"
                  ry="48"
                  fill="oklch(0.35 0.12 140)"
                  opacity="0.8"
                  transform="rotate(-30 95 120)"
                />

                {/* Right leaves */}
                <ellipse
                  cx="200"
                  cy="260"
                  rx="35"
                  ry="55"
                  fill="oklch(0.35 0.12 140)"
                  opacity="0.95"
                  transform="rotate(35 200 260)"
                />
                <ellipse
                  cx="220"
                  cy="180"
                  rx="30"
                  ry="50"
                  fill="oklch(0.35 0.12 140)"
                  opacity="0.9"
                  transform="rotate(40 220 180)"
                />
                <ellipse
                  cx="205"
                  cy="100"
                  rx="28"
                  ry="48"
                  fill="oklch(0.35 0.12 140)"
                  opacity="0.85"
                  transform="rotate(30 205 100)"
                />

                {/* Top leaf */}
                <ellipse
                  cx="150"
                  cy="50"
                  rx="25"
                  ry="45"
                  fill="oklch(0.35 0.12 140)"
                  opacity="0.9"
                  transform="rotate(0 150 50)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
