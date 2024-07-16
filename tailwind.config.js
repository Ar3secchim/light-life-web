/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        error: '#FA3434',
        white: '#ffffff',
        primary: '#34786A',
        secondary: '#7A7B85',
        'secondary-dark': {
          100: '#EEEEF0',
          150: '#FDFDFF',
          200: '#B2B3BD',
          300: '#6C6E78',
          400: '#5F6069',
          500: '#47484E',
          600: '#393A3F',
          700: '#303136',
          800: '#292A2D',
          850: '#222225',
        },
        'primary-dark': {
          100: '#C7F3E8',
          200: '#88CCBC',
          300: '#428577',
          400: '#397D6F',
          500: '#2F665B',
          600: '#23554A',
          700: '#16463D',
          800: '#0D3931',
        },
        'primary-ligth': {
          800: '#75B3A5',
        },
        'bg-green': {
          600: '#111A18',
          650: 'rgb(var(--bg-green-650) / <alpha-value>)',
          850: 'rgb(var(--bg-green-850) / 0.07)',
        },
        'bg-gray': {
          700: '#19191B',
          750: 'rgb(var(--bg-gray-750) / <alpha-value>)',
          800: '#111113',
          850: 'rgb(var(--bg-gray-850) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['var(--font-Sf-Roudend)'],
        sans: ['var(--font-Sf-Pro)'],
      },
      boxShadow: {
        'lg-invert':
          '0 -12px 15px -5px rgb(0 0 0 / 0.1), 0 -5px 6px -5px rgb(0 0 0 / 0.1);',
        lg: '0 12px 15px -5px rgb(0 0 0 / 0.1), 0 5px 6px -5px rgb(0 0 0 / 0.1);',
      },
    },
  },
  plugins: [],
};
