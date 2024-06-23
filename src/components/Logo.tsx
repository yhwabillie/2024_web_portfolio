import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const Logo = ({ themeModeState }: { themeModeState: boolean }) => {
  return (
    <>
      {themeModeState ? (
        <StaticImage src={'../images/logo/logo_darkmode.webp'} alt="웹사이트 로고 다크모드" layout="fixed" width={151} height={36} />
      ) : (
        <StaticImage src={'../images/logo/logo_lightmode.webp'} alt="웹사이트 로고 라이트모드" layout="fixed" width={151} height={36} />
      )}
    </>
  )
}

export default Logo
