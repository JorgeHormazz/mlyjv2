/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a365d',
          950: '#0c1a2e',
          900: '#122544',
          800: '#1a365d',
          700: '#274a79',
          600: '#345f97',
        },
        gold: {
          DEFAULT: '#c9a24a',
          light: '#e7cf94',
          dark: '#9c7a2f',
        },
        paper: '#f8f6f1',
        ink: '#151a21',
        stone: {
          50: '#f8f6f1',
          100: '#efece3',
          200: '#e2ddd0',
          400: '#9c9587',
          600: '#65605a',
          800: '#3a3733',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
        ui: ['Manrope', 'ui-sans-serif', 'sans-serif'],
        body: ['"Work Sans"', 'ui-sans-serif', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.22em',
      },
      boxShadow: {
        card: '0 4px 24px rgba(12, 26, 46, 0.08)',
        cardLg: '0 12px 40px rgba(12, 26, 46, 0.14)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
