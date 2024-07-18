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
          primary: '#0578D6',
          secondary: '#FBD756',
          accent: '#FF7233',
          warning: '#E93AB5',
        },
      },
    ],
  },
} satisfies Config
