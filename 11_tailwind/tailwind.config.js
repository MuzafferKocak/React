/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#891652",
        primary_hover: "#1450A3",
        dark: "#526D82",
        darker: "#27374D",
        blue: {
          950: "#17275c",
        },
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
