'use client'

import Link from 'next/link'
import { ArrowLeft, Bell, Lock, Eye, Smartphone, Globe, HelpCircle, LogOut, Trash2, Toggle } from 'lucide-react'
import { useState } from 'react'

export default function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    twoFactorAuth: true,
    biometricAuth: true,
    theme: 'light',
    language: 'en',
  })

  const handleToggle = (key: string) => {
    setSettings({
      ...settings,
      [key]: !settings[key],
    })
  }

  const SettingToggle = ({ label, value, onChange }: { label: string; value: boolean; onChange: () => void }) => (
    <div className="flex justify-between items-center p-4 hover:bg-gray-50 transition">
      <span className="text-gray-900">{label}</span>
      <button
        onClick={onChange}
        className={`w-12 h-6 rounded-full transition ${value ? 'bg-primary' : 'bg-gray-300'}`}
      >
        <div className={`w-5 h-5 bg-white rounded-full transition transform ${value ? 'translate-x-6' : 'translate-x-0.5'}`}></div>
      </button>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link href="/dashboard" className="text-gray-600 hover:text-primary transition mr-6 transform hover:scale-110">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Settings</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Notifications */}
        <div className="card mb-6">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
            <Bell size={20} className="text-primary" />
            <h3 className="text-lg font-bold text-dark">Notifications</h3>
          </div>
          <div className="divide-y divide-gray-200">
            <SettingToggle
              label="Email Notifications"
              value={settings.emailNotifications}
              onChange={() => handleToggle('emailNotifications')}
            />
            <SettingToggle
              label="SMS Notifications"
              value={settings.smsNotifications}
              onChange={() => handleToggle('smsNotifications')}
            />
            <SettingToggle
              label="Push Notifications"
              value={settings.pushNotifications}
              onChange={() => handleToggle('pushNotifications')}
            />
          </div>
        </div>

        {/* Security */}
        <div className="card mb-6">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
            <Lock size={20} className="text-primary" />
            <h3 className="text-lg font-bold text-dark">Security</h3>
          </div>
          <div className="divide-y divide-gray-200">
            <SettingToggle
              label="Two-Factor Authentication"
              value={settings.twoFactorAuth}
              onChange={() => handleToggle('twoFactorAuth')}
            />
            <SettingToggle
              label="Biometric Authentication"
              value={settings.biometricAuth}
              onChange={() => handleToggle('biometricAuth')}
            />
            <div className="p-4 hover:bg-gray-50 transition cursor-pointer">
              <p className="text-gray-900 font-medium">Change Password</p>
              <p className="text-sm text-gray-600">Update your password</p>
            </div>
            <div className="p-4 hover:bg-gray-50 transition cursor-pointer">
              <p className="text-gray-900 font-medium">Active Sessions</p>
              <p className="text-sm text-gray-600">Manage your login sessions</p>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="card mb-6">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
            <Eye size={20} className="text-primary" />
            <h3 className="text-lg font-bold text-dark">Preferences</h3>
          </div>
          <div className="p-4">
            <label className="block text-sm font-semibold text-dark mb-2">Theme</label>
            <select
              value={settings.theme}
              onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
              className="input-field mb-4"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="auto">Auto (System)</option>
            </select>
          </div>
          <div className="border-t border-gray-200 p-4">
            <label className="block text-sm font-semibold text-dark mb-2">Language</label>
            <select
              value={settings.language}
              onChange={(e) => setSettings({ ...settings, language: e.target.value })}
              className="input-field"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>

        {/* About & Help */}
        <div className="card mb-6">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center gap-3">
            <HelpCircle size={20} className="text-primary" />
            <h3 className="text-lg font-bold text-dark">Help & Support</h3>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="p-4 hover:bg-gray-50 transition cursor-pointer">
              <p className="text-gray-900 font-medium">Help Center</p>
              <p className="text-sm text-gray-600">Browse FAQs and guides</p>
            </div>
            <div className="p-4 hover:bg-gray-50 transition cursor-pointer">
              <p className="text-gray-900 font-medium">Contact Support</p>
              <p className="text-sm text-gray-600">Get help from our team</p>
            </div>
            <div className="p-4 hover:bg-gray-50 transition cursor-pointer">
              <p className="text-gray-900 font-medium">Report Issue</p>
              <p className="text-sm text-gray-600">Report a bug or problem</p>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="card mb-6">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-bold text-dark">Legal</h3>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="p-4 hover:bg-gray-50 transition cursor-pointer text-primary">
              <p className="font-medium">Privacy Policy</p>
            </div>
            <div className="p-4 hover:bg-gray-50 transition cursor-pointer text-primary">
              <p className="font-medium">Terms of Service</p>
            </div>
            <div className="p-4 hover:bg-gray-50 transition cursor-pointer text-primary">
              <p className="font-medium">Cookie Policy</p>
            </div>
          </div>
        </div>

        {/* Version */}
        <div className="card p-6 mb-6 text-center bg-gray-50">
          <p className="text-gray-600 text-sm">QuickBank Version 1.0.0</p>
          <p className="text-gray-500 text-xs mt-1">Last updated: December 2024</p>
        </div>

        {/* Danger Zone */}
        <div className="card border-red-200 border-2 p-6">
          <h3 className="text-lg font-bold text-error mb-4">Danger Zone</h3>
          <div className="space-y-3">
            <button className="w-full py-3 px-4 border-2 border-warning text-warning font-semibold rounded-lg hover:bg-yellow-50 transition flex items-center justify-center">
              <Smartphone size={20} className="mr-2" /> Disconnect Devices
            </button>
            <button className="w-full py-3 px-4 border-2 border-error text-error font-semibold rounded-lg hover:bg-red-50 transition flex items-center justify-center">
              <LogOut size={20} className="mr-2" /> Logout All Devices
            </button>
            <button className="w-full py-3 px-4 border-2 border-error text-error font-semibold rounded-lg hover:bg-red-50 transition flex items-center justify-center">
              <Trash2 size={20} className="mr-2" /> Delete Account
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
