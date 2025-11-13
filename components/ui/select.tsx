import * as React from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

type SelectVariant = 'default' | 'glass'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon?: React.ReactNode
  variant?: SelectVariant
}

const wrapperClasses: Record<SelectVariant, string> = {
  default:
    'relative flex items-center rounded-2xl border border-gray-200 bg-white text-gray-900 shadow-sm transition focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10',
  glass:
    'relative flex items-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-inner shadow-blue-950/10 transition focus-within:border-white focus-within:ring-2 focus-within:ring-white/40',
}

const selectClasses: Record<SelectVariant, string> = {
  default:
    'w-full appearance-none bg-transparent px-4 py-3 text-sm font-semibold text-gray-900 focus:outline-none placeholder:text-gray-400',
  glass:
    'w-full appearance-none bg-transparent px-4 py-3 text-sm font-semibold text-white focus:outline-none placeholder:text-blue-100/60',
}

const chevronClasses: Record<SelectVariant, string> = {
  default: 'bg-gray-100 text-gray-500',
  glass: 'bg-white/15 text-white',
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, icon, children, disabled, variant = 'default', ...props }, ref) => (
    <div className={cn(wrapperClasses[variant], disabled && 'cursor-not-allowed opacity-60')}>
      {icon ? <span className={cn('ml-4 flex items-center', variant === 'glass' ? 'text-blue-100' : 'text-gray-500')}>{icon}</span> : null}
      <select
        ref={ref}
        className={cn(selectClasses[variant], icon ? 'pl-2' : '', className)}
        disabled={disabled}
        {...props}
      >
        {children}
      </select>
      <span
        className={cn(
          'pointer-events-none absolute right-4 flex h-6 w-6 items-center justify-center rounded-full',
          chevronClasses[variant]
        )}
      >
        <ChevronDown size={16} />
      </span>
    </div>
  )
)

Select.displayName = 'Select'

