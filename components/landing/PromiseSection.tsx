import { QUICKBANK_PROMISES } from '@/components/landing/constants'
import { Badge } from '@/components/ui/badge'

export function PromiseSection() {
  return (
    <section id="promises" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline">QuickBank Promise</Badge>
          <h2 className="section-title mt-6">Built to mirror the commitments senders love</h2>
          <p className="text-lg text-gray-600">
            Inspired by Remitly’s delivery promises and loyalty perks, QuickBank layers in price locks, transparent fees,
            and referral rewards to keep your community growing.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {QUICKBANK_PROMISES.map((promise) => (
            <div
              key={promise.title}
              className="rounded-[28px] border border-gray-100/80 bg-gradient-to-br from-white via-white to-blue-50 p-8 shadow-lg shadow-blue-500/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <promise.icon size={20} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-dark">{promise.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{promise.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

