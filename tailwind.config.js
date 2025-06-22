/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(17, 17, 17)',
        'background-light': 'rgb(35, 35, 35)',
        'background-dark': 'rgb(8, 8, 8)',
        'bg-opaque': 'rgba(17, 17, 17, 0.25)',
        text: 'rgb(235, 236, 243)',
        brand: '#C4FA70',
      },
    },
  },
  plugins: [],
} 