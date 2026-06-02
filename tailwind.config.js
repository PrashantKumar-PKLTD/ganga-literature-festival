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
        }
      }
    },
  },
  plugins: [],
}

