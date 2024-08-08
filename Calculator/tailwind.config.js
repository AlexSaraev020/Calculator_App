/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glow': "0 0px 20px rgba(255,255, 255, 0.35)",
        'glow-sm': "0 0px 10px rgba(255,255, 255, 0.35)",
      },
      keyframes: {
        blink: {
          '0%': {
            opacity: '0',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            opacity: ' 0',
          },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '100%': { opacity: 100 },
          '0%': { opacity: 0 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-in-out',
        blink: 'blink 0.5s infinite both',
      },
      colors: {
        'darkGray': {
          500: '#282C36',
          600: '#21242C'
        },
      },
    },
    plugins: [],
  }
}