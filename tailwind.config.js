/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home-pattern': "url('assets/images/homepage.jpg')",
        'home-studio': "url('assets/images/studio.jpg')",
      }
    },
  },
  plugins: [
    
  ],
}
