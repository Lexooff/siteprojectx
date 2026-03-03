/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#0070f3',
          600: '#0062d4',
        },
        secondary: {
          500: '#7928ca',
          600: '#6a20b8',
        }
      }
    },
  },
  plugins: [],
}