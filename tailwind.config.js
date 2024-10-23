/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'pinkyred': {
          500: '#FF0000',
        }
      }
    },
  },
  plugins: [],
};
