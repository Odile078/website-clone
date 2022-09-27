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
        brandred:{
          light:"#06c",
          DEFAULT:"#98202b",
          dark:"#2997ff"
        },
      }
    },
  },
  plugins: [],
}
