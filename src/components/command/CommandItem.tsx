import React, { forwardRef } from 'react'

import { CommandContainerProps } from '@/types/command'

export function CommandItem(
  { action }: CommandContainerProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      className="relative flex h-10 items-center justify-between overflow-auto"
    >
      <div className="flex h-full flex-grow cursor-pointer items-center gap-3.5 px-6">
        {action.icon && action.icon}
        <span className="mt-0.5 font-custom text-[10px] uppercase leading-none">
          {action.name}
        </span>
      </div>
      {action.shortcut?.length ? (
        <div className="pointer-events-none absolute right-6 top-2 flex gap-1">
          {action.shortcut.map((shortcut: string) => (
            <kbd
              key={shortcut}
              className="flex h-[22px] w-[18px] items-center justify-center rounded-sm bg-neutral-800 font-custom text-[8px] uppercase leading-3 tracking-widest text-neutral-600"
            >
              {shortcut}
            </kbd>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export const CommandResult = forwardRef(CommandItem)
