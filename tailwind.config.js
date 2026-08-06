/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F5EE',
        sand: '#E9DDC8',
        terracotta: {
          light: '#C46849',
          DEFAULT: '#A85032',
          dark: '#843921',
        },
        maroon: {
          light: '#883344',
          DEFAULT: '#6A2432',
          dark: '#4C1722',
        },
        indigo: {
          light: '#3D5485',
          DEFAULT: '#283C63',
          dark: '#182744',
        },
        riverblue: {
          light: '#7AAECF',
          DEFAULT: '#5A8FB5',
          dark: '#3F6E92',
        },
        antiquegold: {
          light: '#DCB862',
          DEFAULT: '#C8A24A',
          dark: '#9E7C30',
        },
        charcoal: {
          light: '#424242',
          DEFAULT: '#2D2D2D',
          dark: '#1A1A1A',
        },

        // Mapped Aliases for Seamless Backward Compatibility
        govblue: {
          light: '#2D2D2D',
          DEFAULT: '#2D2D2D',
          dark: '#1A1A1A',
        },
        accentgreen: {
          light: '#DCB862',
          DEFAULT: '#C8A24A',
          dark: '#9E7C30',
        },
        saffron: {
          light: '#C46849',
          DEFAULT: '#A85032',
          dark: '#843921',
        },
        gold: {
          light: '#DCB862',
          DEFAULT: '#C8A24A',
          dark: '#9E7C30',
        },
        river: {
          light: '#5A8FB5',
          DEFAULT: '#283C63',
          dark: '#182744',
        },
        cream: '#F8F5EE',
        parchment: '#E9DDC8',
        dark: '#2D2D2D',
        mid: '#6A2432',
        muted: '#8A7A6D',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'Source Sans 3', 'sans-serif'],
      },
      borderRadius: {
        'xl': '0.875rem',  // 14px
        '2xl': '1.25rem',  // 20px
        '3xl': '1.75rem',  // 28px
      },
      boxShadow: {
        'editorial': '0 10px 30px -5px rgba(45, 45, 45, 0.08), 0 4px 12px -2px rgba(200, 162, 74, 0.12)',
        'editorial-hover': '0 20px 40px -10px rgba(45, 45, 45, 0.16), 0 8px 24px -4px rgba(168, 80, 50, 0.18)',
        'glow-gold': '0 0 25px rgba(200, 162, 74, 0.25)',
      }
    },
  },
  plugins: [],
}
