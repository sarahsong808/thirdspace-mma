/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C8102E',
          'red-dark': '#A00D24',
          'red-light': '#E82038',
          green: '#1A6B3A',
          'green-dark': '#0F4A27',
          'green-light': '#22A855',
        },
      },
      fontFamily: {
        bebas: ['var(--font-bebas)', 'Impact', 'Haettenschweiler', 'sans-serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

module.exports = config
