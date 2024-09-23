/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'backgroundRegister': "url(./assets/backgroundRegister2.jpg)",

      },
    },
  },
  plugins: [],
}
