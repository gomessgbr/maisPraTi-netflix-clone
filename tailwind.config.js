/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'netflix-background-image': "url('/assets/background-image.jpg')"
      }
    },
  },
  plugins: [],
}

