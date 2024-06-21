import * as React from 'react'
import { Link } from 'gatsby'
import { MdOutlineLightMode, MdNightlight, MdOutgoingMail } from 'react-icons/md'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'

enum LOCAL_THEME {
  LOCAL_KEY = 'theme',
  LIGHT_VALUE = 'light',
  DARK_VALUE = 'dark',
}

interface INavList {
  title: string
}

const nav_list: INavList[] = [
  {
    title: '💡 소개',
  },
  {
    title: '💼 경력',
  },
  {
    title: '🧑‍💻 개인 프로젝트',
  },
  {
    title: '🙋‍♀️ Problem Solving',
  },
]

0
export default function Header() {
  const [mode, setMode] = React.useState(window.localStorage.getItem(LOCAL_THEME.LOCAL_KEY) === LOCAL_THEME.LIGHT_VALUE ? false : true)
  const [showMailTooltip, setShowMailTooltip] = React.useState<boolean>(false)
  const [showThemeTooltip, setShowThemeTooltip] = React.useState<boolean>(false)

  const changeTheme = () => {
    const currentTheme = window.localStorage.getItem(LOCAL_THEME.LOCAL_KEY)
    const bodyElement = document.getElementsByTagName('body')

    switch (currentTheme) {
      case LOCAL_THEME.DARK_VALUE:
        window.localStorage.setItem(LOCAL_THEME.LOCAL_KEY, LOCAL_THEME.LIGHT_VALUE)
        bodyElement[0].classList.replace(LOCAL_THEME.DARK_VALUE, LOCAL_THEME.LIGHT_VALUE)
        setMode(false)
        break

      case LOCAL_THEME.LIGHT_VALUE:
        window.localStorage.setItem(LOCAL_THEME.LOCAL_KEY, LOCAL_THEME.DARK_VALUE)
        bodyElement[0].classList.replace(LOCAL_THEME.LIGHT_VALUE, LOCAL_THEME.DARK_VALUE)
        setMode(true)
        break
    }
  }

  return (
    <header className="w-full text-text_primary border-b border-dark_gray bg-bg_primary fixed top-0 left-0 z-1 h-md_header lg:h-header xl:h-xl_header">
      <div className="flex justify-between items-center h-full m-auto px-mobile xxs:max-w-xxs xs:max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg lg:px-0 xl:max-w-xl">
        {/* Logo */}
        <div>
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
            <span className="sr-only">Mobile Logo</span>
          </Link>
        </div>

        {/* Desktop Gnb */}
        <nav className="desktop-gnb-wrap hidden md:flex items-center">
          <ul className="flex h-full hover:text-light_gray">
            {nav_list.map((item: INavList, index: number) => (
              <li key={index} className="text-xl_header leading-header xl:leading-xl_header hover:text-text_primary px-2 cursor-pointer">
                <Link to="#visual_view" className="block h-full w-full">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Gnb */}
        <div>
          <div>
            <strong>
              <Link to="/">
                <span className="sr-only">포트폴리오 이름</span>
                {/* Logo Image */}
              </Link>
            </strong>

            {/* Nav */}
            <nav>
              <h2>모바일 메뉴</h2>
              <ul>
                <li>
                  <Link to="">Menu 1</Link>
                </li>
                <li>
                  <Link to="">Menu 2</Link>
                </li>
                <li>
                  <Link to="">Menu 3</Link>
                </li>
                <li>
                  <Link to="">Menu 4</Link>
                </li>
              </ul>
            </nav>

            {/* Bottom */}
            <div>
              <ul>
                <li>button</li>
                <li>button</li>
              </ul>
              <div>
                <button>util 1</button>
                <button>util 2</button>
              </div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="hidden md:flex h-header xl:h-xl_header items-center">
          <div className="flex items-center gap-4">
            <button
              onMouseEnter={() => setShowMailTooltip(true)}
              onMouseLeave={() => setShowMailTooltip(false)}
              className="w-nav_icon h-nav_icon text-nav_icon rounded-nav_icon hover:text-black hover:bg-icon_hover_bg flex justify-center items-center relative"
            >
              {showMailTooltip && (
                <div className="shadow-xl before:content:'' before:rotate-[180deg] before:border-t-[1rem] before:border-t-primary before:border-x-[1rem] before:border-x-transparent before:absolute before:top-[-1rem] before:left-[3.8rem] box-border absolute left-[50%] bottom-[-5rem] w-[10rem] h-[4rem] rounded-[2rem] translate-x-[-50%] bg-primary text-white text-sm leading-[4rem]">
                  메일 보내기
                </div>
              )}
              <span className="sr-only">메일 보내기 버튼</span>
              <MdOutgoingMail />
            </button>

            <button
              className="w-nav_icon h-nav_icon text-nav_icon rounded-nav_icon hover:text-black hover:bg-icon_hover_bg flex justify-center items-center relative"
              onMouseEnter={() => setShowThemeTooltip(true)}
              onMouseLeave={() => setShowThemeTooltip(false)}
              onClick={changeTheme}
            >
              {showThemeTooltip && (
                <div className="shadow-xl before:content:'' before:rotate-[180deg] before:border-t-[1rem] before:border-t-primary before:border-x-[1rem] before:border-x-transparent before:absolute before:top-[-1rem] before:left-[3.8rem] box-border absolute left-[50%] bottom-[-5rem] w-[10rem] h-[4rem] rounded-[2rem] translate-x-[-50%] bg-primary text-white text-sm leading-[4rem]">
                  테마 변경
                </div>
              )}
              <span className="sr-only">테마 변경 버튼</span>
              {mode ? <MdOutlineLightMode /> : <MdNightlight />}
            </button>
          </div>
        </div>

        {/* Hamberger Menu */}
        <button className="text-nav_icon md:hidden">
          <HiOutlineMenuAlt1 />
          <span className="sr-only">모바일 햄버거 메뉴 버튼</span>
        </button>
      </div>
    </header>
  )
}
