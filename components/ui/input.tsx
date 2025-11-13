import * as React from 'react'
import { cn } from '@/lib/utils'

type InputVariant = 'default' | 'glass'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant
}

const variantClasses: Record<InputVariant, string> = {
  default:
    'h-12 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-base font-medium text-gray-900 shadow-sm transition focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-60',
  glass:
    'h-12 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-lg font-semibold text-white shadow-inner shadow-blue-950/10 transition focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40 placeholder:text-blue-100/60 disabled:cursor-not-allowed disabled:opacity-60',
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, variant = 'default', ...props }, ref) => (
  <input ref={ref} className={cn(variantClasses[variant], className)} {...props} />
))

Input.displayName = 'Input'

