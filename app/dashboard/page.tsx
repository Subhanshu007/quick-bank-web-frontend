'use client'

import Link from 'next/link'
import { Send, TrendingUp, Users, Eye, EyeOff, Settings, LogOut, Bell, Search, ArrowUpRight, ArrowDownLeft } from 'lucide-react'
import { useState } from 'react'

export default function Dashboard() {
  const [showBalance, setShowBalance] = useState(true)
  const [showMenu, setShowMenu] = useState(false)

  const recentTransactions = [
    { id: 1, recipient: 'Sarah Johnson', amount: 150, type: 'sent', date: 'Today', status: 'completed', flag: '🇬🇧' },
    { id: 2, recipient: 'Mike Chen', amount: 75, type: 'sent', date: 'Yesterday', status: 'completed', flag: '🇨🇦' },
    { id: 3, recipient: 'Emma Davis', amount: 200, type: 'received', date: 'Dec 10', status: 'completed', flag: '🇦🇺' },
    { id: 4, recipient: 'John Smith', amount: 50, type: 'sent', date: 'Dec 9', status: 'completed', flag: '🇺🇸' },
  ]

  const savedRecipients = [
    { id: 1, name: 'Sarah Johnson', country: 'UK', bank: 'Barclays', flag: '🇬🇧' },
    { id: 2, name: 'Mike Chen', country: 'Canada', bank: 'TD Bank', flag: '🇨🇦' },
    { id: 3, name: 'Emma Davis', country: 'Australia', bank: 'NAB', flag: '🇦🇺' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <Send className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">QuickBank</h1>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <button className="text-gray-600 hover:text-primary transition relative">
                <Bell size={20} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
              </button>
              <button className="text-gray-600 hover:text-primary transition">
                <Search size={20} />
              </button>
            </div>

            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white flex items-center justify-center font-bold hover:shadow-lg transition transform hover:scale-105"
              >
                JD
              </button>

              {showMenu && (
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-2xl py-2 z-50 border border-gray-200">
                  <Link href="/profile" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 font-medium transition rounded-lg m-2">
                    👤 Profile
                  </Link>
                  <Link href="/settings" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 font-medium transition rounded-lg m-2">
                    <Settings size={18} className="mr-3" /> Settings
                  </Link>
                  <button className="w-full text-left flex items-center px-4 py-3 text-error hover:bg-red-50 font-medium transition rounded-lg m-2">
                    <LogOut size={18} className="mr-3" /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-primary via-blue-600 to-blue-700 rounded-3xl shadow-2xl text-white p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mb-20"></div>

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-16">
              <div>
                <p className="text-blue-100 mb-3 text-lg font-semibold">Your Balance</p>
                <div className="flex items-center space-x-4">
                  <h2 className={`text-5xl font-bold transition-all duration-300 ${showBalance ? 'opacity-100' : 'opacity-0'}`}>
                    {showBalance ? '$5,432.50' : '••••••••'}
                  </h2>
                  <button
                    onClick={() => setShowBalance(!showBalance)}
                    className="hover:bg-blue-700/50 p-3 rounded-xl transition transform hover:scale-110"
                  >
                    {showBalance ? <Eye size={24} /> : <EyeOff size={24} />}
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-blue-100 text-sm mb-2 font-semibold">Account Status</p>
                <span className="bg-green-400/30 text-green-100 px-4 py-2 rounded-full text-sm font-bold border border-green-300">✓ Verified</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-blue-400/30 pt-8">
              <div>
                <p className="text-blue-100 text-sm mb-2 font-semibold">Total Sent</p>
                <p className="text-3xl font-bold flex items-center space-x-2">
                  <span>$8,950</span>
                  <ArrowUpRight size={24} className="text-green-300" />
                </p>
              </div>
              <div>
                <p className="text-blue-100 text-sm mb-2 font-semibold">Total Received</p>
                <p className="text-3xl font-bold flex items-center space-x-2">
                  <span>$3,200</span>
                  <ArrowDownLeft size={24} className="text-blue-300" />
                </p>
              </div>
              <div>
                <p className="text-blue-100 text-sm mb-2 font-semibold">Monthly Average</p>
                <p className="text-3xl font-bold flex items-center space-x-2">
                  <span>$1,240</span>
                  <TrendingUp size={24} className="text-yellow-300" />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: Send, label: 'Send Money', href: '/send-money', color: 'from-blue-400 to-blue-600', desc: 'Transfer funds' },
            { icon: ArrowDownLeft, label: 'Receive Money', href: '/receive-money', color: 'from-green-400 to-emerald-600', desc: 'Get account details' },
            { icon: Users, label: 'Recipients', href: '/recipients', color: 'from-purple-400 to-purple-600', desc: 'Manage contacts' },
            { icon: TrendingUp, label: 'Exchange Rates', href: '#', color: 'from-orange-400 to-orange-600', desc: 'Live rates' },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <Link key={i} href={item.href} className="card p-6 hover:shadow-2xl transition-all duration-300 group hover:scale-105 cursor-pointer">
                <div className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-dark text-lg mb-1">{item.label}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </Link>
            )
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="card p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-dark">Recent Transactions</h3>
                <Link href="/transactions" className="text-primary font-bold hover:text-blue-700 transition flex items-center space-x-2">
                  <span>View All</span>
                  <ArrowUpRight size={18} />
                </Link>
              </div>

              <div className="space-y-4">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex justify-between items-center p-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl hover:shadow-lg transition-all group hover:scale-105">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg ${transaction.type === 'sent' ? 'bg-red-100' : 'bg-green-100'}`}>
                        {transaction.flag}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{transaction.recipient}</p>
                        <p className="text-sm text-gray-600">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-xl font-bold ${transaction.type === 'sent' ? 'text-error' : 'text-success'}`}>
                        {transaction.type === 'sent' ? '-' : '+'} ${transaction.amount}
                      </p>
                      <p className="text-xs text-gray-600 font-semibold capitalize bg-gradient-to-r from-green-100 to-green-50 px-3 py-1 rounded-full mt-1">
                        {transaction.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="card p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-dark">Saved Recipients</h3>
                <Link href="/recipients/add" className="text-primary hover:text-blue-700 transition text-2xl font-bold">
                  +
                </Link>
              </div>

              <div className="space-y-4">
                {savedRecipients.map((recipient) => (
                  <div key={recipient.id} className="p-4 border-2 border-gray-200 rounded-2xl hover:border-primary hover:bg-blue-50 transition cursor-pointer group">
                    <p className="text-lg font-bold text-gray-900 flex items-center space-x-2">
                      <span>{recipient.flag}</span>
                      <span>{recipient.name}</span>
                    </p>
                    <p className="text-xs text-gray-600 font-semibold mt-2">{recipient.country} • {recipient.bank}</p>
                  </div>
                ))}
              </div>

              <Link href="/recipients" className="btn-secondary mt-6">
                View All Recipients
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
