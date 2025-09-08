/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#1a102c',
        'bg-light': '#2c1c4d',
        'primary': '#9f7aea',
        'secondary': '#f0c38e',
        'accent-green': '#4ade80',
        'accent-red': '#f87171',
        'glow-purple': '#c084fc',
      },
      fontFamily: {
        'cinzel': ['"Cinzel Decorative"', 'cursive'],
        'orb-bit': ['"Orbitron"', 'sans-serif'],
      },
      boxShadow: {
        'glow-green': '0 0 5px #4ade80, 0 0 10px #4ade80, 0 0 15px #4ade80',
        'glow-purple': '0 0 5px #c084fc, 0 0 10px #c084fc, 0 0 15px #c084fc',
        'glow-red': '0 0 5px #f87171, 0 0 10px #f87171, 0 0 15px #f87171',
      }
    },
  },
  plugins: [],
};