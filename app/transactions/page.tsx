'use client'

import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, ArrowDownLeft, Download, Filter } from 'lucide-react'
import { useState } from 'react'

export default function Transactions() {
  const [filterType, setFilterType] = useState('all')
  const [filterStatus, setFilterStatus] = useState('all')

  const allTransactions = [
    { id: 1, recipient: 'Sarah Johnson', amount: 150, type: 'sent', date: '2024-12-15', status: 'completed', reference: 'TXN001234' },
    { id: 2, recipient: 'Mike Chen', amount: 75, type: 'sent', date: '2024-12-14', status: 'completed', reference: 'TXN001235' },
    { id: 3, recipient: 'Emma Davis', amount: 200, type: 'received', date: '2024-12-10', status: 'completed', reference: 'TXN001236' },
    { id: 4, recipient: 'John Smith', amount: 50, type: 'sent', date: '2024-12-09', status: 'pending', reference: 'TXN001237' },
    { id: 5, recipient: 'Lisa Brown', amount: 300, type: 'received', date: '2024-12-08', status: 'completed', reference: 'TXN001238' },
    { id: 6, recipient: 'Robert Taylor', amount: 100, type: 'sent', date: '2024-12-05', status: 'completed', reference: 'TXN001239' },
    { id: 7, recipient: 'Jennifer Martinez', amount: 250, type: 'sent', date: '2024-12-01', status: 'completed', reference: 'TXN001240' },
    { id: 8, recipient: 'David Wilson', amount: 500, type: 'received', date: '2024-11-28', status: 'completed', reference: 'TXN001241' },
  ]

  const filteredTransactions = allTransactions.filter(tx => {
    const typeMatch = filterType === 'all' || tx.type === filterType
    const statusMatch = filterStatus === 'all' || tx.status === filterStatus
    return typeMatch && statusMatch
  })

  const stats = {
    totalSent: allTransactions.filter(t => t.type === 'sent').reduce((sum, t) => sum + t.amount, 0),
    totalReceived: allTransactions.filter(t => t.type === 'received').reduce((sum, t) => sum + t.amount, 0),
    monthlyAverage: 1240,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link href="/dashboard" className="text-gray-600 hover:text-primary transition mr-6 transform hover:scale-110">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Transaction History</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="card p-6">
            <p className="text-sm text-gray-600 mb-2">Total Sent</p>
            <p className="text-3xl font-bold text-error">${stats.totalSent.toFixed(2)}</p>
            <p className="text-xs text-gray-500 mt-2">{allTransactions.filter(t => t.type === 'sent').length} transactions</p>
          </div>
          <div className="card p-6">
            <p className="text-sm text-gray-600 mb-2">Total Received</p>
            <p className="text-3xl font-bold text-success">${stats.totalReceived.toFixed(2)}</p>
            <p className="text-xs text-gray-500 mt-2">{allTransactions.filter(t => t.type === 'received').length} transactions</p>
          </div>
          <div className="card p-6">
            <p className="text-sm text-gray-600 mb-2">Monthly Average</p>
            <p className="text-3xl font-bold text-primary">${stats.monthlyAverage.toFixed(2)}</p>
            <p className="text-xs text-gray-500 mt-2">Last 3 months average</p>
          </div>
        </div>

        {/* Filters */}
        <div className="card p-6 mb-6">
          <div className="flex items-center gap-4">
            <Filter size={20} className="text-gray-600" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="input-field py-2 text-sm"
            >
              <option value="all">All Types</option>
              <option value="sent">Sent</option>
              <option value="received">Received</option>
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="input-field py-2 text-sm"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
            <button className="btn-secondary py-2 px-4 text-sm ml-auto flex items-center">
              <Download size={18} className="mr-2" /> Export
            </button>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Transaction</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Reference</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((tx, index) => (
                  <tr key={tx.id} className={index !== filteredTransactions.length - 1 ? 'border-b border-gray-200' : ''}>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.type === 'sent' ? 'bg-red-100' : 'bg-green-100'}`}>
                          {tx.type === 'sent' ? (
                            <ArrowUpRight className="text-error" size={20} />
                          ) : (
                            <ArrowDownLeft className="text-success" size={20} />
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{tx.recipient}</p>
                          <p className="text-xs text-gray-600">{tx.date}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${tx.type === 'sent' ? 'bg-red-100 text-error' : 'bg-green-100 text-success'}`}>
                        {tx.type === 'sent' ? 'Sent' : 'Received'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className={`font-bold text-sm ${tx.type === 'sent' ? 'text-error' : 'text-success'}`}>
                        {tx.type === 'sent' ? '-' : '+'} ${tx.amount}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(tx.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        tx.status === 'completed' ? 'bg-green-100 text-success' :
                        tx.status === 'pending' ? 'bg-yellow-100 text-warning' :
                        'bg-red-100 text-error'
                      }`}>
                        {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-mono text-xs text-gray-600">{tx.reference}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-between items-center">
          <p className="text-sm text-gray-600">Showing {filteredTransactions.length} of {allTransactions.length} transactions</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition disabled:opacity-50" disabled>
              Previous
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
