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
        'clamp-try-btn': 'clamp(0.65rem, 1vw, 1rem)',
        'clamp-intro-title': 'clamp(1.5rem, 5vw, 3rem)', 
        'clamp-intro-text': 'clamp(0.875rem, 2.5vw, 1.25rem)', 
        'clamp-intro-btn': 'clamp(0.75rem, 2.5vw, 1.25rem)', 
        'clamp-statistic': 'clamp(3.75rem, 7vw, 6rem)', 
        'clamp-statistic-messages': 'clamp(3.3rem, 5vw, 6rem)', 
        'clamp-section-title': 'clamp(1.25rem, 5vw, 2.5rem)', 
        'clamp-section-text': 'clamp(0.875rem, 2.5vw, 1rem)', 
      },
    },
  },
  plugins: [],
}

