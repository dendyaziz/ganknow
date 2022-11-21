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
        secondary: {
          50: '#EBF0F5',
          100: '#CDD9E6',
          200: '#B0C3D6',
          300: '#93ACC5',
          400: '#7995B3',
          500: '#5F7EA0',
          600: '#46678C',
          700: '#2F5076',
          800: '#183960',
          900: '#193453',
        },
        slate: {
          850: '#172133',
        },
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
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
