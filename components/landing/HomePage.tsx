'use client'

import { LandingNav } from '@/components/landing/LandingNav'
import { HeroSection } from '@/components/landing/Hero'
import { PartnersMarquee } from '@/components/landing/PartnersMarquee'
import { FeatureGrid } from '@/components/landing/FeatureGrid'
import { PromiseSection } from '@/components/landing/PromiseSection'
import { WalletSection } from '@/components/landing/WalletSection'
import { HowItWorksSection } from '@/components/landing/HowItWorks'
import { SecuritySection } from '@/components/landing/SecuritySection'
import { TestimonialsSection } from '@/components/landing/TestimonialsSection'
import { PricingSection } from '@/components/landing/PricingSection'
import { SupportSection } from '@/components/landing/SupportSection'
import { CtaSection } from '@/components/landing/CtaSection'
import { LandingFooter } from '@/components/landing/Footer'

export function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-48 -right-56 h-[32rem] w-[32rem] rounded-full bg-blue-200/50 blur-3xl"></div>
        <div className="absolute -bottom-56 -left-48 h-[36rem] w-[36rem] rounded-full bg-indigo-300/50 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,102,255,0.08),_transparent_55%)]"></div>
      </div>

      <div className="relative z-10">
        <LandingNav />
        <main>
          <HeroSection />
          <PartnersMarquee />
          <FeatureGrid />
          <PromiseSection />
          <WalletSection />
          <HowItWorksSection />
          <SecuritySection />
          <TestimonialsSection />
          <PricingSection />
          <SupportSection />
          <CtaSection />
        </main>
        <LandingFooter />
      </div>
    </div>
  )
}

