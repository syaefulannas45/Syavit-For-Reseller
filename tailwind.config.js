/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tittle: "#EC7979",
        text: "#333333",
        button: "#49AB5E",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
