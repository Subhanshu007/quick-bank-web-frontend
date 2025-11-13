'use client'

import Link from 'next/link'
import { ArrowLeft, Plus, Search, Check, ShieldCheck, Clock, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { CountryOption, CountrySelect } from '@/components/ui/country-select'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

type Recipient = {
  id: number
  name: string
  country: string
  bank: string
  flag: string
}

const sendCountryOptions: CountryOption[] = [
  { value: 'us', label: 'United States', flag: '🇺🇸', description: 'ACH • Debit card • Apple Pay' },
  { value: 'gb', label: 'United Kingdom', flag: '🇬🇧', description: 'Faster Payments • GBP' },
  { value: 'de', label: 'Germany', flag: '🇩🇪', description: 'SEPA Instant • EUR' },
  { value: 'ca', label: 'Canada', flag: '🇨🇦', description: 'Interac e-Transfer • CAD' },
]

type ReceiveMeta = { currency: string; rate: number }

const receiveCountryOptions: CountryOption<ReceiveMeta>[] = [
  { value: 'in', label: 'India', flag: '🇮🇳', description: 'Bank deposit • UPI • Wallet', meta: { currency: 'INR', rate: 82.9 } },
  { value: 'ph', label: 'Philippines', flag: '🇵🇭', description: 'GCash • Bank deposit • Cash pickup', meta: { currency: 'PHP', rate: 56.4 } },
  { value: 'mx', label: 'Mexico', flag: '🇲🇽', description: 'SPEI • Cash pickup', meta: { currency: 'MXN', rate: 17.1 } },
  { value: 'ng', label: 'Nigeria', flag: '🇳🇬', description: 'Bank deposit • Wallet', meta: { currency: 'NGN', rate: 1520.5 } },
  { value: 'br', label: 'Brazil', flag: '🇧🇷', description: 'PIX instant deposit', meta: { currency: 'BRL', rate: 5.42 } },
]

const purposeOptions = [
  { value: 'family', label: 'Family Support' },
  { value: 'education', label: 'Education' },
  { value: 'business', label: 'Business Payment' },
  { value: 'investment', label: 'Investment' },
  { value: 'gifts', label: 'Gifts & Donations' },
  { value: 'other', label: 'Other' },
]

const recipients: Recipient[] = [
  { id: 1, name: 'Aditi Sharma', country: 'India', bank: 'HDFC Bank', flag: '🇮🇳' },
  { id: 2, name: 'Luis Hernandez', country: 'Mexico', bank: 'BBVA Bancomer', flag: '🇲🇽' },
  { id: 3, name: 'Maria Santos', country: 'Philippines', bank: 'BDO', flag: '🇵🇭' },
  { id: 4, name: 'Daniela Souza', country: 'Brazil', bank: 'Itaú', flag: '🇧🇷' },
]

const stepLabels = ['Recipient', 'Transfer Details', 'Review', 'Payment']

export function SendMoneyPage() {
  const [step, setStep] = useState(1)
  const [selectedRecipient, setSelectedRecipient] = useState<Recipient | null>(null)
  const [sendCountry, setSendCountry] = useState<CountryOption>(sendCountryOptions[0])
  const [receiveCountry, setReceiveCountry] = useState<CountryOption<ReceiveMeta>>(receiveCountryOptions[0])
  const [amount, setAmount] = useState('250')
  const [purpose, setPurpose] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const parsedAmount = useMemo(() => {
    const numeric = Number.parseFloat(amount)
    return Number.isFinite(numeric) ? Math.max(0, numeric) : 0
  }, [amount])

  const conversionRate = receiveCountry.meta?.rate ?? 0
  const convertedAmount = parsedAmount * conversionRate
  const fee = parsedAmount === 0 ? 0 : Math.max(1.99, parsedAmount * 0.01)
  const convertedNet = Math.max(convertedAmount - fee * conversionRate, 0)

  const filteredRecipients = useMemo(
    () =>
      recipients.filter((recipient) =>
        `${recipient.name} ${recipient.country}`.toLowerCase().includes(searchValue.toLowerCase().trim())
      ),
    [searchValue]
  )

  const showConversion = parsedAmount > 0 && conversionRate > 0

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-blue-200/30 blur-[140px]"></div>
        <div className="absolute bottom-0 left-0 h-[34rem] w-[34rem] rounded-full bg-primary/10 blur-[140px]"></div>
      </div>

      <header className="relative border-b border-white/40 bg-gradient-to-r from-primary via-blue-600 to-indigo-700 text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white transition hover:bg-white/30"
            >
              <ArrowLeft size={20} />
            </Link>
            <div>
              <div className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-blue-100">
                <Sparkles size={14} /> Quick transfer flow
              </div>
              <h1 className="mt-2 text-2xl font-semibold">Send money worldwide</h1>
              <p className="text-blue-100">
                Express and economy payouts with live FX lock-in & transparent fees.
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-blue-100/90 md:flex">
            <ShieldCheck size={18} />
            PCI-DSS • PSD2 • Global licensing
          </div>
        </div>
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-4 pb-6 sm:px-6 lg:px-8">
          {stepLabels.map((label, index) => {
            const current = index + 1
            const active = step === current
            const completed = step > current
            return (
              <div key={label} className="flex flex-1 items-center gap-3">
                <div
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition',
                    completed
                      ? 'border-white bg-white text-primary'
                      : active
                        ? 'border-white/80 bg-white/20 text-white'
                        : 'border-white/30 text-blue-100'
                  )}
                >
                  {completed ? <Check size={18} /> : current}
                </div>
                <div className="flex flex-col text-xs font-semibold uppercase tracking-[0.2em] text-blue-100/80">
                  {label}
                </div>
                {index !== stepLabels.length - 1 ? (
                  <div className="h-px flex-1 bg-gradient-to-r from-white/40 to-white/10"></div>
                ) : null}
              </div>
            )
          })}
        </div>
      </header>

      <main className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {step === 1 ? (
          <Card className="space-y-8 rounded-[32px] border-0 bg-white/90 px-8 py-10 shadow-xl shadow-blue-500/5 backdrop-blur">
            <div className="flex flex-col gap-2 text-left">
              <h2 className="text-2xl font-semibold text-gray-900">Choose who you’re sending to</h2>
              <p className="text-sm text-gray-500">
                Search saved recipients or add a new payout partner. We’ll surface required details for the corridor you choose.
              </p>
            </div>

            <div className="relative">
              <Search className="absolute left-4 top-3 text-gray-400" size={18} />
              <Input
                variant="default"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                className="pl-10"
                placeholder="Search by name or country..."
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {filteredRecipients.map((recipient) => {
                const selected = selectedRecipient?.id === recipient.id
                return (
                  <button
                    key={recipient.id}
                    onClick={() => setSelectedRecipient(recipient)}
                    className={cn(
                      'flex h-full items-center justify-between rounded-2xl border px-6 py-5 text-left transition',
                      selected
                        ? 'border-primary/80 bg-primary/5 shadow-lg shadow-primary/10'
                        : 'border-gray-200 bg-white hover:border-primary/30 hover:shadow-md'
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{recipient.flag}</span>
                      <div>
                        <p className="text-base font-semibold text-gray-900">{recipient.name}</p>
                        <p className="text-sm text-gray-500">
                          {recipient.country} • {recipient.bank}
                        </p>
                      </div>
                    </div>
                    <div
                      className={cn(
                        'flex h-5 w-5 items-center justify-center rounded-full border-2',
                        selected ? 'border-primary bg-primary text-white' : 'border-gray-300'
                      )}
                    >
                      {selected ? <Check size={14} /> : null}
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <Button variant="outline" className="w-full sm:w-auto" onClick={() => alert('Add recipient flow')}>
                <Plus size={18} />
                New recipient
              </Button>
              <Button
                size="lg"
                className="w-full sm:w-auto"
                disabled={!selectedRecipient}
                onClick={() => selectedRecipient && setStep(2)}
              >
                Continue
              </Button>
            </div>
          </Card>
        ) : null}

        {step === 2 ? (
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="space-y-6 rounded-[32px] border-0 bg-white/95 px-8 py-10 shadow-xl shadow-blue-500/5 backdrop-blur">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Transfer details</h2>
                <p className="text-sm text-gray-500">
                  Lock your FX rate, choose payout corridor, and tell us the transfer purpose.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Sending from</label>
                  <CountrySelect options={sendCountryOptions} value={sendCountry} onChange={setSendCountry} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Receiving in</label>
                  <CountrySelect options={receiveCountryOptions} value={receiveCountry} onChange={setReceiveCountry} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Amount to send</label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-sm font-semibold text-gray-400">EUR</span>
                  <Input
                    variant="default"
                    value={amount}
                    onChange={(event) => {
                      const next = event.target.value
                      if (/^\d*\.?\d{0,2}$/.test(next)) {
                        setAmount(next)
                      }
                    }}
                    placeholder="0.00"
                    className="pl-16 text-2xl font-semibold"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Purpose of transfer</label>
                <Select value={purpose} onChange={(event) => setPurpose(event.target.value)} className="text-sm">
                  <option value="">Select a purpose</option>
                  {purposeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <Button variant="outline" className="w-full sm:w-auto" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button size="lg" className="w-full sm:w-auto" disabled={!parsedAmount || !purpose} onClick={() => setStep(3)}>
                  Review transfer
                </Button>
              </div>
            </Card>

            <Card className="space-y-6 rounded-[32px] border-0 bg-gradient-to-br from-primary via-blue-600 to-indigo-700 px-8 py-10 text-white shadow-xl">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-blue-100">
                  <Clock size={14} /> Express
                </span>
                <span className="text-xs font-semibold text-blue-100">Rate locked for 30:00</span>
              </div>

              <div className="space-y-5 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-blue-100">You send</p>
                    <p className="text-3xl font-semibold text-white">€{parsedAmount.toFixed(2)}</p>
                  </div>
                  <span className="text-2xl">→</span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-blue-100">They receive</p>
                    <p className="text-3xl font-semibold text-white">
                      {showConversion ? formatCurrency(convertedAmount, receiveCountry.meta?.currency ?? 'USD') : '—'}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-blue-100">
                  FX rate: 1 EUR = {conversionRate.toFixed(2)} {receiveCountry.meta?.currency} • Fees: {formatCurrency(fee, 'EUR')}
                </p>
              </div>

              <div className="space-y-4 rounded-3xl border border-white/15 bg-white/8 p-6 backdrop-blur">
                <p className="text-sm text-blue-100">Timeline to {selectedRecipient?.country ?? receiveCountry.label}</p>
                <div className="space-y-3 text-sm">
                  {[
                    { label: 'Initiated', value: 'Instant confirmation', active: true },
                    { label: 'Compliance checks', value: 'Completed automatically', active: true },
                    { label: 'Delivered', value: 'Under 30 minutes (Express)', active: false },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between">
                      <span className="flex items-center gap-2 font-medium text-white">
                        <span className={cn('h-2.5 w-2.5 rounded-full', item.active ? 'bg-emerald-400' : 'bg-white/40')}></span>
                        {item.label}
                      </span>
                      <span className="text-xs text-blue-100">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        ) : null}

        {step === 3 ? (
          <Card className="space-y-8 rounded-[32px] border-0 bg-white/95 px-8 py-10 shadow-xl shadow-blue-500/5 backdrop-blur">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Review and confirm</h2>
              <p className="text-sm text-gray-500">
                Double-check corridor, recipient, and fees before moving to payment.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white px-5 py-4">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">From</p>
                <p className="mt-2 text-lg font-semibold text-gray-900">John Doe</p>
                <p className="text-sm text-gray-500">{sendCountry.label}</p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white px-5 py-4">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">To</p>
                <p className="mt-2 text-lg font-semibold text-gray-900">
                  {selectedRecipient?.name ?? 'Recipient selected'}
                </p>
                <p className="text-sm text-gray-500">{selectedRecipient?.country ?? receiveCountry.label}</p>
              </div>
            </div>

            <div className="rounded-3xl border border-primary/20 bg-primary/5 px-6 py-6 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">You send</span>
                <span className="text-base font-semibold text-gray-900">{formatCurrency(parsedAmount, 'EUR')}</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-gray-600">Transfer fee</span>
                <span className="text-base font-semibold text-gray-900">{formatCurrency(fee, 'EUR')}</span>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-primary/10 pt-4 text-lg font-semibold text-primary">
                <span>They receive</span>
                <span>{formatCurrency(convertedNet, receiveCountry.meta?.currency ?? 'USD')}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
              <Button variant="outline" className="w-full sm:w-auto" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button size="lg" className="w-full sm:w-auto" onClick={() => setStep(4)}>
                Continue to payment
              </Button>
            </div>
          </Card>
        ) : null}

        {step === 4 ? (
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <Card className="space-y-6 rounded-[32px] border-0 bg-white/95 px-8 py-10 shadow-xl shadow-blue-500/5 backdrop-blur">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Choose a payment method</h2>
                <p className="text-sm text-gray-500">Secure checkout with saved cards or bank accounts.</p>
              </div>

              <div className="space-y-4">
                {[
                  { id: 1, label: 'Visa ending in 4242', description: 'Instant confirmation', badge: 'Recommended' },
                  { id: 2, label: 'Bank account — Chase', description: '1-2 hours', badge: 'Low fees' },
                  { id: 3, label: 'Apple Pay', description: 'Instant', badge: 'Express' },
                ].map((method) => (
                  <label
                    key={method.id}
                    className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4 transition hover:border-primary/40 hover:shadow-md"
                  >
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{method.label}</p>
                      <p className="text-xs text-gray-500">{method.description}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {method.badge}
                      </span>
                      <input
                        type="radio"
                        name="payment"
                        defaultChecked={method.id === 1}
                        className="h-4 w-4 border-gray-300 text-primary focus:ring-primary/40"
                      />
                    </div>
                  </label>
                ))}
              </div>

              <Button variant="outline" className="w-full" onClick={() => alert('Add payment method')}>
                <Plus size={18} />
                Add new payment method
              </Button>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                ⚠️ Transfers are monitored by our compliance team. If additional verification is needed, we’ll notify you instantly.
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <Button variant="outline" className="w-full sm:w-auto" onClick={() => setStep(3)}>
                  Back
                </Button>
                <Button size="lg" className="w-full sm:w-auto" onClick={() => alert('Payment processed!')}>
                  Send {formatCurrency(parsedAmount, 'EUR')}
                </Button>
              </div>
            </Card>

            <Card className="space-y-6 rounded-[32px] border-0 bg-gradient-to-br from-primary via-blue-600 to-indigo-700 px-8 py-10 text-white shadow-xl">
              <div>
                <p className="text-sm text-blue-100">Transfer summary</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {selectedRecipient?.name ?? 'Recipient'} • {receiveCountry.label}
                </h3>
              </div>

              <div className="space-y-3 rounded-3xl border border-white/15 bg-white/10 p-6 text-sm backdrop-blur">
                <div className="flex items-center justify-between text-blue-100">
                  <span>You send</span>
                  <span className="font-semibold text-white">{formatCurrency(parsedAmount, 'EUR')}</span>
                </div>
                <div className="flex items-center justify-between text-blue-100">
                  <span>Fees</span>
                  <span className="font-semibold text-white">{formatCurrency(fee, 'EUR')}</span>
                </div>
                <div className="flex items-center justify-between text-blue-100">
                  <span>Exchange rate</span>
                  <span className="font-semibold text-white">
                    1 EUR = {conversionRate.toFixed(2)} {receiveCountry.meta?.currency}
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3 text-lg font-semibold">
                  <span>Recipient gets</span>
                  <span className="text-white">
                    {formatCurrency(convertedNet, receiveCountry.meta?.currency ?? 'USD')}
                  </span>
                </div>
              </div>

              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-sm text-blue-100">
                <p>Need help? Our local support teams respond in under 45 seconds, 24/7/365.</p>
              </div>
            </Card>
          </div>
        ) : null}
      </main>
    </div>
  )
}

function formatCurrency(amount: number, currency: string) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  }).format(amount || 0)
}

