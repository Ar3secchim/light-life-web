/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    container: {
      padding: '1.5rem',
    },
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  daisyui: {
    themes: [
      {
        "mytheme": {
          "primary": '#32470C',
          "secondary": '#e5e7eb',
          "terciary": '#3E4F1F',
          "accent": '#aed62a',
          "neutral": '#18181B',
          'base-100': '#18181B',
          "info": '#a3e635',
          "success": '#65a30d',
          "warning": '#fbbf24',
          "error": '#eb3761',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
