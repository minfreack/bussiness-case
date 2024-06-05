/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6F44B4',
        headers: '#222222',
        table: '#444444',
      }
    },
  },
  plugins: [],
}

