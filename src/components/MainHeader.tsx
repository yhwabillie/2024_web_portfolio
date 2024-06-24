import * as React from 'react'
import { Link } from 'gatsby'
import { MdOutlineLightMode, MdNightlight, MdOutgoingMail } from 'react-icons/md'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { IoCloseOutline } from 'react-icons/io5'
import { useSidebarStatusStore } from '@store/storehooks'
import { NavItemType, ThemeModeStateType, TooltipType } from '@/types/globalTypes'
import { LOCAL_THEME, SIDEBAR_STATUS, TOOLTIP } from '@/types/enums'
import Logo from '@components/Logo'
import Tooltip from '@components/Tooltip'
import { navList } from '@constants/common'

export default function MainHeader() {
  //define window
  if (typeof window === 'undefined') return

  //local storage
  const currentTheme: ThemeModeStateType = window.localStorage.getItem(LOCAL_THEME.LOCAL_KEY)

  //state
  const [themeModeState, setThemeModeState] = React.useState<ThemeModeStateType>(currentTheme)
  const [showTooltip, setShowTooltip] = React.useState<TooltipType>(TOOLTIP.RESET)

  //zustand state
  const { sidebarStatus, setSidebarStatus } = useSidebarStatusStore()

  //tooltip components
  const TooltipComponent: Record<TooltipType, JSX.Element> = {
    mail: <Tooltip text="메일 보내기" />,
    theme: <Tooltip text="테마 변경" />,
    reset: <></>,
  }

  //툴팁 호버 event
  const handleTooltip = (tooltip: TooltipType) => setShowTooltip(tooltip)
  const resetTooltip = () => setShowTooltip(TOOLTIP.RESET)

  //로컬 테마모드 변경하기 event
  const changeThemeMode = () => {
    const bodyElement = document.getElementsByTagName('body')

    switch (currentTheme) {
      case LOCAL_THEME.DARK_VALUE:
        window.localStorage.setItem(LOCAL_THEME.LOCAL_KEY, LOCAL_THEME.LIGHT_VALUE)
        bodyElement[0].classList.replace(LOCAL_THEME.DARK_VALUE, LOCAL_THEME.LIGHT_VALUE)
        setThemeModeState(LOCAL_THEME.LIGHT_VALUE)
        break

      case LOCAL_THEME.LIGHT_VALUE:
        window.localStorage.setItem(LOCAL_THEME.LOCAL_KEY, LOCAL_THEME.DARK_VALUE)
        bodyElement[0].classList.replace(LOCAL_THEME.LIGHT_VALUE, LOCAL_THEME.DARK_VALUE)
        setThemeModeState(LOCAL_THEME.DARK_VALUE)
        break
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full border-b h-header-small lg:h-header-medium xl:h-header-large bg-theme text-theme-reverse z-1 border-theme-gray">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <h1 className="sr-only">Portfolio Website (웹사이트 이름)</h1>
          <Logo themeModeState={themeModeState} />
        </Link>

        <nav className="items-center hidden desktop-gnb-wrap md:flex">
          <ul className="flex h-full">
            {navList.map((item: NavItemType, index: number) => (
              <li
                key={index}
                className="px-2 text-md lg:text-lg hover:text-theme-active text-theme-unactive leading-header-small lg:leading-header-medium xl:leading-header-large"
              >
                <Link to={item.href} className="block w-full h-full transition-colors">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Sidebar Menu */}
        <div
          className={`${sidebarStatus === SIDEBAR_STATUS.OPEN ? 'translate-x-0' : 'translate-x-full'} md:hidden w-full h-full bg-theme fixed left-0 top-0 z-1 overflow-x-hidden overflow-y-auto transition-transform`}
        >
          <div className="relative flex flex-col min-h-full mx-auto max-w-sidebar px-xs pb-md sm:px-zero">
            <strong className="block py-sm">
              <Link to="/">
                <span className="sr-only">Portfolio Website (웹사이트 이름)</span>
                <Logo themeModeState={themeModeState} />
              </Link>
            </strong>

            {/* Nav */}
            <nav className="flex-1 mobile-gnb-wrap pt-lg pb-xl">
              <h2 className="sr-only">모바일 모드 네비게이션 영역</h2>
              <ul>
                {navList.map((item: NavItemType, index: number) => (
                  <li key={index} className="text-xl leading-header-medium">
                    <Link to={item.href} className="block w-full h-full">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* SNS & Utils */}
            <div className="flex justify-between">
              <ul className="flex gap-3">
                <li>
                  <Link to="/" className="text-sm leading-lg">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm leading-lg">
                    Instar
                  </Link>
                </li>
              </ul>
              <div className="flex items-center gap-4">
                <button className="large-icon">
                  <span className="sr-only">메일 보내기 버튼</span>
                  <MdOutgoingMail />
                </button>

                <button className="large-icon" onClick={changeThemeMode}>
                  <span className="sr-only">테마 변경 버튼</span>
                  {themeModeState === LOCAL_THEME.DARK_VALUE ? <MdOutlineLightMode /> : <MdNightlight />}
                </button>
              </div>
            </div>

            {/* Close Btn */}
            <button
              className="absolute right-[0.875rem] sm:right-0 top-[1.563rem] w-icon-medium h-icon-medium text-icon-medium"
              onClick={() => setSidebarStatus(SIDEBAR_STATUS.CLOSE)}
            >
              <span className="sr-only">모바일 메뉴 닫기</span>
              <IoCloseOutline />
            </button>
          </div>
        </div>

        {/* Tools */}
        <div className="items-center hidden md:flex">
          <div className="flex items-center gap-4">
            <button onMouseEnter={() => handleTooltip(TOOLTIP.MAIL)} onMouseLeave={resetTooltip} className="relative large-icon">
              <span className="sr-only">메일 보내기 버튼</span>

              {showTooltip === TOOLTIP.MAIL && TooltipComponent[TOOLTIP.MAIL]}
              <MdOutgoingMail />
            </button>

            <button
              className="relative large-icon"
              onMouseEnter={() => handleTooltip(TOOLTIP.THEME)}
              onMouseLeave={resetTooltip}
              onClick={changeThemeMode}
            >
              <span className="sr-only">테마 변경 버튼</span>

              {showTooltip === TOOLTIP.THEME && TooltipComponent[TOOLTIP.THEME]}
              {themeModeState === LOCAL_THEME.DARK_VALUE ? <MdOutlineLightMode /> : <MdNightlight />}
            </button>
          </div>
        </div>

        {/* Hamberger Menu */}
        <button className="text-icon-small md:hidden" onClick={() => setSidebarStatus(SIDEBAR_STATUS.OPEN)}>
          <HiOutlineMenuAlt1 />
          <span className="sr-only">모바일 햄버거 메뉴 버튼</span>
        </button>
      </div>
    </header>
  )
}
