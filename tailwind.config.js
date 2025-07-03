/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Luxury Dark Theme Colors
        'dark': {
          900: '#0a0a0a',
          800: '#1a1a1a',
          700: '#2a2a2a',
          600: '#3a3a3a',
          500: '#4a4a4a',
          400: '#6a6a6a',
          300: '#8a8a8a',
          200: '#aaaaaa',
          100: '#d0d0d0',
        },
        'luxury': {
          primary: '#4169E1',
          'primary-light': '#6495ED',
          'primary-dark': '#1E3A8A',
          accent: '#FFFFFF',
          'accent-light': '#F8FAFC',
          'accent-dark': '#E2E8F0',
        },
        'gradient': {
          'dark-start': '#0f0f0f',
          'dark-mid': '#1f1f1f',
          'dark-end': '#2f2f2f',
        }
      },
      fontFamily: {
        'sans': ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #0f0f0f 0%, #1f1f1f 50%, #2f2f2f 100%)',
        'luxury-gradient-reverse': 'linear-gradient(315deg, #0f0f0f 0%, #1f1f1f 50%, #2f2f2f 100%)',
        'royal-gradient': 'linear-gradient(135deg, #4169E1 0%, #6495ED 50%, #1E3A8A 100%)',
        'accent-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 50%, #E2E8F0 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.8s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(65, 105, 225, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(65, 105, 225, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};
