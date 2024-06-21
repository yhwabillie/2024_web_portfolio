/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/layouts/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xxs: '280px',
      xs: '416px',
      sm: '768px',
      md: '1024px',
      lg: '1440px',
      xl: '1903px',
    },
    maxWidth: {
      xxs: '100%',
      xs: '384px',
      sm: '712px',
      md: '948px',
      lg: '1316px',
      xl: '1712px',
    },
    fontSize: {
      xl_header: '1.8rem',
      nav_icon: '2.6rem',
      sm: '1.4rem',
    },
    lineHeight: {
      header: '8.4rem',
      xl_header: '9rem',
    },
    borderRadius: {
      nav_icon: '1.8rem',
    },
    colors: {
      primary: 'var(--primary)',
      black: '#000000',
      white: '#ffffff',
      dark_gray: '#333333',
      light_gray: '#cccccc',
      transparent: 'transparent',
      icon_hover_bg: 'var(--active-hover)',
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
      //별도로 클래스 설정
      width: {
        desktop_logo: '19.2rem',
        mobile_logo: '7.7rem',
        nav_icon: '3.6rem',
      },
      height: {
        xl_header: '90px',
        md_header: '72px',
        header: '84px',
        mobile_logo: '3.4rem',
        nav_icon: '3.6rem',
      },
      margin: {
        xl_header: '90px',
        md_header: '72px',
        header: '84px',
      },
      padding: {
        mobile: '1.4rem',
        2: '2rem',
      },
      colors: {
        bg_primary: 'var(--bg-primary)',
        text_primary: 'var(--text-primary)',
      },
      boxShadow: {
        highlight: 'inset 0 -8px 0 #3572EF',
      },
      backgroundImage: {
        'logo-black': "url('/logo/logo_black.png')",
        'logo-white': "url('/logo/logo_white.png')",
        logo_mobile_dark: "url('/logo/mobile_logo_white.png')",
        logo_mobile_light: "url('/logo/mobile_logo_black.png')",
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
