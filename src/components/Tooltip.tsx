import React from 'react'

const Tooltip = ({ text }: { text: string }) => {
  return (
    <div className="before:content:''before:bg-transparent before:rotate-180 before:border-t-blue before:border-t-[1rem] before:border-x-[1rem] before:border-x-transparent before:absolute before:top-[-1rem] before:left-[3.8rem] box-border absolute left-[50%] bottom-[-5rem] w-[10rem] h-[4rem] rounded-md translate-x-[-50%] text-sm leading-xl bg-blue text-white shadow-xl">
      {text}
    </div>
  )
}

export default Tooltip
