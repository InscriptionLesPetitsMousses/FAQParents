export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        sand: '#F2F6FA',
        rope: '#DCE6EE',
        line: '#D5E1EA',
        marine: {
          DEFAULT: '#143A5C',
          dark: '#0D2740',
          soft: '#41627F',
          faint: '#5E7B93',
        },
        sea: {
          DEFAULT: '#2C6FA8',
          light: '#E2EDF7',
        },
        buoy: {
          DEFAULT: '#C4432F',
          light: '#F9E5E1',
        },
      },
      fontFamily: {
        display: ['"Baloo 2"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
      },
      maxWidth: {
        shell: '1120px',
      },
    },
  },
  plugins: [],
}
