/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './app/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#26282C',
        white: '#fff',
        primary: '#CA6678',
        github: '#6e40c9',
        npm: '#cb0000',
        linkedin: '#0a66c2',
        twitter: '#1d9bf0',
        javascript: '#FFF208',
        'primary-ligth': '#E98A77',
        'primary-dark': '#9E4B88',
      },
      fontSize: {
        '12xl': ['12rem', '12rem'],
      },
      fontFamily: {
        DMSans: ['DM Sans', 'sans-serif'],
        Aclonica: ['Aclonica', 'sans-serif'],
      },
      boxShadow: {
        shadow1: 'var(--shadow1)',
      },
    },
  },
  plugins: [],
}
