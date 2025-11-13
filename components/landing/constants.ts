import { ArrowRight, CreditCard, FileCheck2, Gift, Globe, LifeBuoy, Lock, PiggyBank, ShieldCheck, Smartphone, Store, UserCheck, Wallet2, Zap } from 'lucide-react'

export const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#promises', label: 'QuickBank Promise' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#support', label: 'Support' },
]

export const HERO_STATS = [
  { value: '2M+', label: 'Customers worldwide' },
  { value: '95%', label: 'Same-day deliveries' },
  { value: '8.9/10', label: 'Customer satisfaction' },
  { value: '150+', label: 'Destination countries' },
]

export const HERO_FEATURE_TAGS = [
  { icon: Zap, label: 'Express & Economy speeds' },
  { icon: ShieldCheck, label: 'Price-lock guarantee' },
  { icon: Wallet2, label: 'Multi-currency wallet' },
  { icon: CreditCard, label: 'Card, ACH & mobile money' },
]

export const PARTNER_BRANDS = [
  'Airtel Money',
  'GCash',
  'Mpesa',
  'Singtel',
  'Banco Azteca',
  'Paytm',
  'UOB',
  'Coinstar',
]

export const CORE_FEATURES = [
  {
    icon: Smartphone,
    title: 'Sender-first Experience',
    description:
      'Personalized corridors, rate alerts, and repeat transfers in under 30 seconds with biometric authentication.',
    accent: 'from-blue-500 via-blue-600 to-indigo-600',
  },
  {
    icon: Globe,
    title: 'Global Payout Network',
    description:
      '150+ countries, 300K+ cash pickup locations, instant mobile wallet top-ups and local bank integrations.',
    accent: 'from-teal-400 via-cyan-500 to-sky-500',
  },
  {
    icon: Lock,
    title: 'Compliance Automation',
    description:
      'Tiered KYC, sanctions screening, AML rule engine, case management, and audit-ready logging out-of-the-box.',
    accent: 'from-emerald-400 via-green-500 to-emerald-600',
  },
  {
    icon: CreditCard,
    title: 'Flexible Funding & Wallet',
    description:
      'Support for cards, ACH, instant bank pay, Apple/Google Pay, and multi-currency wallets with smart conversion.',
    accent: 'from-purple-400 via-violet-500 to-purple-600',
  },
  {
    icon: FileCheck2,
    title: 'Transparent FX & Fees',
    description:
      'Live mid-market rates, zero hidden markups, upfront fee calculator, and price lock timers until confirmation.',
    accent: 'from-amber-400 via-orange-500 to-amber-600',
  },
  {
    icon: LifeBuoy,
    title: '24/7 Multilingual Support',
    description:
      'Live chat, localized phone lines, WhatsApp, email, and proactive notifications with smart escalations.',
    accent: 'from-rose-400 via-pink-500 to-rose-500',
  },
]

export const QUICKBANK_PROMISES = [
  {
    icon: Zap,
    title: 'Express & Economy Speeds',
    description:
      'Choose instant Express deliveries in minutes or low-cost Economy transfers with transparent ETAs.',
  },
  {
    icon: ShieldCheck,
    title: 'Delivery Promise',
    description:
      'If your transfer is delayed beyond our commitment window, we proactively refund your fees.',
  },
  {
    icon: PiggyBank,
    title: 'No Hidden Fees',
    description:
      'Know exactly what you pay. We lock rates and show every fee upfront — no surprises for you or your recipient.',
  },
  {
    icon: Gift,
    title: 'Refer & Earn',
    description:
      'Reward loyal senders with referral bonuses, corridor-specific promos, and loyalty tiers that unlock savings.',
  },
  {
    icon: UserCheck,
    title: 'Trusted by Recipients',
    description: 'Realtime SMS updates, pickup reminders, and verified payout partners keep recipients informed every step.',
  },
  {
    icon: LifeBuoy,
    title: 'Support That Follows Through',
    description:
      'Our global support network stays with every transfer until funds arrive safely.',
  },
]

