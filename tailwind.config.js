/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
            colors: {
              navy:    '#0a192f',
              forest:  '#1a392a',
              ivory:   '#fdfaf6',
              gold:    '#c5a059',
              goldLight: '#dcc18d',
              champagne: '#f0e6c8',
            },
            fontFamily: {
              serif: ['"Cormorant Garamond"', 'serif'],
              sans:  ['Montserrat', 'sans-serif'],
            }
          
        
      
   

    },
  },
  plugins: [],
}