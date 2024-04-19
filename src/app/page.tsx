import Image from 'next/image'

import profile from '@/assets/photo.jpg'

export default function Home() {
  return (
    <>
      <main className="flex w-full flex-grow flex-col justify-end gap-6">
        <section className="flex w-full flex-col items-center gap-12 pl-0 sm:items-start md:pl-[180px] lg:pl-[200px] xl:pl-[240px]">
          <Image
            src={profile}
            width={128}
            height={128}
            quality={100}
            className="pointer-events-none select-none rounded-[4px]"
            alt="Foto de perfil de Ton Almeida"
          />

          <h1 className="text-center font-custom text-2xl uppercase leading-7 sm:text-left">
            I&apos;m Ton,
            <br />
            Front-end Developer
          </h1>
        </section>

        <section className="grid w-full grid-cols-1 gap-3 md:grid-cols-[180px,_1fr] md:gap-0 lg:grid-cols-[200px,_1fr] xl:grid-cols-[240px,_1fr]">
          <div className="mt-1 hidden h-fit items-center gap-2 sm:flex">
            <div className="h-3 w-1 bg-neutral-50" />
            <span className="font-custom text-[10px] uppercase leading-none tracking-tight">
              00 - Bio
            </span>
          </div>

          <p className="text-center text-sm tracking-tighter sm:text-left">
            Specializing in user experience (UX) design and jamstack-based
            ecosystems. I&apos;m always interested in creating responsive
            solutions where design, movement, interaction and accessibility
            integrate perfectly.
          </p>
        </section>
      </main>
    </>
  )
}
