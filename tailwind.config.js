module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: {
    //   red: {
    //     100: '#ff0000',
    //   },
    // },
    extend: {
      fontSize: {
        '1.5xl': '1.375rem', // 22px
        '3xl': '1.75rem', // 28px
      },
    },
  },
  plugins: [],
}
