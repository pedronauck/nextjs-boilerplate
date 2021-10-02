const breakpoints = require('./src/styles/breakpoints.json')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        ...colors,
        gray: colors.blueGray,
        primary: colors['indigo'],
        secondary: colors['teal'],
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Raleway', 'sans-serif'],
      },
    },
    screens: Object.entries(breakpoints).reduce((obj, [key, value]) => {
      return { ...obj, [key]: `${value}px` }
    }, {}),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
