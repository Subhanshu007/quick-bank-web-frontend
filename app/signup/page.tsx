import type { Metadata } from 'next'
import { SignupPage } from '@/components/auth/SignupPage'

export const metadata: Metadata = {
  title: 'Create Account',
  description:
    'Join QuickBank to move money globally with transparent FX, delivery guarantees, and multi-currency wallet controls.',
  alternates: {
    canonical: '/signup',
  },
}

export default function Signup() {
  return <SignupPage />
}
