/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  // ...
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'progress-grow': {
          from: { width: '0%' },
          to: { width: '100%' }
        },
        'enhance-header-light': {
          to: {
            background: 'rgba(250, 250, 250,.4)',
            backdropFilter: 'blur(5px)',
            paddingTop: '1px'
          }
        },
        'enhance-header-dark': {
          to: {
            background: 'rgba(22, 22, 22,.4)',
            backdropFilter: 'blur(5px)',
            paddingTop: '1px'
          }
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
        'spin-once': 'spin-once 0.3s linear both'
      },
      transition: {}
    }
  },
  plugins: []
}
