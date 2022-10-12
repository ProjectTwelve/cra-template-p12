/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}', './public/index.html'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        xl: '1366px',
        '2xl': '1366px',
      },
      colors: {},
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '200vw 0' },
        },
      },
      animation: {
        gradient: 'gradient 4s linear infinite forwards',
      },
      backgroundImage: {},
      fontFamily: {
        DDin: ['D-DIN'],
        TTLakes: ['TTLakes'],
      },
    },
  },
  plugins: [],
};
