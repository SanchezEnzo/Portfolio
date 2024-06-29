/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'progress-grow': {
          from: { width: '0%' },
          to: { width: '100%' }
        }
      },
      animation: {
        'progress-grow': 'progress-grow auto linear'
      }
    }
  },
  plugins: []
}
