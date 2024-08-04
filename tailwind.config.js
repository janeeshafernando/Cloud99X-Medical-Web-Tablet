/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }

      'md': '375px',
      // => @media (min-width: 375px) { ... }

      'lg': '425px',
      // => @media (min-width: 425px) { ... }

      'xl': '768px',
      // => @media (min-width: 768px) { ... }

      '2xl': '1024px',
      // => @media (min-width: 1024px) { ... }
      
      '3xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        'cyan-150': '#089BAB',
        'cyan-350': '#13CBD5',
        'slate-150': '#EFF7F8',
        'slate-850': '#121A2D',
        'emerald-150': '#E6F5F6',
        'teal-150': '#CEEBEE',
        'orange-350': '#FEAD54',
        'emerald-350': '#0AA55D',
        'gray-350': '#888C96',
        'sky-150': '#D7FBFF',
        'teal-250': '#94E2EB',
        'red-350': '#FD988B',
        'red-550' : '#FFE3DF',
        'neutral-250': '#E1E1E1',
        'stone-350': '#C8C8C8',
        'teal-450': '#16C0C0',
        
       
      },
    },
  },
  plugins: [],
}