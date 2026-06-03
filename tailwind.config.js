/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Legacy colors kept for backward compat with other components
        govblue: {
          light: '#3b82f6',
          DEFAULT: '#0b3c5d',
          dark: '#002c4b',
        },
        accentgreen: {
          light: '#10b981',
          DEFAULT: '#059669',
          dark: '#047857',
        },
        // New Ganga Literature Festival palette
        glf: {
          burgundy: '#7B1F3A',       // Deep burgundy - primary brand
          'burgundy-dark': '#5A1528', // Darker burgundy for hover
          'burgundy-light': '#9E2B4E',
          gold: '#C9A84C',           // Rich gold accent
          'gold-light': '#E0C068',
          cream: '#FFF8F0',          // Warm cream background
          charcoal: '#1A1A2E',       // Deep charcoal for text
          slate: '#3D3D5C',          // Muted slate
          sand: '#F5EDE3',           // Sandy warm tone
          ivory: '#FFFDF7',          // Off-white
          teal: '#1B6B6D',           // Accent teal
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 1.5rem))' },
        },
      },
      animation: {
        'slide-down': 'slide-down 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'slide-out-right': 'slide-out-right 0.3s ease-out',
        'marquee': 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}
