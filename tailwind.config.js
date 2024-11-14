/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['OpenSan', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'clamp-try-btn': 'clamp(0.7rem, 1vw, 1rem)',
        'clamp-intro-title': 'clamp(1.5rem, 5vw, 3rem)', 
        'clamp-intro-text': 'clamp(0.875rem, 2.5vw, 1.25rem)', 
      },
    },
  },
  plugins: [],
}

