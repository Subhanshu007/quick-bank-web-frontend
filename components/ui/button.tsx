import React, { cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'inverse'
type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-primary to-blue-600 text-white hover:shadow-xl hover:shadow-blue-500/30 active:scale-[0.99]',
  secondary:
    'bg-gray-100 text-gray-800 hover:bg-gray-200 hover:shadow-md border border-gray-200 active:scale-[0.99]',
  outline:
    'border border-primary/40 text-primary hover:bg-primary/10 bg-white active:scale-[0.99]',
  ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 active:scale-[0.99]',
  inverse:
    'bg-white text-primary border border-white/20 shadow-md hover:bg-white/90 active:scale-[0.99]',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-lg',
  lg: 'px-8 py-4 text-lg rounded-xl',
}

const baseClasses =
  'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 gap-2'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, asChild, children, ...props }, ref) => {
    const composedClassName = cn(baseClasses, variantClasses[variant], sizeClasses[size], className)

    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        className: cn(composedClassName, children.props.className),
      })
    }

    return (
      <button ref={ref} className={composedClassName} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

