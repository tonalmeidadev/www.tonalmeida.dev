import React from 'react'

import { useMatches, KBarResults, ActionImpl } from 'kbar'

import { CommandResult } from './CommandItem'

interface CommandRenderProps {
  item: string | ActionImpl
  active: boolean
}

export function CommandRender() {
  const { results } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }: CommandRenderProps) =>
        typeof item === 'string' ? (
          <span className="flex h-6 items-center px-6 font-custom text-[8px] uppercase leading-[13px] tracking-widest text-neutral-600">
            {item}
          </span>
        ) : (
          <CommandResult action={item} active={active} />
        )
      }
    />
  )
}
