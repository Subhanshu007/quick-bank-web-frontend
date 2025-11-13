'use client'

import Link from 'next/link'
import { ArrowLeft, Camera, Edit2, Shield, Download } from 'lucide-react'
import { useState } from 'react'

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 234-567-8900',
    dateOfBirth: '1990-01-15',
    country: 'United States',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/dashboard" className="text-gray-600 hover:text-primary transition mr-6 transform hover:scale-110">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Profile Settings</h1>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-primary hover:text-blue-700 transition flex items-center"
          >
            <Edit2 size={20} className="mr-2" />
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="card p-8 mb-8">
          <div className="flex items-end gap-6 mb-8">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                JD
              </div>
              {isEditing && (
                <button className="absolute bottom-0 right-0 bg-primary text-white p-3 rounded-full hover:bg-blue-700 transition">
                  <Camera size={20} />
                </button>
              )}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-dark mb-2">{formData.firstName} {formData.lastName}</h2>
              <p className="text-gray-600">{formData.email}</p>
              <div className="flex items-center gap-2 mt-3">
                <Shield size={18} className="text-success" />
                <span className="text-sm text-success font-semibold">Verified Account</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Account Status</p>
              <p className="font-bold text-green-600">Active</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Member Since</p>
              <p className="font-bold text-gray-900">March 2024</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">Verification Level</p>
              <p className="font-bold text-primary">Advanced</p>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="card p-8 mb-8">
          <h3 className="text-xl font-bold text-dark mb-6">Personal Information</h3>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="input-field disabled:bg-gray-50 disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="input-field disabled:bg-gray-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="input-field disabled:bg-gray-50 disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="input-field disabled:bg-gray-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-dark mb-2">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                disabled={!isEditing}
                className="input-field disabled:bg-gray-50 disabled:cursor-not-allowed"
              />
            </div>
          </form>
        </div>

        {/* Address Information */}
        <div className="card p-8 mb-8">
          <h3 className="text-xl font-bold text-dark mb-6">Address Information</h3>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-dark mb-2">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                disabled={!isEditing}
                className="input-field disabled:bg-gray-50 disabled:cursor-not-allowed"
              >
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-dark mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                disabled={!isEditing}
                className="input-field disabled:bg-gray-50 disabled:cursor-not-allowed"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="input-field disabled:bg-gray-50 disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="input-field disabled:bg-gray-50 disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark mb-2">Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="input-field disabled:bg-gray-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Actions */}
        {isEditing && (
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setIsEditing(false)}
              className="btn-primary"
            >
              Save Changes
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="btn-secondary"
            >
              Cancel
            </button>
          </div>
        )}

        {/* Documents */}
        <div className="card p-8">
          <h3 className="text-xl font-bold text-dark mb-6">Documents</h3>
          <div className="space-y-4">
            {[
              { name: 'ID Verification', status: 'verified', date: '2024-03-15' },
              { name: 'Address Proof', status: 'verified', date: '2024-03-15' },
              { name: 'Bank Statement', status: 'verified', date: '2024-09-01' },
            ].map((doc) => (
              <div key={doc.name} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">{doc.name}</p>
                  <p className="text-xs text-gray-600">Verified on {doc.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-success">
                    {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                  </span>
                  <button className="text-primary hover:text-blue-700">
                    <Download size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
