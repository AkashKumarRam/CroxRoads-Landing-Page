/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Raleway'],
        poppins: ['Poppins'],
        roboto: ['Roboto'],
      },
      fontWeight: {
        custom: ['400', '600', '800'],
      },
    },
  },
  plugins: [],
}

