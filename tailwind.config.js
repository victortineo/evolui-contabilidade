/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html, js}'],
  theme: {
    extend: {
      colors: {
        mainYellow: '#d3b44a',
        mainBlue: '#2e3b64'
      }
    },
  },
  plugins: [require("daisyui"), require('tw-elements/dist/plugin')],
}
