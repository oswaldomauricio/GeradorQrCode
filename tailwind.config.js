/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'green-black': '#012626',
        'green-blue': '#04BFAD',
        'green-blue-hover': '#046B61',
        'green-main': '#01403A',
        'green-button': '#038C7F',
        'gray-text': '#C4C4C4',
      },
      spacing: {
        '75px': '75px',
      },
      fontFamily: {
        'default-font': ['Poppins', 'sans-serif'],
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [
  ],
  blocklist: [
    'container',
    'collapse',
  ],
}