/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'rgb(13, 27, 42)',
      },
      fontFamily: {
        'modern-serif': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
