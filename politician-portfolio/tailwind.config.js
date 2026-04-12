/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F2C59',
          light: '#1A3A6B',
          dark: '#081A3A',
        },
        saffron: {
          DEFAULT: '#E87722',
          light: '#F59542',
          dark: '#C45F0A',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#DFC06A',
        },
        congress: {
          green: '#138808',
          blue: '#0066CC',
        },
        surface: '#F8F9FB',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        kannada: ['Noto Sans Kannada', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
