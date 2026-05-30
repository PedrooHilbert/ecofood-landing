/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // EcoFood brand palette (from the production app's Colors.xaml)
        brand: {
          DEFAULT: '#2ECC71',
          light: '#E6F8EA',
          dark: '#1B5E3B',
          accent: '#155E3B',
        },
        green: {
          300: '#7EE2A8',
          400: '#4ED687',
          500: '#2ECC71', // Primary
          600: '#22A85D',
          700: '#1B7A45',
          800: '#1B5E3B', // PrimaryDark
          900: '#134A2E',
          950: '#0A2C1B',
        },
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
        'dot-grid-sm': 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-32': '32px 32px',
        'dot-24': '24px 24px',
      },
    },
  },
  plugins: [],
}
