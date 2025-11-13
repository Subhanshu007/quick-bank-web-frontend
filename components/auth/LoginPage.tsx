'use client'

import Link from 'next/link'
import { Eye, EyeOff, ArrowRight, CheckCircle2, Send } from 'lucide-react'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { AuthLayout } from '@/components/auth/AuthLayout'
import { AuthFooter } from '@/components/auth/AuthFooter'

const trustPoints = [
  'Instant express or low-cost economy transfers',
  'Bank-grade security with 2FA and biometrics',
  'Track every step with real-time notifications',
] as const

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({ email: '', password: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempt:', formData)
  }

  return (
    <AuthLayout
      title="Sign in to QuickBank"
      subtitle="Manage your transfers, rate alerts, and trusted recipients in seconds."
      badge="Welcome back"
      leftContent={
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
            <Send size={24} />
          </div>
          <h2 className="mt-8 text-3xl font-semibold leading-tight">Welcome back to QuickBank</h2>
          <p className="mt-4 text-blue-100">
            Sign in to manage transfers, wallets, and favourite recipients across 150+ destination countries.
          </p>
          <ul className="mt-10 space-y-4 text-sm text-blue-50/90">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/15">
                  <CheckCircle2 size={16} />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      }
      footer={
        <>
          <div className="rounded-2xl border border-gray-200 bg-white/70 px-4 py-3 text-center text-sm text-gray-600">
            🔒 Your login is protected with bank-level encryption
          </div>
          <AuthFooter message="Don’t have an account?" actionHref="/signup" actionLabel="Sign up now" />
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-5">
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
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-semibold text-gray-700">
              Password
            </label>
            <Link href="/forgot-password" className="text-xs font-semibold text-primary hover:text-blue-700">
              Forgot?
            </Link>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
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

        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/40" />
          Remember me on this device
        </label>

        <Button type="submit" className="w-full" size="lg">
          Sign In
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
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.889-2.126 5.413-5.044 5.972-2.918.56-5.534-.674-6.762-3.354m7.352-13.52c1.882.988 3.959.988 5.841 0M2.254 7.218A4.85 4.85 0 0 1 7.8 4.34a4.855 4.855 0 0 1 5.546 2.878" />
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

