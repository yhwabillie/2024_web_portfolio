/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xxxs: '320px',
      xxs: '375px',
      xs: '460px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1712px',
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      blue: '#0064FF',
      lightGray: '#888888',
      gray: '#202632',
      transparent: 'transparent',
      red: '#ef4444',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
    },
    zIndex: {
      1: 1000,
      2: 500,
      3: 0,
      4: -1,
    },
    opacity: {
      0: '0',
      20: '0.2',
      40: '0.4',
      60: '0.6',
      80: '0.8',
      100: '1',
    },
    fontFamily: {
      Pretendard: ['Pretendard'],
    },
    extend: {
      colors: {
        primary: 'var(--primary)',
        'text-main': 'var(--text-main)',
      },
      boxShadow: {
        highlight: 'inset 0 -8px 0 #3572EF',
      },
      height: {
        header: '75px',
      },
      margin: {
        header: '75px',
      },
      backgroundImage: {
        'logo-black': "url('/logo/logo_black.png')",
        'logo-white': "url('/logo/logo_white.png')",
        'logo-mobile-white': "url('/logo/mobile_logo_white.png')",
        'logo-mobile-black': "url('/logo/mobile_logo_black.png')",
        'edge-round-1': "url('/header_edge_left_round.svg')",
        'edge-round-2': "url('/header_edge_right_round.svg')",
        'edge-round-3': "url('/header_edge_right_round_light.svg')",
        'edge-round-4': "url('/header_edge_left_round_light.svg')",
        'contact-mask-dark': "url('/contact_mask.svg')",
        'contact-mask-light': "url('/contact_mask_light.svg')",
        'contact-mini-mask-dark': "url('/contact_mini_mask.svg')",
        'contact-mini-mask-light': "url('/contact_mini_mask_light.svg')",
      },
      fontFamily: {
        display: 'Pretendard', // Adds a new `font-display` class
      },

    },
  },
  plugins: [],
}
