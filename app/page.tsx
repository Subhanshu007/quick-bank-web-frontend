import type { Metadata } from 'next'
import { HomePage } from '@/components/landing/HomePage'

export const metadata: Metadata = {
  title: 'Global Money Transfers & Wallets',
  description:
    'QuickBank delivers express and economy remittances, multi-currency wallets, and compliance-first infrastructure for senders and recipients worldwide.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'QuickBank — Send Money Worldwide with Confidence',
    description:
      'Move money across 150+ countries with live FX rates, real-time tracking, and fully compliant payout rails.',
    type: 'website',
    url: 'https://www.quickbank.com/',
  },
}

export default function Home() {
  return <HomePage />
}
