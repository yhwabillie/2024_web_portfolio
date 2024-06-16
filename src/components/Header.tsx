import * as React from 'react'
import useThemeStore from '../store/useThemeStore'
import { Link } from 'gatsby'
import { MdOutlineLightMode, MdNightlight } from 'react-icons/md'
import useSectionRefStore from '../store/useSectionRefStore'
0
export default function Header() {
  const theme = useThemeStore((state: any) => state.theme)
  const toggleTheme = useThemeStore((state: any) => state.toggleTheme)
  const { refArray }: any = useSectionRefStore()

  return (
    <header className="lg:bg-transparent dark:lg:bg-transparent bg-white dark:bg-black w-full z-1 2xl:h-[90px] h-[84px] fixed top-0 after:content-[''] after:block after:w-full after:h-[22px] after:bg-white dark:after:bg-black after:top-0 after:absolute after:z-0">
      <div className="container h-full m-auto flex justify-between items-center">
        {/* Left */}
        <nav className="gap-0 h-full relative pr-[20px] xl:pr-0 before:block before:content-[''] before:w-[22px] before:h-[22px] before:absolute before:bottom-[-22px] before:left-0 before:bg-edge-round-4 dark:before:bg-edge-round-1 after:block after:content-[''] after:bg-edge-round-4 dark:after:bg-edge-round-1 after:absolute after:top-[22px] after:right-[-22px] after:w-[22px] after:h-[22px] rounded-br-3xl flex items-center lg:gap-10 bg-white dark:bg-black">
          <Link
            to="/"
            className="ml-[20px] block lg:w-[192px] h-[84px] 2xl:h-[90px] lg:bg-logo-black lg:dark:bg-logo-white bg-contain bg-no-repeat bg-center z-1"
          >
            <h1 className="sr-only">Portfolio Website (웹사이트 이름)</h1>
          </Link>
          <Link to="/" className="bg-logo-mobile-black dark:bg-logo-mobile-white bg-cover bg-center bg-no-repeat w-[77px] h-[34px] lg:hidden">
            <span className="sr-only">Mobile Logo</span>
          </Link>
          <ul className="h-full hover:text-lightGray hidden xl:flex z-1">
            <li
              className="text-[18px] leading-[84px] 2xl:leading-[90px] hover:text-black dark:hover:text-white px-[10px] cursor-pointer"
              onClick={() => refArray[0].current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              💡 About Me
            </li>
            <li
              className="text-[18px] leading-[84px] 2xl:leading-[90px] hover:text-black dark:hover:text-white px-[10px] cursor-pointer"
              onClick={() => refArray[1].current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              💼 Career
            </li>
            <li
              className="text-[18px] leading-[84px] 2xl:leading-[90px] hover:text-black dark:hover:text-white px-[10px] cursor-pointer"
              onClick={() => refArray[2].current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              🧑‍💻 Projects
            </li>
            <li
              className="text-[18px] leading-[84px] 2xl:leading-[90px] hover:text-black dark:hover:text-white pl-[10px] pr-[40px] cursor-pointer"
              onClick={() => refArray[3].current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              🙋‍♀️ Problem Solving
            </li>
          </ul>
        </nav>

        {/* Right */}
        <div className="2xl:h-[90px] h-[84px] before:content-[''] before:bg-edge-round-3 dark:before:bg-edge-round-2 before:w-[22px] before:h-[22px] before:block before:absolute before:bottom-[-22px] before:right-0 after:content-[''] after:block after:w-[22px] after:h-[22px] after:bg-edge-round-3 dark:after:bg-edge-round-2 after:absolute after:top-[22px] after:left-[-22px] rounded-bl-3xl relative z-1 bg-white dark:bg-black">
          <div className="flex items-center mt-[24px] 2xl:mt-[30px] mb-auto mx-[20px]">
            <button
              onClick={() => refArray[4].current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="w-[34px] h-[34px] bg-blue dark:xl:bg-blue dark:bg-white dark:text-white bg-contact-mini-mask-light dark:bg-contact-mini-mask-dark xl:w-[123px] xl:text-white dark:xl:text-white xl:bg-blue bg-cover xl:bg-contact-mask-light xl:dark:bg-contact-mask-dark bg-no-repeat bg-right rounded-l-[18px] box-border block"
            >
              <span className="hidden font-medium xl:block">Contact Me</span>
            </button>
            <button
              className="dark:hover:bg-gray rounded-[18px] flex justify-center items-center text-[24px] w-[36px] h-[36px]"
              onClick={toggleTheme}
            >
              {theme === 'light' ? <MdNightlight /> : <MdOutlineLightMode />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
