/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      colors: {
        'dark-bg': '#0a0a0a',        // Lebih gelap, mendekati hitam pekat
        'dark-surface': '#121212',   // Surface yang sangat gelap
        'primary': '#D4AF37',        // Metallic Gold
        'primary-light': '#F4C430',  // Lighter Gold
        'text-light': '#F5F5F5',     // Off-white
        'text-muted': '#888888',     // Abu-abu elegan
        'border-color': 'rgba(255, 255, 255, 0.1)', // Border tipis transparan
      },
      boxShadow: {
        'glow': '0 0 20px rgba(212, 175, 55, 0.15)', // Glow emas lembut
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'slow-spin': 'spin 10s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};