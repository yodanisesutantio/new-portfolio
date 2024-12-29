/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mclaren': ['McLaren', 'serif'],
        'nunito': ['Nunito', 'sans-serif'],
      },
      keyframes: {
        changeColorDay: {
          '0%': { color: '#FFFBFC' }, // Start with white
          '100%': { color: '#CAFE48' }, // End with lime green
        },
        changeColorNight: {
          '0%': { color: '#FFFBFC' }, // Start with white
          '100%': { color: '#57467B' }, // End with purple
        },
      },
      animation: {
        changeColorDay: 'changeColorDay 0.4s ease-out 1.5s forwards',
        changeColorNight: 'changeColorNight 0.4s ease-out 2.5s forwards',
      },
    },
  },
  plugins: [],
}

