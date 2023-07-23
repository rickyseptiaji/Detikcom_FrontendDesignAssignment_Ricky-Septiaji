/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: {
          navbar: "#007CBD",
          button: "#3EB7DD",
          bg: "#F4FBFF"
        },
        grey: "#7A7B7E",
      }
    },
  },
  plugins: [],
}

