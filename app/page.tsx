import HeroSection from "@/components/hero-section"
import ServicesOverview from "@/components/services-overview"
import StrugglesSection from "@/components/struggles-section"
import FirstSessionSection from "@/components/first-session-section"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <StrugglesSection />
      <FirstSessionSection />
      <CTASection />
    </main>
  )
}
