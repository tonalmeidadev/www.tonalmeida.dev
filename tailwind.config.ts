import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx,mdx}',
    './src/app/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      mono: ['var(--font-monospace)', 'monospace'],
    },
    extend: {
      fontFamily: {
        custom: ['var(--font-monument)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
