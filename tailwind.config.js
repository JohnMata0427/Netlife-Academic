/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#ED7004",
        secondary: "#FFED00",
        tertiary: "#E30613",
        quaternary: "#4D1053",
        quinary: "#D9D9D9",
        greenlight: '#72C234',
        orangelight: '#FAAB00',
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
