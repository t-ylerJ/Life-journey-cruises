import type { Config } from 'tailwindcss'
import themes from 'daisyui/src/theming/themes'

import plugin from 'tailwindcss/plugin'

const TileClass = plugin(function({addUtilities}) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d" : {
       transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective:"1000px",
    },
    ".back-hidden": {
      backfaceVisibility: "hidden",
    },


  })
});

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
  plugins: [require('daisyui'), TileClass],
  daisyui: {
    themes: [
      {
        light: {
          ...themes['light'],
         primary: '#056DBD',
         secondary: '#FF7233',
         accent: '#FBD756',
          warning: '#E93AB5',
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

