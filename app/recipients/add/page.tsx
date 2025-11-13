'use client'

import Link from 'next/link'
import { ArrowLeft, AlertCircle } from 'lucide-react'
import { useState } from 'react'

export default function AddRecipient() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    country: 'GB',
    fullName: '',
    accountType: 'bank',
    bankName: '',
    accountNumber: '',
    routingNumber: '',
    swiftCode: '',
    mobileNumber: '',
    relationship: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link href="/recipients" className="text-gray-600 hover:text-primary transition mr-6 transform hover:scale-110">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Add Recipient</h1>
        </div>
      </header>

      {/* Stepper */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition ${step >= s ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}>
                  {s}
                </div>
                {s < 3 && (
                  <div className={`flex-1 h-1 mx-2 rounded ${step > s ? 'bg-primary' : 'bg-gray-200'}`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-dark mb-6">Recipient Details</h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">Country</label>
                <select name="country" value={formData.country} onChange={handleChange} className="input-field">
                  <option value="GB">🇬🇧 United Kingdom</option>
                  <option value="CA">🇨🇦 Canada</option>
                  <option value="AU">🇦🇺 Australia</option>
                  <option value="US">🇺🇸 United States</option>
                  <option value="IN">🇮🇳 India</option>
                  <option value="PH">🇵🇭 Philippines</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark mb-2">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark mb-2">Relationship</label>
                <select name="relationship" value={formData.relationship} onChange={handleChange} className="input-field">
                  <option value="">Select relationship</option>
                  <option value="family">Family Member</option>
                  <option value="friend">Friend</option>
                  <option value="colleague">Colleague</option>
                  <option value="business">Business Associate</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg flex gap-3">
                <AlertCircle className="text-primary flex-shrink-0" size={20} />
                <p className="text-sm text-gray-700">Make sure you have the correct name and account details. Double-check spelling and numbers.</p>
              </div>

              <div className="flex gap-4">
                <button onClick={() => setStep(2)} className="btn-primary">
                  Continue
                </button>
                <Link href="/recipients" className="btn-secondary">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        )}

        {/* Step 2: Account Info */}
        {step === 2 && (
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-dark mb-6">Bank Account Details</h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">Account Type</label>
                <select name="accountType" value={formData.accountType} onChange={handleChange} className="input-field">
                  <option value="bank">Bank Account</option>
                  <option value="mobile">Mobile Wallet</option>
                  <option value="card">Debit Card</option>
                </select>
              </div>

              {formData.accountType === 'bank' && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">Bank Name</label>
                    <input
                      type="text"
                      name="bankName"
                      value={formData.bankName}
                      onChange={handleChange}
                      placeholder="e.g., Barclays Bank"
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">Account Number</label>
                    <input
                      type="text"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleChange}
                      placeholder="e.g., 12345678"
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">Routing Number</label>
                    <input
                      type="text"
                      name="routingNumber"
                      value={formData.routingNumber}
                      onChange={handleChange}
                      placeholder="e.g., 021000021"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-dark mb-2">SWIFT Code</label>
                    <input
                      type="text"
                      name="swiftCode"
                      value={formData.swiftCode}
                      onChange={handleChange}
                      placeholder="e.g., BARCGB22"
                      className="input-field"
                    />
                  </div>
                </>
              )}

              {formData.accountType === 'mobile' && (
                <div>
                  <label className="block text-sm font-semibold text-dark mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="+44 1234 567890"
                    className="input-field"
                    required
                  />
                </div>
              )}

              <div className="flex gap-4">
                <button onClick={() => setStep(3)} className="btn-primary">
                  Review Details
                </button>
                <button onClick={() => setStep(1)} className="btn-secondary">
                  Back
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3: Review */}
        {step === 3 && (
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-dark mb-6">Review & Confirm</h2>

            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Name</p>
                <p className="font-bold text-gray-900">{formData.fullName}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Country</p>
                <p className="font-bold text-gray-900">{formData.country}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Bank</p>
                <p className="font-bold text-gray-900">{formData.bankName}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Account Number</p>
                <p className="font-mono text-gray-900">****{formData.accountNumber.slice(-4)}</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-8">
              <p className="text-sm text-blue-800">
                ✓ Please verify all details are correct before confirming. You can edit this recipient later if needed.
              </p>
            </div>

            <div className="flex gap-4">
              <button onClick={() => setStep(4)} className="btn-primary">
                Save Recipient
              </button>
              <button onClick={() => setStep(2)} className="btn-secondary">
                Back
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <div className="card p-8 text-center">
            <div className="text-5xl mb-4">✓</div>
            <h2 className="text-2xl font-bold text-dark mb-2">Recipient Added!</h2>
            <p className="text-gray-600 mb-8">You can now send money to {formData.fullName}.</p>

            <div className="flex gap-4 flex-col sm:flex-row">
              <Link href="/send-money" className="btn-primary">
                Send Money Now
              </Link>
              <Link href="/recipients" className="btn-secondary">
                View All Recipients
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
