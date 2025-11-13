import { PRICING_PLANS } from '@/components/landing/constants'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function PricingSection() {
  return (
    <section id="pricing" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline">Transparent pricing</Badge>
          <h2 className="section-title mt-6">Choose the plan that fits your transfer velocity</h2>
          <p className="text-lg text-gray-600">
            All plans include Express & Economy transfers, live FX rates, security monitoring, and 24/7 multilingual
            support.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[28px] border bg-white p-10 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl ${
                plan.popular ? 'border-primary/60 ring-2 ring-primary/20' : 'border-gray-100'
              }`}
            >
              {plan.popular && (
                <span className="mb-4 inline-flex rounded-full bg-gradient-to-r from-primary to-blue-600 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                  Most loved
                </span>
              )}
              <h3 className="text-3xl font-semibold text-dark">{plan.name}</h3>
              <p className="mt-2 text-5xl font-bold text-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-text">
                {plan.fee}
              </p>
              <p className="text-sm text-gray-500">Minimum fee {plan.minimum}</p>
              <p className="mt-6 text-sm text-gray-600">{plan.description}</p>

              <ul className="mt-8 space-y-3 text-sm text-gray-700">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-primary to-blue-600 text-xs font-bold text-white">
                      ✓
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>

              <Button className="mt-10 w-full" size="lg" variant={plan.popular ? 'primary' : 'outline'}>
                {plan.popular ? 'Start Velocity trial' : 'Talk to sales'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

