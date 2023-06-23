/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{ts,tsx,mdx}',
    './src/components/**/*.{ts,tsx,mdx}',
    './src/app/**/*.{ts,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-montserrat)', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        custom: ['var(--font-monument)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
