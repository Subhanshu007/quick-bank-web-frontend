'use client'

import Link from 'next/link'
import { Eye, EyeOff, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { AuthLayout } from '@/components/auth/AuthLayout'
import { AuthFooter } from '@/components/auth/AuthFooter'

const signupHighlights = [
  'Send to 150+ countries with Express or Economy speeds',
  'Create multi-currency wallets for family or business',
  'Built-in KYC, AML, and rate alerts for peace of mind',
] as const

export function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const passwordStrength = useMemo(
    () => ({
      hasLength: formData.password.length >= 8,
      hasUppercase: /[A-Z]/.test(formData.password),
      hasNumber: /[0-9]/.test(formData.password),
    }),
    [formData.password]
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Signup attempt:', formData)
  }

  return (
    <AuthLayout
      title="Let’s get you started"
      subtitle="Create your account to send, receive, and manage wallets globally."
      badge="Create account"
      leftContent={
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
            <ShieldCheck size={24} />
          </div>
          <h2 className="mt-8 text-3xl font-semibold leading-tight">Create your QuickBank account</h2>
          <p className="mt-4 text-blue-100">
            Join over 2M users already moving money globally with transparent fees and delivery guarantees.
          </p>
          <ul className="mt-10 space-y-4 text-sm text-blue-50/90">
            {signupHighlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/15">
                  <CheckCircle2 size={16} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      }
      footer={
        <>
          <div className="rounded-2xl border border-gray-200 bg-white/70 px-4 py-3 text-center text-sm text-gray-600">
            ✨ Join 2M+ users and start sending money instantly
          </div>
          <AuthFooter message="Already have an account?" actionHref="/login" actionLabel="Sign in" />
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-semibold text-gray-700">
              First name
            </label>
            <Input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-semibold text-gray-700">
              Last name
            </label>
            <Input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-gray-700">
            Email address
          </label>
          <Input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-semibold text-gray-700">
            Password
          </label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a strong password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-700">
            Confirm password
          </label>
          <div className="relative">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
          <p className="text-sm font-semibold text-gray-700">Password requirements</p>
          <div className="mt-2 space-y-1 text-xs">
            {[
              { satisfied: passwordStrength.hasLength, text: 'At least 8 characters' },
              { satisfied: passwordStrength.hasUppercase, text: 'One uppercase letter' },
              { satisfied: passwordStrength.hasNumber, text: 'One number' },
            ].map((item) => (
              <span key={item.text} className="flex items-center gap-2">
                <CheckCircle2 size={16} className={item.satisfied ? 'text-success' : 'text-gray-300'} />
                <span className={item.satisfied ? 'text-gray-700' : 'text-gray-500'}>{item.text}</span>
              </span>
            ))}
          </div>
        </div>

        <label className="flex items-start gap-3 text-sm text-gray-600">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/40"
            required
          />
          <span>
            I agree to the{' '}
            <Link href="#" className="font-semibold text-primary hover:text-blue-700">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="#" className="font-semibold text-primary hover:text-blue-700">
              Privacy Policy
            </Link>
          </span>
        </label>

        <Button type="submit" className="w-full" size="lg">
          Create Account
          <ArrowRight size={18} />
        </Button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">Or</span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gray-200 to-transparent"></div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="w-full text-sm font-semibold text-gray-700">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.889-2.126 5.413-5.044 5.972-2.918.560-5.534-.674-6.762-3.354m7.352-13.52c1.882.988 3.959.988 5.841 0M2.254 7.218A4.85 4.85 0 0 1 7.8 4.34a4.855 4.855 0 0 1 5.546 2.878" />
          </svg>
          <span className="hidden sm:inline">Google</span>
        </Button>
        <Button variant="outline" className="w-full text-sm font-semibold text-gray-700">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm3.6 10.5h-2.4v7h-2.4v-7H7.4v-2h1.4V7c0-1.1.3-2.8 2.8-2.8h2.2v2h-1.5c-.3 0-.4.1-.4.5v1.3h2l-.4 2z" />
          </svg>
          <span className="hidden sm:inline">Facebook</span>
        </Button>
      </div>
    </AuthLayout>
  )
}

