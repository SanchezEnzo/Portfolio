/** @type {import('tailwindcss').Config} */
export default {
  // ...
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'progress-grow': {
          from: { width: '0%' },
          to: { width: '100%' }
        },

        'spin-once': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(90deg)' }
        }
      },
      animation: {
        'progress-grow': 'progress-grow auto linear',
        'enhance-header-light': 'enhance-header-light linear both',
        'enhance-header-dark': 'enhance-header-dark linear both',
        'expand-header': 'expand-header linear both',
        'spin-once': 'spin-once 0.3s linear both'
      },
      transition: {}
    }
  },
  plugins: []
}
