const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: '#F4F4F4',
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        peach: '#fa9470',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
