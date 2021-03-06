/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "main-green": "url('./assets/css/icons/background.png')",
      },
      width: {
        28: "7rem",
        60: "15rem",
        112: "28rem",
        224: "56rem",
        264: "66rem",
        "9/20": "45%",
        "48w": "48vw",
        "78w": "78vw",
        "80w": "80vw",
        "85w": "85vw",
      },
      height: {
        112: "28rem",
        160: "40rem",
        256: "64rem",
        "90h": "90vh",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: "#F4F4F4",
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        peach: "#fa9470",
        blackOther: {
          100: "#092231",
        },
        green: {
          default: "#092231",
          light: "#50D8BB",
        },
        grayOther: {
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
        },
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
