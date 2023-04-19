const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './views/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-linear--black': 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.028) 100%);',
        'gradient-linear--black--tr': 'linear-gradient(90deg, rgba(50, 50, 50, 0.33) 75.16%, rgba(50, 50, 50, 0) 106.26%);'
      },
      fontFamily: {
        'heading': ['var(--font-heading)', ...fontFamily.sans],
        'body': ['var(--font-body)', ...fontFamily.sans],
        'alt': ['var(--font-alt)', ...fontFamily.sans],
        'mono': ['var(--font-mono)', ...fontFamily.mono],
      }
    },
  },
  plugins: [],
}
