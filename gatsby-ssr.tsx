import * as React from 'react'

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Pretendard-1.3.9/woff2/Pretendard-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="pretendardFont"
    />,
    <link
      rel="preload"
      href="/fonts/Pretendard-1.3.9/woff2/Pretendard-Medium.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="pretendardFont"
    />,
    <link
      rel="preload"
      href="/fonts/Pretendard-1.3.9/woff2/Pretendard-SemiBold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="pretendardFont"
    />,
    <link
      rel="preload"
      href="/fonts/Pretendard-1.3.9/woff2/Pretendard-Bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="pretendardFont"
    />,
  ])
}
