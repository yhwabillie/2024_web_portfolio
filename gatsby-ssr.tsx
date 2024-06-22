import * as React from 'react'

// SSR 로컬스토리지 테마 값 설정 및 판단하여 테마 스타일 적용
// 로컬 테마 값이 없으면 Dark로 설정하고 body에 테마 적용
// 로컬 테마 값이 존재하면 Light, Dark 를 판단하여 body에 테마 적용
const applyDarkModeClass = `
  (function() {
    try {
      const theme = window.localStorage.getItem('theme')

      if(theme === null){
        window.localStorage.setItem('theme','dark')
        document.getElementsByTagName("body")[0].className = 'dark bg-theme text-theme-reverse'

      } else {
        document.getElementsByTagName("body")[0].className = theme === 'dark' ? 'dark bg-theme text-theme-reverse' : 'light bg-theme text-theme-reverse';
      }
      
    } catch (e){}
  })();
`

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
}
