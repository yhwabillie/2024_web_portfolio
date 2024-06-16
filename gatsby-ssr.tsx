import * as React from 'react'

// const applyDarkModeClass = `
// (function() {
//   try {
//     var mode = localStorage.getItem('theme');
//     document.getElementsByTagName("html")[0].className = mode === 'dark' ? 'dark' : 'light';
//   } catch (e) {}
// })();
// `

const BodyAttributes = {
  className: 'dark',
}

export const onRenderBody = ({ setHeadComponents, setHtmlAttributes, setPreBodyComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Pretendard-1.3.9/woff2-subset/Pretendard-Regular.subset.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="pretendardFont"
    />,
    <link
      rel="preload"
      href="/fonts/Pretendard-1.3.9/woff2-subset/Pretendard-Medium.subset.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="pretendardFont"
    />,
    <link
      rel="preload"
      href="/fonts/Pretendard-1.3.9/woff2-subset/Pretendard-SemiBold.subset.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="pretendardFont"
    />,
    <link
      rel="preload"
      href="/fonts/Pretendard-1.3.9/woff2-subset/Pretendard-Bold.subset.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="pretendardFont"
    />,
  ])

  setHtmlAttributes(BodyAttributes)
}
