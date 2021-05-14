module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      'small': '0.833rem',
      'base': '1rem',
      'large': '1.2rem',
      'xl': '1.44rem',
      '2xl': '1.728rem',
      '3xl': '2.074rem',
      '4xl': '2.488rem',
      '5xl': '2.986rem',
      '6xl': '3.583rem',
    },
    extend: {
      colors: {
        customGray: '#121212',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
