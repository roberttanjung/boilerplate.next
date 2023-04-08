const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['var(--font-oswald)', ...fontFamily.sans]
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["bumblebee", "dark"]
  }
}

