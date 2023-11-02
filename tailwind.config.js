/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translate3d(0, 100%, 0)' },
          'to': { opacity: '1', transform: 'translatez(0)' }
        }
      },
      animation: {
        fadeIn: "fadeIn 3s"
      }
    },
  },
  plugins: [],
}

