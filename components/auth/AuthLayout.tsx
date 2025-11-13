import React from 'react'

interface AuthLayoutProps {
  title: string
  subtitle: string
  badge?: string
  leftContent?: React.ReactNode
  children: React.ReactNode
  footer?: React.ReactNode
}

export function AuthLayout({ title, subtitle, badge, leftContent, children, footer }: AuthLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 right-0 h-80 w-80 rounded-full bg-blue-200/40 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-indigo-200/40 blur-[120px]"></div>
      </div>

      <div className="relative mx-auto flex min-h-screen w-full flex-col lg:flex-row">
        <aside className="relative hidden w-full max-w-xl flex-col justify-between bg-gradient-to-br from-primary via-blue-600 to-indigo-700 p-12 text-white lg:flex">
          {leftContent}
          <p className="text-xs text-blue-100/80">Zero setup fees, bank-grade security, and support in 18 languages.</p>
        </aside>

        <main className="flex w-full justify-center overflow-y-auto px-4 py-10 sm:px-6 lg:w-1/2 lg:px-14 max-h-[100dvh] lg:max-h-screen">
          <div className="w-full max-w-md space-y-8 py-4">
            <header className="space-y-3 text-center lg:text-left">
              <div>
                {badge ? (
                  <span className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    {badge}
                  </span>
                ) : null}
                <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
                <p className="text-sm text-gray-500">{subtitle}</p>
              </div>
            </header>

            <div className="rounded-3xl border border-white/60 bg-white/90 px-6 py-8 shadow-xl shadow-blue-500/10 backdrop-blur">
              {children}
            </div>

            {footer}
          </div>
        </main>
      </div>
    </div>
  )
}

