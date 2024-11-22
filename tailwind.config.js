/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        primary: '#000000',
        secondary: '#172554',
        third: '#2563eb',
        fourth: '#ffff',
        fiveth: '#ed2b13',
      },

    },
  },
  plugins: [],
}