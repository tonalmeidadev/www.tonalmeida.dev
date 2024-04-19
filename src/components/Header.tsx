'use client'

import Link from 'next/link'

import { Navigation } from './Navigation'
import { StatusBar } from './StatusBar'

import { StarFour } from '@phosphor-icons/react/dist/ssr'
import { useKBar } from 'kbar'

export function Header() {
  const { query } = useKBar()

  return (
    <header className="flex w-full flex-col-reverse items-center gap-6 sm:flex-row sm:justify-between sm:gap-0 md:grid md:grid-cols-[180px,_1fr] md:items-start lg:grid-cols-[200px,_1fr] xl:grid-cols-[240px,_1fr]">
      <div className="flex w-full items-center justify-between sm:justify-start sm:gap-6">
        <button
          onClick={query.toggle}
          className="order-1 flex h-9 items-center sm:-order-1 md:hidden"
        >
          <StarFour size={26} weight="light" />
        </button>

        <Link href="/" className="flex h-fit w-fit items-center gap-2">
          <div className="size-3 bg-neutral-50" />
          <span className="font-custom text-[11px] uppercase leading-none tracking-tight">
            tonalmeida
          </span>
        </Link>
      </div>

      <div className="flex w-full justify-center sm:justify-end md:justify-between">
        <Navigation />
        <StatusBar />
      </div>
    </header>
  )
}
