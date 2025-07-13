/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backdropFilter: {
        'md': 'blur(12px)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'card-appear': 'cardAppear 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        cardAppear: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    backdropFilter: true,
  }
}
