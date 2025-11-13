import Link from 'next/link'
import { Send } from 'lucide-react'

const footerLinks = [
  {
    heading: 'Product',
    items: [
      { label: 'Features', href: '#features' },
      { label: 'Security', href: '#security' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Roadmap', href: '#' },
    ],
  },
  {
    heading: 'Company',
    items: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
  {
    heading: 'Legal',
    items: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Compliance', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  },
]

export function LandingFooter() {
  return (
    <footer className="bg-dark py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-blue-600">
                <Send size={22} />
              </span>
              <span className="text-xl font-semibold">QuickBank</span>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Fully compliant remittance infrastructure inspired by the best in the industry — fast payouts, price
              guarantees, and global coverage.
            </p>
          </div>

          {footerLinks.map((column) => (
            <div key={column.heading}>
              <h3 className="text-lg font-semibold">{column.heading}</h3>
              <ul className="mt-6 space-y-3 text-sm text-gray-400">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="transition hover:text-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-gray-700 pt-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} QuickBank. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-primary">
              Twitter
            </Link>
            <Link href="#" className="hover:text-primary">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-primary">
              Facebook
            </Link>
            <Link href="#" className="hover:text-primary">
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

