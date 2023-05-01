/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-back': "url('../images/background.png')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

