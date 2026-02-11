/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        display: ['Syncopate', 'sans-serif'],
      },
      animation: {
        'glitch-1': 'glitch-1 2.5s infinite linear alternate-reverse',
        'glitch-2': 'glitch-2 3s infinite linear alternate-reverse',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        'scanline': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' },
        },
        'glitch-1': {
          '0%': { clipPath: 'polygon(0 2%, 100% 2%, 100% 5%, 0 5%)' },
          '10%': { clipPath: 'polygon(0 15%, 100% 15%, 100% 15%, 0 15%)' },
          '20%': { clipPath: 'polygon(0 10%, 100% 10%, 100% 20%, 0 20%)' },
          '30%': { clipPath: 'polygon(0 1%, 100% 1%, 100% 2%, 0 2%)' },
          '40%': { clipPath: 'polygon(0 33%, 100% 33%, 100% 33%, 0 33%)' },
          '50%': { clipPath: 'polygon(0 44%, 100% 44%, 100% 44%, 0 44%)' },
          '60%': { clipPath: 'polygon(0 50%, 100% 50%, 100% 20%, 0 20%)' },
          '70%': { clipPath: 'polygon(0 70%, 100% 70%, 100% 70%, 0 70%)' },
          '80%': { clipPath: 'polygon(0 80%, 100% 80%, 100% 80%, 0 80%)' },
          '90%': { clipPath: 'polygon(0 50%, 100% 50%, 100% 55%, 0 55%)' },
          '100%': { clipPath: 'polygon(0 70%, 100% 70%, 100% 80%, 0 80%)' },
        },
        'glitch-2': {
          '0%': { clipPath: 'polygon(0 25%, 100% 25%, 100% 30%, 0 30%)' },
          '15%': { clipPath: 'polygon(0 3%, 100% 3%, 100% 3%, 0 3%)' },
          '22%': { clipPath: 'polygon(0 5%, 100% 5%, 100% 20%, 0 20%)' },
          '31%': { clipPath: 'polygon(0 20%, 100% 20%, 100% 20%, 0 20%)' },
          '45%': { clipPath: 'polygon(0 40%, 100% 40%, 100% 40%, 0 40%)' },
          '51%': { clipPath: 'polygon(0 52%, 100% 52%, 100% 59%, 0 59%)' },
          '63%': { clipPath: 'polygon(0 60%, 100% 60%, 100% 60%, 0 60%)' },
          '76%': { clipPath: 'polygon(0 75%, 100% 75%, 100% 75%, 0 75%)' },
          '81%': { clipPath: 'polygon(0 65%, 100% 65%, 100% 40%, 0 40%)' },
          '94%': { clipPath: 'polygon(0 45%, 100% 45%, 100% 50%, 0 50%)' },
          '100%': { clipPath: 'polygon(0 14%, 100% 14%, 100% 33%, 0 33%)' },
        },
      },
    },
  },
  plugins: [],
}
