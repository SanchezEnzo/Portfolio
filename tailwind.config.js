/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'progress-grow': {
          from: { width: '0%' },
          to: { width: '100%' }
        },
        'enhance-header': {
          to: {
            background: 'rgba(22, 22, 22,.4)',
            backdropFilter: 'blur(5px)',
            paddingTop: '0.5px'
          }
        }
      },
      animation: {
        'progress-grow': 'progress-grow auto linear',
        'enhance-header': 'enhance-header linear both'
      }
    }
  },
  plugins: []
}
