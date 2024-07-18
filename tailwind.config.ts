import type { Config } from 'tailwindcss'
import themes from 'daisyui/src/theming/themes'


export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customBlue: '#056DBD',
        customOrange: '#FF7233',
        customYellow: '#FBD756',
        customPink: '#E93AB5'
      },
      fontFamily: {
        'roboto-flex': ['"Roboto Flex"', 'sans-serif'],
        'lato': ['"Lato"', 'sans-serif'],

      },
      fontSize: {
        md: '14px'
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...themes['light'],
         'primary': '#056DBD',
          'secondary': '#FF7233',
          'neutral': '#E93AB5',
          'accent': '#FBD756',
        },
        party: {
          primary: '#3b82f6',
          secondary: '#fb923c',
          neutral: '#f472b6',
          accent: '#bef264',
        }
      },
    ],
  },
} satisfies Config

