/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'rubik': ['Rubik Mono One'],
    },
    extend: {
      backgroundImage: {
        'authentication': "url('../public/background-authentication.png')",
      }
    },
  },
  plugins: [],
}