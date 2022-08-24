module.exports = {
  mode:"jit",
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center:true,
      padding:'2rem',
      screens: {
        sm: '600px',
        md: '700px',
        lg: '984px',
        xl: '1240px',
      },
    },
    colors: {
      white: "#fff",
      gray:{
        1: 'hsl(0, 0%, 98%)',
        2: 'hsl(236, 33%, 92%)',
        3: 'hsl(233, 11%, 84%)',
        4: 'hsl(236, 9%, 61%)',
        5: 'hsl(235, 19%, 35%)'
      },
      black:{
        1:'#25273c',
        2: 'hsl(233, 14%, 35%)',
        3:'hsl(234, 11%, 52%)',
        4:'hsl(236, 33%, 92%)',
        5:'hsl(234, 39%, 85%)',
        6:'hsl(235, 24%, 19%)',
        7:'#bfc1d9'
      }
    },
    extend: { 
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}