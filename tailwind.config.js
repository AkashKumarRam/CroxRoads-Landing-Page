/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway'],
        poppins: ['Poppins'],
        roboto: ['Roboto'],
        space:['Space Grotesk'],
        inter:['Inter']
      },
    },
  },
  plugins: [],
}

