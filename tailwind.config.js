/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ffdbe0',
          100: '#FFB0BB',
          200: '#FF97A2',
          300: '#FF7E8A',
          400: '#FF6571',
          500: '#FF4E58',
          600: '#E7445C',
          700: '#D03B5E',
          800: '#B8325E',
          900: '#A12A5C',
        },
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
        placement: 'top, right, bottom, left',
        slide: 'top, opacity',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
}
