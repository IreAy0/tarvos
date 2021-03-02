const { LazyResult } = require("postcss");

module.exports = {
  purge: {
    mode: LazyResult,
    content: ['./public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
       "powerblue":"#c3e5e4",
       "gainsboro":"#e6e6e6",
       "lightgray": "#d1d4d8",
       "linen":"#f7f0e4",
       "lavender":"#fceaf2",
      },
      height: {
        '26': '26rem',
       '27':'27rem',
      },
      width:{
        '26': '26rem',
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
