import type { Config } from 'tailwindcss'
import themes from 'daisyui/src/theming/themes'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...themes['light'],
          primary: '#A2DCE7',
          secondary: '#FFED86',
          accent: '#FFB067',
        },
      },
    ],
  },
} satisfies Config
