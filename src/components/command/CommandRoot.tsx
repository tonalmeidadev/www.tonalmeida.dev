'use client'

import { CommandRootProps } from '@/types/command'
import { CommandRender } from './CommandRender'

import {
  KBarAnimator as CommandAnimator,
  KBarPortal as CommandPortal,
  KBarPositioner as CommandPositioner,
  KBarProvider as CommandProvider,
  KBarSearch as CommandSearch,
} from 'kbar'

import { Gear, StarFour } from '@phosphor-icons/react/dist/ssr'
import { CommandActions } from './CommandActions'

export function CommandRoot({ children }: CommandRootProps) {
  return (
    <CommandProvider actions={CommandActions()}>
      <CommandPortal>
        <CommandPositioner className="bg-neutral-950/75 backdrop-blur-md">
          <CommandAnimator className="min-h-[54px] w-[414px] gap-4 overflow-hidden rounded-lg border border-dotted border-neutral-600 bg-transparent">
            <div className="flex items-center gap-2 px-6 py-4">
              <StarFour size={20} weight={'light'} />
              <CommandSearch
                defaultPlaceholder="Type a command or search"
                className="flex-grow bg-transparent pb-0.5 text-sm placeholder:text-sm placeholder:tracking-tighter placeholder:text-neutral-600 focus-visible:outline-none"
              />
              <Gear size={20} weight={'light'} />
            </div>
            <CommandRender />
          </CommandAnimator>
        </CommandPositioner>
      </CommandPortal>
      {children}
    </CommandProvider>
  )
}
