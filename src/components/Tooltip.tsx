import React from 'react'

const Tooltip = ({ text }: { text: string }) => {
  return (
    <div className="before:content:''before:bg-transparent before:rotate-180 before:border-t-blue before:border-t-[0.625rem] before:border-x-[0.625rem] before:border-x-transparent before:absolute before:top-[-0.625rem] before:left-[2.375rem] box-border absolute left-[50%] bottom-[-3.125rem] w-[6.25rem] h-[2.5rem] rounded-md translate-x-[-50%] text-sm leading-xl bg-blue text-white shadow-xl">
      {text}
    </div>
  )
}

export default Tooltip
