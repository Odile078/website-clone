/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  safelist:[ {
    pattern: /.*/,
    },
  ],
  theme: {
    extend: {
      colors:{
        brandblue:{
          light:"#06c",
          DEFAULT:"#06c",
          dark:"#2997ff"
        },
      }
    },
  },
  plugins: [],
}
