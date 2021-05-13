module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
