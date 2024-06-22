import * as React from 'react'
import { Link } from 'gatsby'
import { MdOutlineLightMode, MdNightlight, MdOutgoingMail } from 'react-icons/md'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { IoCloseOutline } from 'react-icons/io5'
import { LOCAL_THEME, SIDEBAR_STATUS, TOOLTIP } from '../types/enums'
import Tooltip from './Tooltip'
import { useSidebarStatusStore } from '../store/storehooks'

type NavItemType = {
  href: string
  title: string
}

type TooltipType = TOOLTIP.MAIL | TOOLTIP.THEME | TOOLTIP.RESET

const nav_list: NavItemType[] = [
  {
    href: '#visual_view',
    title: '💡 소개',
  },
  {
    href: '#career',
    title: '💼 경력',
  },
  {
    href: '#project',
    title: '🧑‍💻 개인 프로젝트',
  },
  {
    href: '#problem',
    title: '🙋‍♀️ Problem Solving',
  },
]

export default function Header() {
  //state
  const [themeModeState, setThemeModeState] = React.useState<boolean>(false)
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
    const currentTheme = window.localStorage.getItem(LOCAL_THEME.LOCAL_KEY)
    const bodyElement = document.getElementsByTagName('body')

    switch (currentTheme) {
      case LOCAL_THEME.DARK_VALUE:
        window.localStorage.setItem(LOCAL_THEME.LOCAL_KEY, LOCAL_THEME.LIGHT_VALUE)
        bodyElement[0].classList.replace(LOCAL_THEME.DARK_VALUE, LOCAL_THEME.LIGHT_VALUE)
        setThemeModeState(false)
        break

      case LOCAL_THEME.LIGHT_VALUE:
        window.localStorage.setItem(LOCAL_THEME.LOCAL_KEY, LOCAL_THEME.DARK_VALUE)
        bodyElement[0].classList.replace(LOCAL_THEME.LIGHT_VALUE, LOCAL_THEME.DARK_VALUE)
        setThemeModeState(true)
        break
    }
  }

  React.useEffect(() => {
    //최초 로드시 로컬스토리지에 있는 theme값을 판단하여 state에 저장
    //True 다크모드, False 라이트모드
    setThemeModeState(window.localStorage.getItem(LOCAL_THEME.LOCAL_KEY) === LOCAL_THEME.DARK_VALUE)
  }, [])

  return (
    <header className="w-full text-text_primary border-b border-dark_gray bg-bg_primary fixed top-0 left-0 z-1 h-md_header lg:h-header xl:h-xl_header">
      <div className="flex justify-between items-center h-full m-auto px-mobile xxs:max-w-xxs xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg lg:px-0 xl:max-w-xl">
        {/* Logo */}
        <div className="logo-wrap">
          <Link
            to="/"
            className="hidden lg:block h-header bg-contain bg-no-repeat bg-center xl:h-xl_header lg:w-desktop_logo lg:bg-logo-black lg:dark:bg-logo-white"
          >
            <h1 className="sr-only">Portfolio Website (웹사이트 이름)</h1>
          </Link>
          <Link
            to="/"
            className="block lg:hidden w-mobile_logo h-mobile_logo bg-logo_mobile_light dark:bg-logo_mobile_dark bg-cover bg-center bg-no-repeat"
          >
            <span className="sr-only">Portfolio Website (웹사이트 이름)</span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-gnb-wrap hidden md:flex items-center">
          <ul className="flex h-full hover:text-light_gray">
            {nav_list.map((item: NavItemType, index: number) => (
              <li key={index} className="text-xl_header leading-header xl:leading-xl_header hover:text-text_primary px-2 cursor-pointer">
                <Link to={item.href} className="block h-full w-full">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Sidebar Menu */}
        <div
          className={`${sidebarStatus === SIDEBAR_STATUS.OPEN ? 'translate-x-[0%]' : 'translate-x-[100%]'} md:hidden fixed z-1 left-0 top-0 overflow-x-hidden overflow-y-auto w-full h-full bg-bg_primary transition-transform`}
        >
          <div className="flex flex-col relative max-w-side_menu min-h-full mx-auto pb-[3.6rem] px-[1.4rem] sm:px-0">
            <strong className="block py-[2.4rem]">
              <Link to="/" className="block w-mobile_logo h-mobile_logo bg-logo_mobile_light dark:bg-logo_mobile_dark bg-cover bg-no-repeat">
                <span className="sr-only">포트폴리오 이름</span>
              </Link>
            </strong>

            {/* Nav */}
            <nav className="mobile-gnb-wrap flex-1 pt-[4.7rem] pb-[6.6rem]">
              <h2 className="sr-only">모바일 모드 네비게이션 영역</h2>
              <ul>
                {nav_list.map((item: NavItemType, index: number) => (
                  <li key={index} className="text-side_menu leading-header xl:leading-xl_header cursor-pointer">
                    <Link to={item.href} className="block h-full w-full">
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
                  <Link to="/" className="text-base leading-base">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-base leading-base">
                    Instar
                  </Link>
                </li>
              </ul>
              <div className="flex items-center gap-4">
                <button className="w-nav_icon h-nav_icon text-nav_icon rounded-nav_icon hover:text-black hover:bg-icon_hover_bg flex justify-center items-center relative">
                  <span className="sr-only">메일 보내기 버튼</span>
                  <MdOutgoingMail />
                </button>

                <button
                  className="w-nav_icon h-nav_icon text-nav_icon rounded-nav_icon hover:text-black hover:bg-icon_hover_bg flex justify-center items-center relative"
                  onClick={changeThemeMode}
                >
                  <span className="sr-only">테마 변경 버튼</span>
                  {themeModeState ? <MdOutlineLightMode /> : <MdNightlight />}
                </button>
              </div>
            </div>

            {/* Close Btn */}
            <button
              className="absolute top-[2.4rem] right-[1.4rem] sm:right-0 text-text_primary text-close_icon w-close_icon h-close_icon"
              onClick={() => setSidebarStatus(SIDEBAR_STATUS.CLOSE)}
            >
              <span className="sr-only">모바일 메뉴 닫기</span>
              <IoCloseOutline />
            </button>
          </div>
        </div>

        {/* Tools */}
        <div className="hidden md:flex h-header xl:h-xl_header items-center">
          <div className="flex items-center gap-4">
            <button
              onMouseEnter={() => handleTooltip(TOOLTIP.MAIL)}
              onMouseLeave={resetTooltip}
              className="w-nav_icon h-nav_icon text-nav_icon rounded-nav_icon hover:text-black hover:bg-icon_hover_bg flex justify-center items-center relative"
            >
              <span className="sr-only">메일 보내기 버튼</span>

              {showTooltip === TOOLTIP.MAIL && TooltipComponent[TOOLTIP.MAIL]}
              <MdOutgoingMail />
            </button>

            <button
              className="w-nav_icon h-nav_icon text-nav_icon rounded-nav_icon hover:text-black hover:bg-icon_hover_bg flex justify-center items-center relative"
              onMouseEnter={() => handleTooltip(TOOLTIP.THEME)}
              onMouseLeave={resetTooltip}
              onClick={changeThemeMode}
            >
              <span className="sr-only">테마 변경 버튼</span>

              {showTooltip === TOOLTIP.THEME && TooltipComponent[TOOLTIP.THEME]}
              {themeModeState ? <MdOutlineLightMode /> : <MdNightlight />}
            </button>
          </div>
        </div>

        {/* Hamberger Menu */}
        <button className="text-nav_icon md:hidden" onClick={() => setSidebarStatus(SIDEBAR_STATUS.OPEN)}>
          <HiOutlineMenuAlt1 />
          <span className="sr-only">모바일 햄버거 메뉴 버튼</span>
        </button>
      </div>
    </header>
  )
}
