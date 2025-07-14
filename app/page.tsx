"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ContributorTiersSection } from "@/components/contributor-tiers-section"
import { WhyHowWhoSection } from "@/components/why-how-who-section"
//import PointSystem from "@/components/point-system"
import CommunitySection from "@/components/CommunitySection"
//import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <WhyHowWhoSection />
         <CommunitySection />
        <ContributorTiersSection />
      </main>
      {/* <Footer /> */}
    </div>
  )
}
