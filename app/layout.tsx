import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://www.quickbank.com'
const siteName = 'QuickBank'
const siteDescription =
  'QuickBank delivers express and economy remittances, multi-currency wallets, and compliance-first infrastructure for global senders and recipients.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Global Money Transfers & Wallet Infrastructure`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'international money transfer',
    'remittance',
    'global payments',
    'multi-currency wallet',
    'cross-border payments',
    'QuickBank',
  ],
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName,
    title: `${siteName} — Send Money Worldwide with Confidence`,
    description: siteDescription,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} — Seamless Cross-Border Money Movement`,
    description: siteDescription,
    creator: '@QuickBank',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Finance',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0066FF',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-50 font-sans text-gray-900 antialiased">
        <div className="flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  )
}
