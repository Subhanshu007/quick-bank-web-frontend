'use client'

import Link from 'next/link'
import { ArrowLeft, Copy, Share2, Download, DollarSign } from 'lucide-react'
import { useState } from 'react'

export default function ReceiveMoney() {
  const [copied, setCopied] = useState(false)

  const accountDetails = {
    accountNumber: '1234567890',
    routingNumber: '021000021',
    bankName: 'QuickBank International',
    swiftCode: 'QBKAUS33',
    iban: 'US64QBKA0210000211234567890',
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link href="/dashboard" className="text-gray-600 hover:text-primary transition mr-6 transform hover:scale-110">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Receive Money</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl text-white p-8 mb-8">
          <h2 className="text-3xl font-bold mb-2">Receive Money Anytime</h2>
          <p className="text-blue-100">Share your account details with anyone to receive money from anywhere in the world.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Account Details */}
          <div className="card p-8">
            <h3 className="text-xl font-bold text-dark mb-6">Your Account Details</h3>

            <div className="space-y-6">
              {/* Account Holder */}
              <div>
                <p className="text-sm text-gray-600 mb-2">Account Holder Name</p>
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                  <p className="font-semibold text-gray-900">John Doe</p>
                </div>
              </div>

              {/* Account Number */}
              <div>
                <p className="text-sm text-gray-600 mb-2">Account Number</p>
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                  <p className="font-mono font-semibold text-gray-900">{accountDetails.accountNumber}</p>
                  <button
                    onClick={() => handleCopy(accountDetails.accountNumber)}
                    className="text-primary hover:text-blue-700 transition"
                  >
                    <Copy size={18} />
                  </button>
                </div>
              </div>

              {/* Routing Number */}
              <div>
                <p className="text-sm text-gray-600 mb-2">Routing Number</p>
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                  <p className="font-mono font-semibold text-gray-900">{accountDetails.routingNumber}</p>
                  <button
                    onClick={() => handleCopy(accountDetails.routingNumber)}
                    className="text-primary hover:text-blue-700 transition"
                  >
                    <Copy size={18} />
                  </button>
                </div>
              </div>

              {/* Swift Code */}
              <div>
                <p className="text-sm text-gray-600 mb-2">SWIFT Code</p>
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                  <p className="font-mono font-semibold text-gray-900">{accountDetails.swiftCode}</p>
                  <button
                    onClick={() => handleCopy(accountDetails.swiftCode)}
                    className="text-primary hover:text-blue-700 transition"
                  >
                    <Copy size={18} />
                  </button>
                </div>
              </div>

              {/* IBAN */}
              <div>
                <p className="text-sm text-gray-600 mb-2">IBAN</p>
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                  <p className="font-mono font-semibold text-gray-900 text-sm">{accountDetails.iban}</p>
                  <button
                    onClick={() => handleCopy(accountDetails.iban)}
                    className="text-primary hover:text-blue-700 transition ml-2"
                  >
                    <Copy size={18} />
                  </button>
                </div>
              </div>

              {/* Bank Name */}
              <div>
                <p className="text-sm text-gray-600 mb-2">Bank Name</p>
                <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                  <p className="font-semibold text-gray-900">{accountDetails.bankName}</p>
                </div>
              </div>
            </div>

            {copied && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                ✓ Copied to clipboard!
              </div>
            )}

            <div className="flex gap-3 mt-8">
              <button className="btn-secondary flex items-center justify-center">
                <Download size={18} className="mr-2" /> Save as PDF
              </button>
              <button className="btn-primary flex items-center justify-center">
                <Share2 size={18} className="mr-2" /> Share
              </button>
            </div>
          </div>

          {/* How to Receive */}
          <div>
            {/* Steps */}
            <div className="card p-8 mb-6">
              <h3 className="text-xl font-bold text-dark mb-6">How to Receive Money</h3>

              <div className="space-y-6">
                {[
                  {
                    step: '1',
                    title: 'Share Your Details',
                    desc: 'Copy and share your account details with the sender',
                  },
                  {
                    step: '2',
                    title: 'Sender Initiates Transfer',
                    desc: 'They send money to your account from their bank',
                  },
                  {
                    step: '3',
                    title: 'Funds Arrive',
                    desc: 'Money lands in your QuickBank account within 1-3 business days',
                  },
                  {
                    step: '4',
                    title: 'Get Notified',
                    desc: 'Receive instant notification when funds arrive',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Box */}
            <div className="card p-6 bg-blue-50 border-l-4 border-primary">
              <h4 className="font-bold text-dark mb-2">💡 Tips</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Use your full legal name as on your ID</li>
                <li>• Double-check account details before sharing</li>
                <li>• Standard transfers take 1-3 business days</li>
                <li>• International transfers may take longer</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Recent Deposits */}
        <div className="card p-8 mt-8">
          <h3 className="text-xl font-bold text-dark mb-6">Recent Deposits</h3>

          <div className="space-y-4">
            {[
              { id: 1, sender: 'Sarah Johnson', amount: '$200', date: 'Dec 15, 2024', status: 'completed' },
              { id: 2, sender: 'Mike Chen', amount: '$150', date: 'Dec 10, 2024', status: 'completed' },
              { id: 3, sender: 'Emma Davis', amount: '$300', date: 'Dec 5, 2024', status: 'completed' },
            ].map((deposit) => (
              <div key={deposit.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <DollarSign className="text-success" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{deposit.sender}</p>
                    <p className="text-sm text-gray-600">{deposit.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-success">{deposit.amount}</p>
                  <p className="text-xs text-gray-600 capitalize">{deposit.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
