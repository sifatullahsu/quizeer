/* eslint-disable @typescript-eslint/no-var-requires */
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '15px'
      },
      screens: {
        default: '1200px'
      }
    },
    fontFamily: {
      roboto: ['var(--font-roboto)'],
      alegreya: ['var(--font-alegreya)'],
      rajdhani: ['var(--font-rajdhani)']
    },
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['lofi']
  }
}
export default config
