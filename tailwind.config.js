/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideLeft: {
          "0%":{
            opacity: "0",
            transform: "translateX(-100px)"
          },
          "100%": {
          transform: "translateX(0)"
          }
        },
        slideRight: {
          "0%":{
            opacity: "0",
            transform: "translateX(100px)"
          },
          "100%": {
          transform: "translateX(0)"
          }
        },
      },
      animation: {
        slideLeft: "slideLeft 0.5s ease-in",
        slideRight: "slideRight 0.5s ease-in"
      }
    },
  },
  plugins: [require('./plugins/openVariant')],
}

