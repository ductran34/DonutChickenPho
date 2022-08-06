/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(15rem, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(15rem, 1fr))',
      },
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, minmax(15rem, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(15rem, 1fr))',
      },
    },
  },
  plugins: [],
}
