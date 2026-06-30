/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#E8F4F8',
          100: '#BCE3F0',
          500: '#0077B6',
          700: '#023E8A',
          900: '#03045E',
        },
        gold: {
          300: '#F0C040',
          500: '#C9A84C',
          700: '#A07830',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
