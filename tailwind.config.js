/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#ED7004", // Naranja
        secondary: "#FFED00", // Amarillo
        tertiary: "#E30613", // Rojo
        quaternary: "#4D1053", // Morado
        quinary: "#ECECEC", // Gris
        greenlight: '#72C234', // Verde
        orangelight: '#FAAB00', // Naranja claro
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
