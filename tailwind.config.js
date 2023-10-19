/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'f-font': '#5e5e5e',
        'f-font-meta': '#919191',
      },
      boxShadow: {
        'f-shadow': '0 0 4px rgba(0,0,0,.1)',
      },
    },
  },
  plugins: [],
}

