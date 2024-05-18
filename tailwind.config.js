/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/react/**/*.{js,ts,jsx,tsx}', // NextUI için
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
