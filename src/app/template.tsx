import Image from 'next/image'

import photo from '../../public/photo.jpg'

export default function Template({ children }: { children: React.ReactNode }) {
  const currentYear = new Date().getFullYear()

  return (
    <div className="fixed flex h-screen w-screen">
      <aside className="flex h-full w-full flex-col justify-between p-8">
        <header className="flex flex-col gap-1">
          <div className="flex text-sm font-bold leading-none">
            <span className="mr-0.5 font-serif">&reg;</span>
            <span className="uppercase tracking-tighter">tonalmeida</span>
          </div>
          <span className="text-xs font-bold leading-none tracking-tighter">
            Front-end developer
          </span>
        </header>

        <footer className="flex flex-col gap-1 text-xs font-bold leading-none">
          <div className="uppercase tracking-tighter">
            <span className="mr-0.5 font-serif">&copy;</span>
            <span className="lowercase">{currentYear},</span>
          </div>
          <span className="lowercase">&#40;just don&apos;t copy&#41;</span>
        </footer>
      </aside>

      <div className="min-w-[1080px] overflow-y-auto p-8">{children}</div>

      <aside className="relative flex h-full w-full flex-col justify-end p-8">
        <Image
          src={photo}
          width={190}
          height={245}
          alt="Fotografia de Ton Almeida"
          className="absolute right-0 top-0"
        />
        <footer className="flex justify-end">
          <div className="text-sm font-bold uppercase leading-none tracking-tighter">
            <span className="mr-2 font-serif">&#47;&#47;</span>
            <span className="lowercase">0% explored</span>
          </div>
        </footer>
      </aside>
    </div>
  )
}
