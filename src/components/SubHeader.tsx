import * as React from 'react'
import { Link, navigate } from 'gatsby'
import { IoArrowBack } from 'react-icons/io5'
import { MdOutgoingMail } from 'react-icons/md'
import { FaHome } from 'react-icons/fa'
import { TOOLTIP } from '@/types/enums'
import Tooltip from '@components/Tooltip'

type TooltipType = TOOLTIP.MAIL | TOOLTIP.RESET

interface SubHeaderProps {
  title: string
}

export default function SubHeader(props: any) {
  //state
  const [showTooltip, setShowTooltip] = React.useState<TooltipType>(TOOLTIP.RESET)

  //tooltip components
  const TooltipComponent: Record<TooltipType, JSX.Element> = {
    mail: <Tooltip text="메일 보내기" />,
    reset: <></>,
  }

  //툴팁 호버 event
  const handleTooltip = (tooltip: TooltipType) => setShowTooltip(tooltip)
  const resetTooltip = () => setShowTooltip(TOOLTIP.RESET)

  return (
    <header className="fixed top-0 left-0 w-full border-b h-header-small lg:h-header-medium xl:h-header-large bg-theme text-theme-reverse z-1 border-theme-gray">
      <div className="container flex items-center justify-between px-14 md:px-0">
        <button className="large-icon" onClick={() => history.back()}>
          <span className="sr-only">뒤로가기</span>
          <IoArrowBack />
        </button>

        <h1 className="text-15 sm:text-18 lg:text-24">{props.pageContext.category}</h1>

        <button onMouseEnter={() => handleTooltip(TOOLTIP.MAIL)} onMouseLeave={resetTooltip} className="relative large-icon">
          <span className="sr-only">메일 보내기 버튼</span>

          {showTooltip === TOOLTIP.MAIL && TooltipComponent[TOOLTIP.MAIL]}
          <MdOutgoingMail />
        </button>
      </div>
    </header>
  )
}
