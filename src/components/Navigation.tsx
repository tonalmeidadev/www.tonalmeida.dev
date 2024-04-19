'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion } from 'framer-motion'

import { navigation } from '@/utils/navigation'
import { Play } from '@phosphor-icons/react/dist/ssr'

export function Navigation() {
  const pathname = usePathname()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  return (
    <nav className="hidden justify-between md:flex">
      <ul className="ul ml-auto flex h-full flex-col">
        {navigation.map((item, index) => (
          <li
            key={index}
            className="flex font-custom text-[10px] uppercase leading-none tracking-widest"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={pathname === item.path ? '/' : item.path}
              className="group flex h-3.5 items-center gap-1.5 transition-colors"
            >
              {pathname !== item.path && hoveredIndex === index && (
                <motion.div
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: -3, opacity: 1 }}
                  transition={{ type: 'spring', duration: 0.5 }}
                >
                  <Play size={12} weight="fill" />
                </motion.div>
              )}
              {pathname === item.path && (
                <Play size={12} weight="fill" className="-ml-0.5" />
              )}
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
