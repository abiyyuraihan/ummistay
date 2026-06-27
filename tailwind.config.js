/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#EEF2F8',
          100: '#D4DFF0',
          500: '#2563EB',
          700: '#1E3A5F',
          900: '#0F2038',
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
