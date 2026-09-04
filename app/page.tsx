import HeroSection from "@/components/hero-section"
import ServicesOverview from "@/components/services-overview"
import FeaturedProfessionals from "@/components/featured-professionals"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <FeaturedProfessionals />
      <CTASection />
    </main>
  )
}
