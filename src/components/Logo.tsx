import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { LOCAL_THEME } from '../types/enums'
import { ThemeModeStateType } from '../types/globalTypes'

const Logo = ({ themeModeState }: { themeModeState: ThemeModeStateType }) => {
  return (
    <>
      {themeModeState === LOCAL_THEME.DARK_VALUE ? (
        <StaticImage
          src={'../images/logo/logo_darkmode.webp'}
          alt="웹사이트 로고 다크모드"
          layout="fixed"
          width={152}
          height={36}
          placeholder="none"
        />
      ) : (
        <StaticImage
          src={'../images/logo/logo_lightmode.webp'}
          alt="웹사이트 로고 라이트모드"
          layout="fixed"
          width={152}
          height={36}
          placeholder="none"
        />
      )}
    </>
  )
}

export default Logo
