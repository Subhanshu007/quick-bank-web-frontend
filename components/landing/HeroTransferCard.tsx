import { useMemo, useState, ChangeEvent } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Shield } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CountryOption, CountrySelect } from '@/components/ui/country-select'

const SEND_COUNTRIES: CountryOption[] = [
  { value: 'de', label: 'Germany', flag: '🇩🇪', description: 'SEPA Instant • EUR' },
  { value: 'fr', label: 'France', flag: '🇫🇷', description: 'SEPA Instant • EUR' },
  { value: 'es', label: 'Spain', flag: '🇪🇸', description: 'IBAN • EUR' },
  { value: 'nl', label: 'Netherlands', flag: '🇳🇱', description: 'iDEAL • EUR' },
  { value: 'ie', label: 'Ireland', flag: '🇮🇪', description: 'IBAN • EUR' },
  { value: 'be', label: 'Belgium', flag: '🇧🇪', description: 'Bancontact • EUR' },
] as const

type ReceiveMeta = { currency: string; rate: number }

const RECEIVE_COUNTRIES: CountryOption<ReceiveMeta>[] = [
  { value: 'in', label: 'India', flag: '🇮🇳', description: 'Bank deposit • Wallet', meta: { currency: 'INR', rate: 90.4 } },
  { value: 'pk', label: 'Pakistan', flag: '🇵🇰', description: 'Bank deposit • Cash pickup', meta: { currency: 'PKR', rate: 301.2 } },
  { value: 'bd', label: 'Bangladesh', flag: '🇧🇩', description: 'bKash • Bank deposit', meta: { currency: 'BDT', rate: 118.6 } },
  { value: 'np', label: 'Nepal', flag: '🇳🇵', description: 'Bank deposit • Cash pickup', meta: { currency: 'NPR', rate: 144.8 } },
  { value: 'br', label: 'Brazil', flag: '🇧🇷', description: 'PIX • Bank deposit', meta: { currency: 'BRL', rate: 5.42 } },
] as const

function formatCurrency(value: number, currency: string) {
  return new Intl.NumberFormat('en-EU', {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  }).format(value)
}

export function HeroTransferCard({ className }: { className?: string }) {
  const [amount, setAmount] = useState('1200')
  const [sendCountry, setSendCountry] = useState<CountryOption>(SEND_COUNTRIES[0])
  const [receiveCountry, setReceiveCountry] = useState<CountryOption<ReceiveMeta>>(RECEIVE_COUNTRIES[0])

  const parsedAmount = useMemo(() => {
    const sanitized = amount.replace(/,/g, '')
    const value = Number.parseFloat(sanitized)
    return Number.isFinite(value) ? Math.max(value, 0) : 0
  }, [amount])

  const formattedSendAmount = useMemo(() => formatCurrency(parsedAmount || 0, 'EUR'), [parsedAmount])

  const formattedReceiveAmount = useMemo(() => {
    const rate = receiveCountry.meta?.rate ?? 0
    const currency = receiveCountry.meta?.currency ?? 'USD'
    return formatCurrency((parsedAmount || 0) * rate, currency)
  }, [parsedAmount, receiveCountry])

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const next = event.target.value
    if (/^\d*\.?\d{0,2}$/.test(next)) {
      setAmount(next)
    }
  }

  return (
    <div className={cn('relative mx-auto max-w-lg', className)}>
      <div className="absolute -inset-8 rounded-[48px] bg-gradient-to-br from-primary/30 via-blue-500/20 to-indigo-500/20 blur-3xl"></div>
      <Card className="relative space-y-6 rounded-[40px] border-0 bg-gradient-to-br from-primary via-blue-600 to-indigo-700 p-8 text-white shadow-2xl">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-100">
            <Shield size={16} /> Express transfer
          </span>
          <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white/90">Rate locked 30:00</span>
        </div>

        <form className="space-y-5">
          <div className="space-y-2">
              <Label htmlFor="hero-amount" className="text-xs font-semibold text-blue-100">
              Amount to send (EUR)
            </Label>
            <Input
              id="hero-amount"
              variant="glass"
              inputMode="decimal"
              type="text"
              value={amount}
              onChange={handleAmountChange}
              placeholder="1200"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="hero-send-country" className="text-xs font-semibold text-blue-100">
                Sending from
              </Label>
              <CountrySelect
                options={SEND_COUNTRIES}
                value={sendCountry}
                onChange={(option) => setSendCountry(option)}
                variant="glass"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="hero-receive-country" className="text-xs font-semibold text-blue-100">
                Receiving in
              </Label>
              <CountrySelect
                options={RECEIVE_COUNTRIES}
                value={receiveCountry}
                onChange={(option) => setReceiveCountry(option)}
                variant="glass"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-blue-100">You send</span>
              <span className="text-lg font-semibold text-white">{formattedSendAmount}</span>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-blue-100">Guaranteed rate</span>
                <span className="text-lg font-semibold text-white">
                  1 EUR = {(receiveCountry.meta?.rate ?? 0).toFixed(2)} {receiveCountry.meta?.currency}
                </span>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-blue-100">Fees</span>
              <span className="font-semibold text-white">€0</span>
            </div>
          </div>
        </form>

        <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-100">Recipient receives</p>
          <p className="mt-2 text-4xl font-bold text-white">{formattedReceiveAmount}</p>
          <p className="mt-1 text-sm text-blue-100">
            Includes near-instant Express delivery to {receiveCountry.label}.
          </p>
        </div>

        <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
          <p className="text-sm text-blue-100">Delivery timeline</p>
          <div className="mt-4 space-y-3 text-sm">
            {[
              { label: 'Initiated', value: '2 mins ago', active: true },
              {
                label: 'In transit',
                value: sendCountry.value === 'de' ? 'ETA 20 mins' : 'ETA 30 mins',
                active: true,
              },
              { label: 'Ready for pickup / deposit', value: 'Pending confirmation', active: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-medium text-white">
                  <span className={`h-2.5 w-2.5 rounded-full ${item.active ? 'bg-emerald-400' : 'bg-white/40'}`}></span>
                  {item.label}
                </span>
                <span className="text-xs text-blue-100">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}

