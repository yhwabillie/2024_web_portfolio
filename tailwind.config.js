/** @type {import('tailwindcss').Config} */

function pxToRem(px, base = 16) {
  return `${px / base}rem`
}

module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/layouts/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xxs: pxToRem(280),
      xs: pxToRem(416),
      sm: pxToRem(768),
      md: pxToRem(1024),
      lg: pxToRem(1440),
      xl: pxToRem(1903),
    },
    maxWidth: {
      xxs: '100%',
      xs: pxToRem(384),
      sm: pxToRem(712),
      md: pxToRem(948),
      lg: pxToRem(1316),
      xl: pxToRem(1712),
      sidebar: pxToRem(412),
    },
    width: {
      full: '100%',
      'icon-medium': '2.125rem',
      'icon-large': '2.25rem',
      tooltip: pxToRem(100),
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
