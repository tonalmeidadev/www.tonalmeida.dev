import { Clock } from './Clock'

export function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-3 sm:flex-row sm:gap-8">
      <div className="flex h-fit items-center gap-2 pl-0 md:pl-[180px] lg:pl-[200px] xl:pl-[240px]">
        <div className="size-3 rounded-full bg-neutral-50" />
        <Clock />
      </div>

      <div className="flex flex-grow justify-end md:justify-start">
        <span className="font-custom text-[10px] uppercase leading-none tracking-tight">
          &copy;2020 - 2024
          <span className="font-mono text-xs lowercase">
            {' '}
            (just don’t copy)
          </span>
        </span>
      </div>
    </footer>
  )
}
