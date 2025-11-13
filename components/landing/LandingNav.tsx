import Link from 'next/link'
import { NAV_LINKS } from '@/components/landing/constants'
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'

export function LandingNav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-white/70 shadow-[0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-blue-600 shadow-lg shadow-blue-500/25">
            <Send className="text-white" size={22} />
          </span>
          <span className="text-2xl font-semibold text-gray-900">QuickBank</span>
        </div>

        <div className="hidden items-center gap-10 text-sm font-medium text-gray-600 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative transition hover:text-primary after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-primary after:to-blue-600 after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className="text-sm font-semibold text-primary transition hover:text-blue-700">
            Sign in
          </Link>
          <Button asChild size="sm">
            <Link href="/signup">Create account</Link>
          </Button>
        </div>

        <Button className="md:hidden" size="sm" variant="outline">
          Join QuickBank
        </Button>
      </div>
    </nav>
  )
}

