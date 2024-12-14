/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'rgb(13, 27, 42)',
        'dark-icon-blue': 'rgb(22, 53, 76)',
        'dark-icon2-blue': 'rgb(22, 52, 76)',
      },
      fontFamily: {
        'modern-serif': ['Roboto', 'sans-serif'],
      },
      transitionProperty: {
        colors:
          'color, background-color, border-color, text-decoration-color, fill, stroke',
        background: 'background-color',
      },
      // Aquí añades las animaciones dentro de extend
      animation: {
        'scroll-horizontal': 'scroll-horizontal 20s linear infinite',
      },
      keyframes: {
        'scroll-horizontal': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-gradient': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          color: 'transparent',
          '-webkit-text-fill-color': 'transparent',
        },
        '.underline-custom::after': {
          content: '""',
          display: 'block',
          width: '15%',
          height: '6px',
          backgroundColor: '#4ade80',
          marginTop: '4px',
        },
      });
    },
  ],
};
