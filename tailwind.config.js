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
        'git': "url('/src/assets/icons8-github-100.png')",
        'facebook': "url('/src/assets/icons8-facebook-100.png')",
        'discord': "url('/src/assets/icons8-discord-square-100.png')",
        'gmail': "url('/src/assets/icons8-gmail-logo-100.png')",
        'linkedin': "url('/src/assets/icons8-linkedin-100.png')",
        'phone': "url('/src/assets/icons8-phone-100.png')",
      },
      spacing: {
        '4.2': '4.2rem',
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
        '216px' : '216px',
        '50px' : '50px',
        '256': '256px',
        '64p': '64px',
      },
      boxShadow: {
        'glow': '0 0 10px 5px rgba(255, 255, 255, 0.6)',
        'glow-subtle': '0 0 10px 3px rgba(255, 255, 255, 0.4)',
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