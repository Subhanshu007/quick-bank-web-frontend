import { HERO_FEATURE_TAGS, HERO_STATS } from '@/components/landing/constants'
import { HeroTransferCard } from '@/components/landing/HeroTransferCard'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,102,255,0.12),_transparent_60%)]"></div>
      <div className="pointer-events-none absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-blue-300/40 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-48 -right-24 h-[520px] w-[520px] rounded-full bg-indigo-300/40 blur-[160px]"></div>

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col justify-center gap-10 px-4 pb-16 pt-28 sm:px-6 lg:flex-row lg:items-center lg:gap-14 lg:pb-20 lg:pt-32">
        <div className="flex-1 space-y-8">
          <Badge className="bg-primary/10 text-primary">Now supporting 300K+ pickup locations</Badge>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl md:text-[58px] md:leading-[1.05]">
            Send money with <span className="gradient-text">Express reliability</span> and no hidden fees
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Choose Express for near-instant payouts or Economy for the best rates. Lock your price, track delivery in
            real time, and keep loved ones informed at every step — just like Remitly & TapTap.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/signup">
                Start sending now <ArrowRight size={18} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Compare Express vs Economy
            </Button>
          </div>

          <ul className="grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
            {HERO_FEATURE_TAGS.map((feature) => (
              <li key={feature.label} className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-sm shadow-blue-500/10 backdrop-blur">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <feature.icon size={18} />
                </span>
                <span className="font-semibold">{feature.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <HeroTransferCard className="flex-1 max-w-xl lg:ml-auto" />
      </div>

      <div className="border-y border-gray-100/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-4 py-6 text-sm text-gray-500 sm:px-6 lg:px-8">
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-start">
              <span className="text-3xl font-semibold text-primary md:text-4xl">{stat.value}</span>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

