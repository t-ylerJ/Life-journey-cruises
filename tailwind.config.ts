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
    extend: {},
  },
  plugins: [require('daisyui'), TileClass],
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
