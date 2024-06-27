/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#C4E4FF",
        primary: "#D20062",
        secondary: "#D6589F",
        tertiary: "#D895DA",
        accent: "#FFD700",
        white: "#FFFFFF",
        cyan: "#00ffe5",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      fontStyle: {
        italic: "italic",
        normal: "normal",
      },
    },
  },
  plugins: [],
};
