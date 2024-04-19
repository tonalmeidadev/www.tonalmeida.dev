'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useEffect, useState } from 'react'
import { messages } from '@/utils/messages'
import { motion } from 'framer-motion'

import profile from '@/assets/photo.jpg'

export function StatusBar() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Link
      href={messages[currentIndex].path}
      className="flex h-9 w-[310px] items-center gap-[10px] rounded-full border border-dashed border-neutral-600 bg-neutral-950 px-[10px]"
    >
      <Image
        src={profile}
        width={20}
        height={20}
        quality={100}
        className="pointer-events-none select-none rounded-full"
        alt="Foto de perfil de Ton Almeida"
      />
      <motion.span
        key={messages[currentIndex].text}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xs leading-none tracking-tighter"
      >
        {messages[currentIndex].text}
      </motion.span>
    </Link>
  )
}
