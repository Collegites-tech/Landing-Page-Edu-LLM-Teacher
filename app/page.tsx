import { Header } from "@/components/header"
import HeroSection from "@/components/hero-section"
import { WhyHowWhoSection } from "@/components/why-how-who-section"
import { ContributorTiersSection } from "@/components/contributor-tiers-section"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <WhyHowWhoSection />
        <ContributorTiersSection />
      </main>
      <Footer />
    </div>
  )
}
