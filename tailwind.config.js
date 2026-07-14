export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // Slate 900
        secondary: '#3b82f6', // Blue 500
        accent: '#2563eb', // Blue 600
        'light-bg': '#f8fafc',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)',
        'gradient-hero': 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%)',
      }
    },
  },
  plugins: [],
}
