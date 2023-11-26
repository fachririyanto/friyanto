/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'f-black': '#3e3e3e',
        'f-font': '#3e3e3e',
        'f-font-meta': '#777',
        'f-border': '#c9c9c9',
      },
      boxShadow: {
        'f-shadow': '0 0 4px rgba(0,0,0,.1)',
      },
      lineHeight: {
        'relaxed': '1.75'
      }
    },
  },
  plugins: [],
}

