/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#415EAC',
        secondary: '#60945F',
        secondary: '#60945F',
        beige: '#E2DDBF',
        gray: '#757575'
        // ...
      }
    },
    fontFamily: {
      'inconsolata': ['Inconsolata', 'sans-serif'],
    },
  },
  plugins: [],
}

