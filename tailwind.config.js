/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      navy: '#0F1B2D',
      forest: '#0F3D2E',
      ivory: '#F8F5F0',
      gold: '#D4AF37',
    }
    },
  },
  plugins: [],
}