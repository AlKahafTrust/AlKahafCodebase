/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Montserrat', 'sans-serif'],
        body:['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

