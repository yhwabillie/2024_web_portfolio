import * as React from 'react'

const applyDarkModeClass = `
  (function() {
    try {
      const theme = window.localStorage.getItem('theme')

      if(theme === null){
        window.localStorage.setItem('theme','dark')
      } else {
        document.getElementsByTagName("body")[0].className = theme === 'dark' ? 'dark bg-bg_primary text-text_primary' : 'light bg-bg_primary text-text_primary';
      }
      
    } catch (e){}
  })();
`

const Attributes = {
  className: 'dark bg-primary text-text-main',
}

// export const onPreRenderHTML = ({ setPreBodyComponents }) => {
//   const script = React.createElement("script", {
//     key:'theme',
//     dangerouslySetInnerHTML: {
//       __html: applyDarkModeClass,
//     },
//   });

//   setPreBodyComponents([script]);
// }

export const onRenderBody = ({ setHeadComponents, setBodyAttributes, setHtmlAttributes, setPreBodyComponents }) => {
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

  const script = React.createElement('script', {
    key: 'theme',
    dangerouslySetInnerHTML: {
      __html: applyDarkModeClass,
    },
  })

  setPreBodyComponents([script])
  setBodyAttributes(Attributes)
}
