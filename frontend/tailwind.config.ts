import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: '#3483FA',
        surface: '#0E1116',
        card: '#131A23'
      },
      boxShadow: {
        glow: '0 0 30px rgba(52, 131, 250, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
