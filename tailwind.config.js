/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'text': 'textShine 5s linear infinite',
      },
    },
  },
  plugins: [],
};