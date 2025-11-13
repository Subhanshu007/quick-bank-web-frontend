import type { Metadata } from 'next'
import { LoginPage } from '@/components/auth/LoginPage'

export const metadata: Metadata = {
  title: 'Sign In',
  description:
    'Access your QuickBank account to manage global transfers, monitor delivery timelines, and stay on top of live exchange rates.',
  alternates: {
    canonical: '/login',
  },
}

export default function Login() {
  return <LoginPage />
}
