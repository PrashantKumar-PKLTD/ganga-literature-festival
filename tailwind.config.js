/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        govblue: {
          light: '#0b0b0b',
          DEFAULT: '#0b0b0b',
          dark: '#000000',
        },
        accentgreen: {
          light: '#b58b32',
          DEFAULT: '#b58b32',
          dark: '#8f6f27',
        },
        saffron: {
          light: '#F58220',
          DEFAULT: '#D4600A',
          dark: '#8B3E00',
        },
        gold: {
          light: '#D9B45F',
          DEFAULT: '#C8962B',
          dark: '#8F6F27',
        },
        river: {
          light: '#2E86C1',
          DEFAULT: '#1A5276',
          dark: '#113F5C',
        },
        cream: '#FAF6EE',
        parchment: '#F2EBD9',
        dark: '#1C1208',
        mid: '#4A3728',
        muted: '#8D7B6A',
        teal: {
          light: '#14A790',
          DEFAULT: '#0E7C6A',
          dark: '#084E42',
        }
      }
    },
  },
  plugins: [],
}

