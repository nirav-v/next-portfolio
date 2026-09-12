import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'icon-muted': 'rgb(var(--color-icon-muted) / <alpha-value>)',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' }, // At the start and end, no rotation
          '50%': { transform: 'rotate(15deg)' }, // Rotate 15 degrees at the midpoint
        },
        slideInLeft: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        wave: 'wave 1s ease-in-out infinite',
        'wave-once': 'wave 1s ease-in-out 3',
        slideInLeft: 'slideInLeft 1s ease-out forwards',
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
export default config;
