import { SUPPORT_CHANNELS } from '@/components/landing/constants'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export function SupportSection() {
  return (
    <section id="support" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <Badge variant="neutral">Support that scales</Badge>
            <h2 className="section-title mt-6">Your team & your customers, backed 24/7</h2>
            <p className="text-lg text-gray-600">
              QuickBank mirrors Remitly’s human-first support model with advanced tooling for compliance, fraud, and
              customer happiness.
            </p>

            <div className="mt-10 space-y-4">
              {SUPPORT_CHANNELS.map((channel) => (
                <div key={channel.title} className="flex gap-4 rounded-3xl border border-gray-100 bg-gray-50/80 p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <channel.icon size={20} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-dark">{channel.title}</h3>
                    <p className="text-sm text-gray-600">{channel.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/support">Open support center</Link>
              </Button>
              <Button variant="outline">Review SLA playbook</Button>
            </div>
          </div>

          <Card className="rounded-[32px] border-0 bg-gradient-to-br from-primary/10 via-white to-blue-100 p-10">
            <h3 className="text-2xl font-semibold text-dark">Customer-first operations</h3>
            <p className="mt-2 text-sm text-gray-600">
              Every transfer includes:
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              {[
                'Recipient SMS & WhatsApp alerts',
                'Real-time transfer timeline with shareable link',
                'Localized payout instructions & reminders',
                '24/7 escalations to compliance teams',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-3xl border border-primary/30 bg-primary/5 p-6 text-sm text-gray-600">
              <p className="font-semibold text-primary">Operational cockpit</p>
              <p className="mt-2">
                Support agents view KYC data, transaction history, device fingerprints, and SLA timers in one timeline.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

