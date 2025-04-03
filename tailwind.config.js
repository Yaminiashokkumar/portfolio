/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#2563eb',    // Bright blue
        secondary: '#7c3aed',  // Vibrant purple
        accent: '#10b981',     // Emerald green
        background: '#f8fafc', // Light gray background
        textPrimary: '#ccd6f6',
        textSecondary: '#8892b0',
        darkBg: '#020c1b',
        cardBg: '#112240',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} 