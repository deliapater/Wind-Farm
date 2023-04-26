/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.jsx',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {
      color: {
        grade1: '#00C7B7',
        grade2: '#70C050',
        grade3: '#FFFF00',
        grade4: '#FFC000',
        grade5: '#FF0000',
      },
    },
  },
  variants: {},
  plugins: [],
}
