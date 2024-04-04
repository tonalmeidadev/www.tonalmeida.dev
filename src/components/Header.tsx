import { Navigation } from './Navigation'

import { Command } from '@phosphor-icons/react/dist/ssr'

export function Header() {
  return (
    <header className="flex flex-col items-end gap-2">
      <Navigation />

      <button type="button" className="flex items-center gap-1.5">
        <span className="text-sm font-bold tracking-tighter">or press</span>
        <Command size={20} weight="bold" />
        <span className="text-sm font-bold tracking-tighter">+ k</span>
      </button>
    </header>
  )
}
