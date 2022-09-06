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
      },
      width: {
        primary: '1600px'
      },
      screens: {
        sm: '468px',
        '2sm': '576px',
        md: '960px',
        lg: '1124px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
}
