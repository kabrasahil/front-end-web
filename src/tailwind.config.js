/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: ["./../public/index.html", "./**/*.{html,jsx,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
