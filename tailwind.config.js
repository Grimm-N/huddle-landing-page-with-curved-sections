/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#00f0ff',

      },
      fontFamily: {
        openSans: ['OpenSan', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'clamp-try-btn': 'clamp(0.65rem, 1.2vw, 1rem)',
        'clamp-intro-title': 'clamp(1.5rem, 5vw, 3rem)', 
        'clamp-intro-text': 'clamp(0.875rem, 2.5vw, 1.25rem)', 
        'clamp-intro-btn': 'clamp(0.75rem, 2.5vw, 1.25rem)', 
        'clamp-statistic': 'clamp(3.8rem, 7vw, 6rem)', 
        'clamp-statistic-text': 'clamp(0.875rem, 2.5vw, 1.5rem)', 
        'clamp-statistic-messages': 'clamp(3.3rem,7vw, 6rem)', 
        'clamp-section-title': 'clamp(1.25rem, 5vw, 2.5rem)', 
        'clamp-section-text': 'clamp(0.875rem, 2.5vw, 1rem)', 
        'clamp-btn-section': 'clamp(1.5rem, 2.75vw, 3rem)', 
        'clamp-newsletter': 'clamp(1.2rem, 1.5vw, 1.5rem)', 
      },
      screens: {
        'xs': '32.5rem', 
      },
    },
  },
  plugins: [],
}

