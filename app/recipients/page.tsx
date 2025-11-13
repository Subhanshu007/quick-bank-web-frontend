'use client'

import Link from 'next/link'
import { ArrowLeft, Plus, Search, Edit, Trash2, Send, MoreVertical } from 'lucide-react'
import { useState } from 'react'

export default function Recipients() {
  const [recipients, setRecipients] = useState([
    { id: 1, name: 'Sarah Johnson', country: 'UK', bank: 'Barclays', flag: '🇬🇧', accountNumber: '****4567' },
    { id: 2, name: 'Mike Chen', country: 'Canada', bank: 'TD Bank', flag: '🇨🇦', accountNumber: '****8901' },
    { id: 3, name: 'Emma Davis', country: 'Australia', bank: 'NAB', flag: '🇦🇺', accountNumber: '****2345' },
    { id: 4, name: 'James Wilson', country: 'Singapore', bank: 'DBS', flag: '🇸🇬', accountNumber: '****6789' },
  ])

  const [searchTerm, setSearchTerm] = useState('')

  const filteredRecipients = recipients.filter(r =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.country.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDelete = (id: number) => {
    setRecipients(recipients.filter(r => r.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/dashboard" className="text-gray-600 hover:text-primary transition mr-6 transform hover:scale-110">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">My Recipients</h1>
          </div>
          <Link href="/recipients/add" className="bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition flex items-center font-semibold transform hover:scale-105">
            <Plus size={20} className="mr-2" /> Add Recipient
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search recipients by name or country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-12"
            />
          </div>
        </div>

        {/* Recipients Grid */}
        {filteredRecipients.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipients.map((recipient) => (
              <div key={recipient.id} className="card p-6 hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-4xl">{recipient.flag}</span>
                    <div>
                      <h3 className="font-bold text-gray-900">{recipient.name}</h3>
                      <p className="text-sm text-gray-600">{recipient.country}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical size={20} />
                  </button>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-xs text-gray-600 mb-1">Bank</p>
                  <p className="font-semibold text-gray-900 mb-3">{recipient.bank}</p>
                  <p className="text-xs text-gray-600 mb-1">Account</p>
                  <p className="font-mono text-sm text-gray-700">{recipient.accountNumber}</p>
                </div>

                <div className="flex gap-2">
                  <button className="btn-primary flex items-center justify-center text-sm py-2">
                    <Send size={16} className="mr-2" /> Send
                  </button>
                  <Link href={`/recipients/${recipient.id}/edit`} className="btn-secondary flex items-center justify-center text-sm py-2">
                    <Edit size={16} />
                  </Link>
                  <button
                    onClick={() => handleDelete(recipient.id)}
                    className="btn-secondary flex items-center justify-center text-sm py-2 text-error hover:bg-red-50"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="card p-12 text-center">
            <p className="text-gray-600 mb-4">No recipients found</p>
            <Link href="/recipients/add" className="btn-primary max-w-xs mx-auto">
              Add Your First Recipient
            </Link>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="card p-6 text-center">
            <div className="text-3xl mb-3">📤</div>
            <h4 className="font-bold text-gray-900 mb-2">Total Recipients</h4>
            <p className="text-2xl font-bold text-primary">{recipients.length}</p>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl mb-3">🌍</div>
            <h4 className="font-bold text-gray-900 mb-2">Countries</h4>
            <p className="text-2xl font-bold text-primary">{new Set(recipients.map(r => r.country)).size}</p>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl mb-3">📱</div>
            <h4 className="font-bold text-gray-900 mb-2">Quick Access</h4>
            <p className="text-sm text-gray-600">Your 3 most used recipients are saved</p>
          </div>
        </div>
      </main>
    </div>
  )
}
