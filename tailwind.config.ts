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
    themes: [
      {
        cupcake: {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          ...require('daisyui/src/theming/themes')['[data-theme=cupcake]'],
          primary: '#0891B2',
          secondary: '#1F2937',
          neutral: '#535353',
          '--rounded-box': '4px',
          '--rounded-btn': '4px',
          '--rounded-badge': '1.9rem'
        }
      }
    ]
  }
}
export default config
