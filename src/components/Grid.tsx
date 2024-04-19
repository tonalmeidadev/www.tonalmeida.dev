export function Grid() {
  return (
    <div className="bg-red fixed left-2/4 top-0 -z-10 h-screen w-full max-w-[1144px] -translate-x-1/2 px-8">
      <div className="absolute right-8 top-0 h-full w-0 border-r border-dashed border-neutral-800" />
      <div className="absolute left-2/4 top-0 h-full w-0 -translate-x-1/2 border-r border-dashed border-neutral-800 md:left-[212px] lg:left-[232px] xl:left-[272px]" />
      <div className="absolute left-8 top-0 h-full w-0 border-r border-dashed border-neutral-800" />
    </div>
  )
}
