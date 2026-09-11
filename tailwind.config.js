export default {
  content: ['./**/*.{ts,tsx,js,jsx,html}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0b0d',
        surface: '#101114',
        raised: '#16181c',
        line: 'rgba(236, 233, 228, 0.12)',
        ivory: '#ece9e4',
        muted: '#9b988f',
        accent: '#c99a54',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
      },
    },
  },
  plugins: [],
}
