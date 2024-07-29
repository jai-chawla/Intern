/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue-navbarOne': "#080d29",
        'dark-blue-navbarTwo': "#111739",
        'home-bg-color':     "#1d2345" ,
        'home-bar-color':"#282d4d",
        'bottom-button-color':"#6e6ed9"
    },
  },
  plugins: [],
}
}