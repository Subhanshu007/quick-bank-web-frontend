import { TESTIMONIALS } from '@/components/landing/constants'
import { Badge } from '@/components/ui/badge'

export function TestimonialsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="neutral">Voices from the QuickBank community</Badge>
          <h2 className="section-title mt-6">Loved by senders, recipients, and operations teams</h2>
          <p className="text-lg text-gray-600">
            Every promise is backed by real outcomes — speed, transparency, and support that follows through.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-[28px] border border-gray-100 bg-gradient-to-br from-white via-white to-blue-50 p-8 shadow-lg shadow-blue-500/5"
            >
              <p className="text-lg font-medium text-gray-700">“{testimonial.quote}”</p>
              <div className="mt-6 border-t border-gray-200 pt-6 text-sm">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

