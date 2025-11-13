'use client'

import Link from 'next/link'
import { Send, ArrowLeft } from 'lucide-react'
import { useState } from 'react'

export default function ForgotPassword() {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="w-full max-w-md z-10">
        <Link href="/login" className="flex items-center text-primary mb-8 hover:text-blue-700 font-semibold transition">
          <ArrowLeft size={20} className="mr-2" /> Back to Login
        </Link>

        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <Send className="text-white" size={32} />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">QuickBank</h1>
          <p className="text-gray-600 mt-3 text-lg">Reset your password</p>
        </div>

        {/* Step 1: Enter Email */}
        {step === 1 && (
          <div className="card p-8">
            <h2 className="text-xl font-bold text-dark mb-4">Enter your email</h2>
            <p className="text-gray-600 text-sm mb-6">We&apos;ll send you instructions to reset your password.</p>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@example.com"
              className="input-field mb-6"
            />

            <button onClick={() => setStep(2)} className="btn-primary mb-4">
              Send Reset Code
            </button>
            <p className="text-center text-gray-600 text-sm">
              Remember your password?{' '}
              <Link href="/login" className="text-primary font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        )}

        {/* Step 2: Enter Code */}
        {step === 2 && (
          <div className="card p-8">
            <h2 className="text-xl font-bold text-dark mb-4">Verify your email</h2>
            <p className="text-gray-600 text-sm mb-6">Enter the 6-digit code sent to {email}</p>

            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value.slice(0, 6))}
              placeholder="000000"
              maxLength={6}
              className="input-field text-center text-2xl letter-spacing mb-6"
            />

            <button onClick={() => setStep(3)} className="btn-primary mb-4">
              Verify Code
            </button>

            <p className="text-center text-gray-600 text-sm">
              Didn&apos;t receive the code?{' '}
              <button className="text-primary font-semibold hover:underline">
                Resend
              </button>
            </p>
          </div>
        )}

        {/* Step 3: New Password */}
        {step === 3 && (
          <div className="card p-8">
            <h2 className="text-xl font-bold text-dark mb-4">Create new password</h2>
            <p className="text-gray-600 text-sm mb-6">Enter a strong password for your account.</p>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New password"
              className="input-field mb-4"
            />

            <input
              type="password"
              placeholder="Confirm password"
              className="input-field mb-6"
            />

            <button onClick={() => setStep(4)} className="btn-primary mb-4">
              Reset Password
            </button>
          </div>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <div className="card p-8 text-center">
            <div className="text-5xl mb-4">✓</div>
            <h2 className="text-xl font-bold text-dark mb-2">Password reset successful!</h2>
            <p className="text-gray-600 mb-6">Your password has been updated. You can now sign in with your new password.</p>

            <Link href="/login" className="btn-primary">
              Go to Login
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
