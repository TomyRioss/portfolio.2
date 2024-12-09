/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'rgb(13, 27, 42)',
      },
      fontFamily: {
        'modern-serif': ['Roboto', 'sans-serif'],
      },
      transitionProperty: {
        colors:
          'color, background-color, border-color, text-decoration-color, fill, stroke',
        background: 'background-color',
      },
    },
  },
  plugins: [],
};
