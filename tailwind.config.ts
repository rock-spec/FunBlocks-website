import type {Config} from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        pressStart: ['"Press Start 2P"', 'cursive'],
      },
      colors: {
        nero: '#161616',
        bianca: '#F6EEE6',
        floralWhite: '#FFFCF9',
        merino: '#E0D7CE',
        denim: '#175BDB',
        saffron: '#F3B43B',
        oceanGreen: '#45AA75',
        cinnabar: '#DB3D3D',
        pictonBlue: '#60ABD8',
        wisteria: '#E490EC',
      },
      placeholderColor: {
        default: '#BFB4A9',
      },
      textColor: {
        nero: '#161616',
        default: '#282828',
        shallow: '#9F9F9F',
        bianca: '#F6EEE6',
        floralWhite: '#FFFCF9',
        merino: '#E0D7CE',
        denim: '#175BDB',
        saffron: '#F3B43B',
        oceanGreen: '#45AA75',
        cinnabar: '#DB3D3D',
        pictonBlue: '#60ABD8',
        wisteria: '#E490EC',
      }
    },
  },
  plugins: [],
}
export default config
