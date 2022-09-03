/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'system-ui']
      },
      colors: {
        'primary-bg': 'rgb(13,23,20)',
        'primary-card': 'rgb(27,47,45)',
        'primary-border': 'rgb(94,149,125)',
        'primary-title': 'rgb(137,246,208)'
      }
    },
  },
  plugins: [],
}