export const WALLET_METRICS = [
  { currency: 'USD Wallet', amount: '$8,230.00', change: '+1.2%' },
  { currency: 'EUR Wallet', amount: '€6,150.00', change: '+0.8%' },
  { currency: 'NGN Wallet', amount: '₦5,215,000', change: '+2.1%' },
  { currency: 'INR Wallet', amount: '₹415,200', change: '+1.7%' },
]

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Create your profile',
    description: 'Sign up with email, phone, or social login. Enable biometrics on mobile devices.',
  },
  {
    step: '02',
    title: 'Verify identity',
    description: 'Complete tiered KYC with live document capture, facial biometrics, and address proof.',
  },
  {
    step: '03',
    title: 'Set amount & recipient',
    description: 'Choose corridor, lock your rate, and add recipient bank, mobile wallet, or cash pickup.',
  },
  {
    step: '04',
    title: 'Send & track',
    description: 'Pay instantly, watch live updates, and share delivery notifications with loved ones.',
  },
]

export const SECURITY_FEATURES = [
  {
    heading: 'Regulatory Coverage',
    description:
      'Licensed across key corridors with PSD2, FCA, FinCEN, MAS, AUSTRAC, and local regulator oversight.',
  },
  {
    heading: 'Intelligent Risk Engine',
    description:
      'Machine learning models score every transfer with velocity, device fingerprint, and behavioral analytics.',
  },
  {
    heading: 'Data Protection',
    description:
      'End-to-end encryption, tokenization of sensitive fields, GDPR tooling, and privacy dashboards.',
  },
  {
    heading: 'Operational Controls',
    description:
      'Dual approvals, separation of duties, immutable audit trails, and disaster recovery in multiple regions.',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'I can send money to my parents in Cebu in under five minutes. The Express option gives me peace of mind every payday.',
    name: 'Giselle M.',
    role: 'Caregiver in Seattle',
  },
  {
    quote:
      'QuickBank lets us pay overseas contractors without juggling banks. The wallet and API controls are simply world-class.',
    name: 'Rohit A.',
    role: 'COO, Starflow Labs',
  },
  {
    quote:
      'With rate alerts and delivery promises, I never worry about when my family will get the funds.',
    name: 'Abdou S.',
    role: 'Customer since 2021',
  },
]

export const PRICING_PLANS = [
  {
    name: 'Everyday',
    fee: '1.5%',
    description: 'Perfect for individuals sending up to $10,000/month.',
    minimum: '$0',
    perks: ['Express & Economy speeds', 'Live FX calculator', 'In-app support', 'Rewards & referrals'],
  },
  {
    name: 'Velocity',
    fee: '0.85%',
    description: 'Our most popular plan for frequent senders and SMB payouts.',
    minimum: '$0.99',
    perks: [
      'Same-day deliveries',
      'Rate alerts & hedging tools',
      'Priority compliance support',
      'Unlimited transfers',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    fee: 'Custom',
    description: 'Designed for marketplaces, payroll, and high-volume remitters.',
    minimum: 'Custom',
    perks: [
      'Bulk payouts & APIs',
      'Dedicated success manager',
      'Advanced fraud & AML tooling',
      'White-label options',
    ],
  },
]

export const SUPPORT_CHANNELS = [
  {
    icon: Smartphone,
    title: 'Live Chat',
    description: 'Instant messaging with AI triage and hand-off to compliance specialists.',
  },
  {
    icon: Store,
    title: 'Local Hubs',
    description: 'On-the-ground kiosks and partner agents in key payout countries.',
  },
  {
    icon: LifeBuoy,
    title: 'Help Center',
    description: 'Localized FAQs, transfer guides, and corridor-specific fee explanations.',
  },
  {
    icon: ArrowRight,
    title: 'Priority Escalations',
    description: 'Enterprise SLAs with direct lines to rate, compliance, and settlement teams.',
  },
]

export const CTA_HIGHLIGHTS = [
  'Launch in 30 days with QuickBank Blueprint onboarding',
  'Tap into 300K+ payout partners without separate contracts',
  'Leverage our compliance stack to expand into new markets faster',
]

