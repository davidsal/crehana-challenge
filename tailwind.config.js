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
          DEFAULT: '#ffffff',
          dark: '#181b32',
        },
        onBackground: {
          DEFAULT: '#181b32',
          dark: '#ffffff',
        },
        primary: {
          DEFAULT: '#4b22f4',
          dark: '#4b22f4',
        },
      },
    },
  },
  darkMode: 'media',
  plugins: [],
};
