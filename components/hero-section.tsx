import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-background">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:min-h-[calc(100vh-4rem)] lg:px-0 lg:py-0">
        <div className="grid min-h-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-0">
          {/* Left Content */}
          <div className="flex flex-col justify-center gap-8 lg:pr-12">
            <div className="flex flex-col gap-4">
              <p className="font-serif text-sm uppercase tracking-[0.2em] text-primary">Lockeroom Wellness</p>
              <h1 className="font-serif text-5xl font-normal leading-[0.95] tracking-tight text-foreground text-balance md:text-7xl lg:text-8xl">
                Discover
                <br />
                Inner Peace
              </h1>
              <p className="font-serif text-2xl leading-tight text-foreground/80 text-balance md:text-3xl">
                Embrace Healing Today
              </p>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Meet with trusted professionals, including Loise Brenda, in a private and compassionate space created for your wellbeing.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md border border-primary px-8 py-4 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Meet Loise Brenda
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden min-h-[calc(100vh-4rem)] lg:block">
            <div className="relative h-full min-h-[calc(100vh-4rem)] overflow-hidden bg-secondary">
              <Image
                src="/loise-brenda-hero.jpeg"
                alt="Loise Brenda seated outdoors in a peaceful wellness setting"
                fill
                sizes="50vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-x-8 bottom-8 rounded-md bg-background/95 p-5 shadow-lg backdrop-blur-sm">
                <p className="font-serif text-xl text-foreground">A calmer space starts here.</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Private, compassionate care from professionals who understand.</p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[24rem] overflow-hidden bg-secondary lg:hidden">
            <Image
              src="/loise-brenda-hero.jpeg"
              alt="Loise Brenda seated outdoors in a peaceful wellness setting"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-x-5 bottom-5 rounded-md bg-background/95 p-4 shadow-lg backdrop-blur-sm">
              <p className="font-serif text-lg text-foreground">A calmer space starts here.</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Private, compassionate care for your wellbeing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
