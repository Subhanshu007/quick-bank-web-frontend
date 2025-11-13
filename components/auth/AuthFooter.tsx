interface AuthFooterProps {
  message: string
  actionHref: string
  actionLabel: string
}

export function AuthFooter({ message, actionHref, actionLabel }: AuthFooterProps) {
  return (
    <p className="text-center text-sm text-gray-600">
      {message}{' '}
      <a href={actionHref} className="font-semibold text-primary hover:text-blue-700">
        {actionLabel}
      </a>
    </p>
  )
}

