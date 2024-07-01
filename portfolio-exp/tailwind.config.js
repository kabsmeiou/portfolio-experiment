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
        '90p': '90%',  
        '80p': '80%',  
        '70p': '70%',
        '60p': '60%',    
        '25p': '25%', 
        '35p': '35%',      
        '42r': '42rem',
        '36r' : '36rem',
        '32r' : '32rem',
        '108px' : '108px',
        '50px' : '50px',
      },
      boxShadow: {
        'glow': '0 0 10px 5px rgba(255, 255, 255, 0.6)',
      },
      fontWeight: {
        'max' : '1500',
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