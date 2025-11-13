import { WORKFLOW_STEPS } from '@/components/landing/constants'
import { Badge } from '@/components/ui/badge'

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="neutral">4-step journey</Badge>
          <h2 className="section-title mt-6">Send money in minutes</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            A user flow modeled on Remitly’s proven playbook — get verified, choose corridor, fund instantly, and keep
            recipients informed at every stage.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {WORKFLOW_STEPS.map((step, index) => (
            <div key={step.step} className="relative">
              <div className="card flex h-full flex-col items-center gap-4 p-8 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-blue-600 text-white text-lg font-semibold">
                  {step.step}
                </span>
                <h3 className="text-xl font-semibold text-dark">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
              {index < WORKFLOW_STEPS.length - 1 && (
                <div className="absolute top-1/2 right-[-16px] hidden h-[2px] w-8 -translate-y-1/2 bg-gradient-to-r from-primary to-transparent md:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

