import { CORE_FEATURES } from '@/components/landing/constants'
import { Badge } from '@/components/ui/badge'

export function FeatureGrid() {
  return (
    <section id="features" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Everything remitters expect — and more</Badge>
          <h2 className="section-title mt-6">Reimagine cross-border experiences</h2>
          <p className="text-lg text-gray-600">
            QuickBank fuses Remitly-grade features with modular compliance, wallets, and payout infrastructure built for
            modern fintech teams and ambitious senders.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {CORE_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/80 p-8 shadow-lg shadow-blue-500/5 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
              ></div>
              <div className="relative space-y-5">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <feature.icon size={28} />
                </span>
                <h3 className="text-2xl font-semibold text-dark">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

