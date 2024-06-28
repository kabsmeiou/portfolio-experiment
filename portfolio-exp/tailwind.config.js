/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'temp-image': "url('/src/assets/1月壁紙_PC.png')",
      },
      spacing: {
        '90p': '90%',  //adds a custom spacing utility for 90%
        '42r': '42rem',
        '36r' : '36rem',
      },
      boxShadow: {
        'glow': '0 0 10px 5px rgba(255, 255, 255, 0.6)',
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['hover'],
    },
  },
  plugins: [],
}