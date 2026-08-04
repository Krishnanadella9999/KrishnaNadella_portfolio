/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          deep: '#080B14',
          panel: '#0E1326',
          panel2: '#131A33',
        },
        accent: {
          teal: '#33E6C8',
          amber: '#F5A623',
        },
        ink: {
          DEFAULT: '#EDEFF5',
          muted: '#8B93A9',
          faint: '#5A6178',
        },
        line: '#1E2542',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(51, 230, 200, 0.15)',
        card: '0 20px 50px -20px rgba(0,0,0,0.6)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: 0.5 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out forwards',
        pulseSlow: 'pulseSlow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
