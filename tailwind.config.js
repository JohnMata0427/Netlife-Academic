import animations from "@midudev/tailwind-animations";
import purgecss from "@fullhuman/postcss-purgecss";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#ED7004", // Naranja
        secondary: "#FFED00", // Amarillo
        tertiary: "#E30613", // Rojo
        quaternary: "#4D1053", // Morado
        quinary: "#ECECEC", // Gris
        greenlight: "#72C234", // Verde
        orangelight: "#FAAB00", // Naranja claro
      }
    },
  },
  plugins: [
    animations,
    purgecss({
      content: ["./src/**/*.{html,ts}"],
    }),
  ],
};
