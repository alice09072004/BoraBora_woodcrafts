/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom earthy color palette for BoraBora Woodcrafts
        'wood-bg': '#FDFBF7',      // Warm Beige / Soft Off-White - Primary Background
        'wood-text': '#2F2519',    // Deep Bark Brown - Primary Text/Accents
        'wood-green': '#3F5E4D',   // Forest Green - Accent/Buttons
        'wood-green-dark': '#2C4436', // Darker Forest Green variant
        'wood-clay': '#D4A373',    // Sandy Clay - Subtle Highlights
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['Outfit', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
