import { PARTNER_BRANDS } from '@/components/landing/constants'

export function PartnersMarquee() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 px-4 text-sm font-semibold uppercase tracking-[0.3em] text-gray-400 sm:px-6">
        {PARTNER_BRANDS.map((brand) => (
          <span
            key={brand}
            className="flex h-12 min-w-[160px] items-center justify-center rounded-2xl border border-dashed border-gray-200 px-6"
          >
            {brand}
          </span>
        ))}
      </div>
    </section>
  )
}

