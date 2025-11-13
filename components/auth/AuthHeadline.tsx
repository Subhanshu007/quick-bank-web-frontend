import { cn } from '@/lib/utils'

interface AuthHeadlineProps {
  title: string
  description: string
  icon?: React.ReactNode
  className?: string
}

export function AuthHeadline({ title, description, icon, className }: AuthHeadlineProps) {
  return (
    <div className={cn('space-y-3 text-center lg:text-left', className)}>
      {icon ? <div className="mx-auto lg:mx-0">{icon}</div> : null}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  )
}

