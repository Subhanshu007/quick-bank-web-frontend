import * as React from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown, Search } from 'lucide-react'

export type CountryOption<Meta = Record<string, unknown>> = {
  value: string
  label: string
  flag: string
  description?: string
  meta?: Meta
}

type Variant = 'default' | 'glass'

const containerStyles: Record<Variant, string> = {
  default:
    'relative flex min-h-[3rem] items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-2 shadow-sm transition focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10',
  glass:
    'relative flex min-h-[3rem] items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-white shadow-inner shadow-blue-950/5 backdrop-blur-sm transition focus-within:border-white focus-within:ring-2 focus-within:ring-white/40',
}

const chevronStyles: Record<Variant, string> = {
  default: 'bg-gray-100 text-gray-600',
  glass: 'bg-white/20 text-white',
}

interface CountrySelectProps<OptionMeta = Record<string, unknown>> {
  options: CountryOption<OptionMeta>[]
  value?: CountryOption<OptionMeta>
  onChange: (option: CountryOption<OptionMeta>) => void
  placeholder?: string
  variant?: Variant
  className?: string
  searchable?: boolean
}

export function CountrySelect<OptionMeta = Record<string, unknown>>({
  options,
  value,
  onChange,
  placeholder = 'Select country',
  variant = 'default',
  className,
  searchable = true,
}: CountrySelectProps<OptionMeta>) {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState('')
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filteredOptions = React.useMemo(
    () =>
      options.filter((option) =>
        `${option.label} ${option.description ?? ''}`.toLowerCase().includes(search.toLowerCase().trim())
      ),
    [options, search]
  )

  const textMutedClass = variant === 'glass' ? 'text-blue-100/80' : 'text-gray-500'
  const descriptionMutedClass = variant === 'glass' ? 'text-blue-100/60' : 'text-gray-500'

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <button
        type="button"
        className={cn(
          containerStyles[variant],
          'text-left',
          !value && (variant === 'glass' ? 'text-blue-100/80' : 'text-gray-500')
        )}
        onClick={() => setOpen((prev) => !prev)}
      >
        {value ? (
          <div className="flex items-center gap-3">
            <span className="text-xl leading-none">{value.flag}</span>
            <div className="flex flex-col">
              <span className={cn('text-sm font-semibold', variant === 'glass' ? 'text-white' : 'text-gray-900')}>
                {value.label}
              </span>
              {value.description ? (
                <span className={cn('text-xs', descriptionMutedClass)}>{value.description}</span>
              ) : null}
            </div>
          </div>
        ) : (
          <span className={cn('text-sm font-medium', textMutedClass)}>{placeholder}</span>
        )}
        <span
          className={cn(
            'flex h-7 w-7 items-center justify-center rounded-full transition',
            chevronStyles[variant],
            open && 'rotate-180'
          )}
        >
          <ChevronDown size={16} />
        </span>
      </button>

      {open ? (
        <div
          className={cn(
            'absolute z-40 mt-2 max-h-64 w-full overflow-hidden rounded-2xl border shadow-xl',
            variant === 'glass'
              ? 'border-white/20 bg-slate-900/70 backdrop-blur'
              : 'border-gray-200 bg-white/95 backdrop-blur-sm'
          )}
        >
          {searchable ? (
            <div
              className={cn(
                'relative flex items-center border-b px-3 py-2',
                variant === 'glass' ? 'border-white/10' : 'border-gray-200 bg-white/70'
              )}
            >
              <Search
                size={16}
                className={cn('absolute left-4', variant === 'glass' ? 'text-blue-100/80' : 'text-gray-400')}
              />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search countries"
                className={cn(
                  'h-9 w-full rounded-xl pl-9 pr-3 text-sm focus:outline-none',
                  variant === 'glass'
                    ? 'bg-white/10 text-white placeholder:text-blue-100/60'
                    : 'bg-white text-gray-900 placeholder:text-gray-400'
                )}
              />
            </div>
          ) : null}

          <div className="max-h-52 overflow-y-auto">
            {filteredOptions.length === 0 ? (
              <p className={cn('px-4 py-6 text-center text-sm', textMutedClass)}>No matches found</p>
            ) : (
              filteredOptions.map((option) => {
                const isActive = value?.value === option.value
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      onChange(option)
                      setOpen(false)
                      setSearch('')
                    }}
                    className={cn(
                      'flex w-full items-center gap-3 px-4 py-3 text-left transition',
                      variant === 'glass'
                        ? 'hover:bg-white/10 focus:bg-white/10'
                        : 'hover:bg-primary/5 focus:bg-primary/5',
                      isActive && (variant === 'glass' ? 'bg-white/15' : 'bg-primary/10')
                    )}
                  >
                    <span className="text-xl">{option.flag}</span>
                    <div className="flex flex-col">
                      <span
                        className={cn(
                          'text-sm font-semibold',
                          variant === 'glass' ? 'text-white' : 'text-gray-900'
                        )}
                      >
                        {option.label}
                      </span>
                      {option.description ? (
                        <span className={cn('text-xs', descriptionMutedClass)}>{option.description}</span>
                      ) : null}
                    </div>
                  </button>
                )
              })
            )}
          </div>
        </div>
      ) : null}
    </div>
  )
}

