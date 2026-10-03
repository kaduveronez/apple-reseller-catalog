import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066cc',
          focus: '#0071e3',
          'on-dark': '#2997ff',
        },
        ink: {
          DEFAULT: '#1d1d1f',
          muted80: '#333333',
          muted48: '#7a7a7a',
        },
        body: {
          DEFAULT: '#1d1d1f',
          'on-dark': '#ffffff',
          muted: '#cccccc',
        },
        canvas: {
          DEFAULT: '#ffffff',
          parchment: '#f5f5f7',
        },
        surface: {
          pearl: '#fafafc',
          tile1: '#272729',
          tile2: '#2a2a2c',
          tile3: '#252527',
          black: '#000000',
          chip: 'rgba(210, 210, 215, 0.64)',
        },
        hairline: '#e0e0e0',
        divider: {
          soft: '#f0f0f0',
        },
      },
      fontFamily: {
        sans: [
          'SF Pro Text',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Inter',
          'sans-serif',
        ],
        display: [
          'SF Pro Display',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Inter',
          'sans-serif',
        ],
      },
      letterSpacing: {
        'apple-hero': '-0.28px',
        'apple-tight': '-0.374px',
        'apple-caption': '-0.224px',
        'apple-fine': '-0.12px',
      },
      boxShadow: {
        'apple-product': '3px 5px 30px 0 rgba(0, 0, 0, 0.22)',
      },
      borderRadius: {
        'apple-card': '18px',
        'apple-capsule': '11px',
        'apple-btn': '8px',
      },
      fontSize: {
        'apple-body': ['17px', { lineHeight: '1.47', letterSpacing: '-0.374px' }],
        'apple-body-strong': ['17px', { lineHeight: '1.24', letterSpacing: '-0.374px' }],
        'apple-dense-link': ['17px', { lineHeight: '2.41', letterSpacing: '0' }],
        'apple-tagline': ['21px', { lineHeight: '1.19', letterSpacing: '0.231px' }],
        'apple-lead': ['28px', { lineHeight: '1.14', letterSpacing: '0.196px' }],
        'apple-display-md': ['34px', { lineHeight: '1.47', letterSpacing: '-0.374px' }],
        'apple-display-lg': ['40px', { lineHeight: '1.10', letterSpacing: '0' }],
        'apple-hero-display': ['56px', { lineHeight: '1.07', letterSpacing: '-0.28px' }],
      },
    },
  },
  plugins: [],
};

export default config;
