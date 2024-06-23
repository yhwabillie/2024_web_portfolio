/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/layouts/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xxs: '17.5rem', // 280px
      xs: '26rem', // 416px
      sm: '48rem', // 768px
      md: '64rem', // 1024px
      lg: '90rem', // 1440px
      xl: '118.938rem', // 1903px
    },
    maxWidth: {
      xxs: '100%',
      xs: '24rem', // 384px
      sm: '44.5rem', // 712px
      md: '59.25rem', // 948px
      lg: '82.25rem', // 1316px
      xl: '107rem', // 1712px
      sidebar: '25.75rem', // 412px
    },
    width: {
      full: '100%',
      'icon-medium': '2.125rem',
      'icon-large': '2.25rem',
    },
    height: {
      full: '100%',
      'icon-medium': '2.125rem',
      'icon-large': '2.25rem',
      'header-small': '4.5rem',
      'header-medium': '5.25rem',
      'header-large': '5.625rem',
    },
    fontSize: {
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.5rem',
      'icon-small': '1.625rem',
      'icon-medium': '2.125rem',
    },
    lineHeight: {
      'header-small': '4.5rem',
      'header-medium': '5.25rem',
      'header-large': '5.625rem',
      lg: '2.25rem',
      xl: '2.5rem',
    },
    borderRadius: {
      sm: '1.125rem',
      md: '1.25rem',
    },
    colors: {
      theme: 'var(--theme)',
      'theme-reverse': 'var(--theme-reverse)',
      'theme-gray': 'var(--theme-gray)',
      'theme-active': 'var(--theme-active)',
      'theme-unactive': 'var(--theme-unactive)',
      'theme-hover': 'var(--theme-hover)',
      blue: '#0064FF',
      white: '#ffffff',
      black: '#333333',
      transparent: 'transparent',
    },
    margin: {
      auto: 'auto',
      'header-small': '4.5rem',
      'header-medium': '5.25rem',
      'header-large': '5.625rem',
    },
    padding: {
      zero: '0rem',
      xs: '0.875rem',
      sm: '1.5rem',
      md: '2.25rem',
      lg: '2.938rem',
      xl: '4.125rem',
      mobile: '0.875rem',
      2: '1.25rem',
      0: '0rem',
    },
    zIndex: {
      0: 9999,
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
    extend: {},
  },
  plugins: [],
}
