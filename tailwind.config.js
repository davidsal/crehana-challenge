import COLORS from './src/theme/colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './src/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'poppins-light': ['Poppins-Light', 'sans-serif'],
        poppins: ['Poppins-Regular', 'sans-serif'],
        'poppins-bold': ['Poppins-Medium', 'sans-serif'],
      },
      colors: {
        background: {
          DEFAULT: COLORS.background.light,
          dark: COLORS.background.dark,
        },
        onBackground: {
          DEFAULT: COLORS.onBackground.light,
          dark: COLORS.onBackground.dark,
        },
        primary: {
          DEFAULT: COLORS.primary.light,
          dark: COLORS.primary.dark,
        },
        border: {
          DEFAULT: COLORS.border.light,
          dark: COLORS.border.dark,
        },
      },
    },
  },
  darkMode: 'media',
  plugins: [],
};
