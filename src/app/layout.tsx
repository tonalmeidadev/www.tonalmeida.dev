import { Metadata } from 'next'
import './globals.css'

import { Roboto_Mono } from 'next/font/google'
import localFont from 'next/font/local'

const roboto_mono = Roboto_Mono({
  variable: '--font-monospace',
  subsets: ['latin'],
  display: 'swap',
})

const monument = localFont({
  variable: '--font-monument',
  src: '../../public/fonts/monument-extended.otf',
})

export const metadata: Metadata = {
  title: 'Ton Almeida // Front-end Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${roboto_mono.variable} ${monument.variable}`}>
      <body>{children}</body>
    </html>
  )
}
