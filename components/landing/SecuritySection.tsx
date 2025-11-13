import { SECURITY_FEATURES } from '@/components/landing/constants'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ShieldCheck } from 'lucide-react'
import Link from 'next/link'

export function SecuritySection() {
  return (
    <section id="security" className="bg-gray-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <Badge className="bg-white/10 text-blue-100">compliance-first architecture</Badge>
            <h2 className="text-4xl font-semibold md:text-5xl">
              Layered compliance, risk intelligence, and operational oversight built in
            </h2>
            <p className="text-lg text-blue-100">
              QuickBank brings enterprise-grade security and regulatory tooling so you can expand confidently while
              keeping every transfer protected.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {SECURITY_FEATURES.map((feature) => (
                <div key={feature.heading} className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
                  <h3 className="text-lg font-semibold">{feature.heading}</h3>
                  <p className="mt-2 text-sm text-blue-100">{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button asChild>
                <Link href="/support">
                  Talk to compliance <ShieldCheck size={18} />
                </Link>
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Download security overview
              </Button>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative mx-auto max-w-lg">
              <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-blue-500/30 via-primary/30 to-teal-400/20 blur-2xl"></div>
              <div className="relative space-y-6 rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
                <div className="rounded-3xl border border-white/10 bg-white/10 p-6">
                  <p className="text-sm text-blue-100">Certifications</p>
                  <p className="mt-2 text-2xl font-semibold">
                    PCI-DSS • SOC 2 • ISO 27001 • PSD2 • GDPR • FCA • FinCEN • MAS
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: 'Risk checks per transfer', value: '52' },
                    { label: 'Screenings / day', value: '1.2M' },
                    { label: 'Fraud reduction YoY', value: '38%' },
                    { label: 'Avg. resolution time', value: '< 15 min' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
                      <p className="text-xs uppercase tracking-[0.3em] text-blue-200">{item.label}</p>
                      <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 p-6">
                  <p className="text-sm text-blue-100">Live monitoring</p>
                  <p className="mt-2 text-sm text-blue-100">
                    Splunk, Datadog, and SIEM pipelines provide 24/7 observability for AML and operational teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

