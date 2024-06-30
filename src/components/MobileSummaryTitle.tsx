import * as React from 'react'
import { Link } from 'gatsby'
import { FaArrowDown } from 'react-icons/fa6'

export default function MobileSummaryTitle() {
  return (
    <div className="block mt-20 px-14 mb-60 sm:hidden">
      <h3 id="main_title" className="block font-[700] text-26 sm:text-32 md:text-32 lg:text-48 xl:text-52">
        간단한 UI 설계 <br /> 매력적인 인터랙션
      </h3>
      <h4 id="sub_title" className="my-20 text-15 lg:text-22 leading-1.5">
        누구나 사용할 수 있는 UI 컴포넌트와 <br /> 시선을 끄는 인터랙션을 개발하는 이윤화입니다.
      </h4>
      <Link to="/" className="relative flex items-center justify-center bg-gray-1 text-theme-reverse leading-64 text-18 rounded-xxs">
        밑으로 스크롤 <span className="sr-only">아래로 스크롤</span>
        <div className="flex items-center justify-center ml-16 rounded-md w-30 h-30 bg-theme-reverse text-theme">
          <FaArrowDown />
        </div>
      </Link>
    </div>
  )
}
