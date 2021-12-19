module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#197cf1',
      secondary: '#252525',
      danger: '#ef5350;',
    }),
    extend: {
      colors: {
        logo: '#2b79c9',
        primary: '#197cf1',
        secondary: '#252525',
        danger: '#ef5350;',
        green: '#26a587',
      },
      fontSize: {
        logo: '28px',
      },
      fontFamily: {
        serif: ['Titillium Web', 'ui-serif', 'Georgia'],
      },
    },
  },
  plugins: [],
};
