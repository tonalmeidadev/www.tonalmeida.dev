'use client'

import Link from 'next/link'

import { navigation } from '@/utils/navigation'

import { usePathname, useRouter } from 'next/navigation'
import { cva } from 'class-variance-authority'

import { ArrowLeft, X } from '@phosphor-icons/react/dist/ssr'

const link = cva('flex text-sm font-bold uppercase tracking-tighter', {
  variants: {
    variant: {
      active: 'text-neutral-50 -order-1',
      default: 'text-neutral-400 hover:text-neutral-400',
    },
  },
})

export function Navigation() {
  const pathname = usePathname()
  const router = useRouter()

  const goToPreviousPage = () => router.back()

  return (
    <nav className="flex w-full items-center justify-between">
      {pathname !== '/' && (
        <button type="button" role="link" onClick={goToPreviousPage}>
          <ArrowLeft size={20} />
        </button>
      )}

      <ul className="ml-auto flex items-center gap-6">
        {navigation.map((item, index) => (
          <li
            key={index}
            className={link({
              variant: pathname === item.path ? 'active' : 'default',
            })}
          >
            <Link
              href={pathname === item.path ? '/' : item.path}
              className="group flex items-center gap-1.5 transition-colors"
            >
              {item.text}
              {pathname === item.path && (
                <X
                  size={16}
                  weight="bold"
                  className="text-neutral-400 transition-colors group-hover:text-neutral-50"
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
