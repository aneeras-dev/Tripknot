import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#F6F4EF',
        bg2: '#ECE8DF',
        ink: '#0E1413',
        ink2: '#1A2120',
        muted: '#5A625F',
        teal: { DEFAULT: '#0D7A7B', dark: '#0a5f60', light: '#5BC1C2' },
        rust: '#B84A32',
        charcoal: '#0B100F'
      },
      fontFamily: {
        display: ['var(--font-bricolage)', 'serif'],
        sans: ['var(--font-figtree)', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
export default config;
