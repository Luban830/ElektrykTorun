/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Branding colors
        primary: {
          50: '#FEFCE8',
          100: '#FEF3C7',
          500: '#F5C518', // Main yellow accent
          600: '#D97706',
          700: '#B45309',
        },
        gray: {
          50: '#F9FAFB', // Main background
          100: '#F3F4F6',
          200: '#E5E7EB', // Lines, subtle divisions
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563', // Subtle text
          700: '#374151',
          800: '#1F2937',
          900: '#111827', // Dark text
        },
        red: {
          500: '#E53935', // Emergency section
          600: '#DC2626',
        }
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
