import { CTA_HIGHLIGHTS } from '@/components/landing/constants'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function CtaSection() {
  return (
    <section className="bg-gradient-to-r from-primary via-blue-600 to-indigo-600 py-24 text-white">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <h2 className="text-4xl font-semibold md:text-5xl">Launch your next corridor with QuickBank</h2>
        <p className="mt-4 text-lg text-blue-100">
          A framework inspired by the leading remittance platforms — everything you need to move money confidently
          across borders.
        </p>

        <div className="mt-10 grid gap-4 text-left text-sm sm:grid-cols-3">
          {CTA_HIGHLIGHTS.map((item) => (
            <div key={item} className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" variant="inverse">
            <Link href="/signup">Create account</Link>
          </Button>
          <Button size="lg" variant="ghost" className="border border-white/40 bg-white/10 text-white hover:bg-white/20">
            Schedule blueprint session
          </Button>
        </div>
      </div>
    </section>
  )
}

