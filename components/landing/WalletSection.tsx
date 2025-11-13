import { WALLET_METRICS } from '@/components/landing/constants'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Building2, Clock3, Shield, Users } from 'lucide-react'

export function WalletSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="space-y-8">
          <Badge variant="neutral">wallet & payouts</Badge>
          <h2 className="section-title">Operate like a global bank without the overhead</h2>
          <p className="text-lg text-gray-600">
            QuickBank’s wallet orchestrates balances, rate conversions, and settlement controls so you can launch new
            corridors, manage limits, and delight recipients with flexible delivery options.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: Building2,
                title: 'Local payout rails',
                description: 'Connect to bank accounts, cards, cash pickup, and mobile wallets with a single integration.',
              },
              {
                icon: Clock3,
                title: 'Predictive SLAs',
                description: 'Delivery-time forecasting with proactive notifications and rerouting controls.',
              },
              {
                icon: Users,
                title: 'Shared wallets',
                description: 'Family, SME, and partner wallets with customizable permissions and spending rules.',
              },
              {
                icon: Shield,
                title: 'Risk guardrails',
                description: 'Limits, spend controls, dual approval, and automated compliance reviews per corridor.',
              },
            ].map((item) => (
              <Card key={item.title} className="p-6">
                <item.icon className="text-primary" size={26} />
                <h3 className="mt-4 text-lg font-semibold text-dark">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>

          <Button size="lg" variant="outline">
            Explore wallet APIs
          </Button>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-primary/30 via-blue-500/15 to-purple-500/20 blur-3xl"></div>
          <Card className="relative rounded-[32px] border-0 bg-white/90 p-10 shadow-2xl">
            <div className="rounded-3xl bg-gradient-to-r from-primary to-blue-600 px-6 py-5 text-white shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-100">Total wallet value</p>
                  <p className="text-4xl font-bold">$27,540.00</p>
                </div>
                <span className="rounded-full bg-white/20 px-4 py-1 text-xs font-semibold">+4.6% this week</span>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {WALLET_METRICS.map((metric) => (
                <Card key={metric.currency} className="border border-gray-100 px-5 py-4 shadow-sm">
                  <p className="text-sm text-gray-500">Wallet balance</p>
                  <div className="mt-2 flex items-end justify-between">
                    <span className="text-xl font-semibold text-dark">{metric.amount}</span>
                    <span className="text-xs font-semibold text-emerald-500">{metric.change}</span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">{metric.currency}</p>
                </Card>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-dashed border-primary/30 bg-primary/5 p-6">
              <p className="text-sm font-semibold text-primary">Smart alert</p>
              <p className="mt-2 text-sm text-gray-600">
                Lock USD/EUR at 0.9150 now and save $62.10 on your upcoming Friday payouts.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

