import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  extend: {

    backgroundColor: {
      default: '#991B1B', // red-800 hex
    },
    colors: {
      redAccent: '#FD1D1D',
      orangeAccent: '#FCB045',
      
    },
    backgroundImage: {
      'custom-gradient': 'linear-gradient(to right, #FD1D1D, #FCB045)',
    },
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
    },
  },
},

  // tailwind.config.js
plugins: [require('tailwind-scrollbar-hide')],

} satisfies Config;