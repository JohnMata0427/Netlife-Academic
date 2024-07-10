/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto'],
    },
    extend: {
      backgroundImage: {
        'authentication': "url('../public/background-authentication.png')",
      }
    },
  },
  plugins: [],
}