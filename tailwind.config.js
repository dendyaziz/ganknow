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
          500: '#FF4E58',
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
