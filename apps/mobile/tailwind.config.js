/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      green: '#538177',
      gray: '#222222',
      'gray-light': '#d3dce6',
      white: '#ffffff',
      black: '#000000',
    },
    fontFamily: {
      sans: ['Poppis', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      extend: {},
    },
    plugins: [],
  },
};
