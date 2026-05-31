/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        govblue: {
          light: '#3b82f6',
          DEFAULT: '#0b3c5d',
          dark: '#002c4b',
        },
        accentgreen: {
          light: '#10b981',
          DEFAULT: '#059669',
          dark: '#047857',
        }
      }
    },
  },
  plugins: [],
}

