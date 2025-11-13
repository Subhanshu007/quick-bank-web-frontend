import { cn } from '@/lib/utils'
import React from 'react'

type BadgeVariant = 'primary' | 'success' | 'warning' | 'outline' | 'neutral'

const variantClasses: Record<BadgeVariant, string> = {
  primary: 'bg-blue-100 text-primary',
  success: 'bg-emerald-100 text-emerald-700',
  warning: 'bg-amber-100 text-amber-800',
  outline: 'border border-blue-200 text-primary bg-white',
  neutral: 'bg-gray-100 text-gray-700',
}

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'primary', ...props }, ref) => (
    <span
      ref={ref}
      className={cn('inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest', variantClasses[variant], className)}
      {...props}
    />
  )
)

Badge.displayName = 'Badge'

