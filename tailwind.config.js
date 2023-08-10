/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', 'sans-serif'",
      },
      colors: {
        accent: "#228be6",
        aside: "#9f9f9f",
        dark: "#101010",
        light: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
