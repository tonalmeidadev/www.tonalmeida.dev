import { Metadata } from 'next'
import './globals.css'

import { Roboto_Mono, Roboto_Serif } from 'next/font/google'

const roboto_mono = Roboto_Mono({
  variable: '--font-monospace',
  subsets: ['latin'],
  display: 'swap',
})

const roboto_serif = Roboto_Serif({
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ton Almeieda // Front-end Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${roboto_mono.variable} ${roboto_serif.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
