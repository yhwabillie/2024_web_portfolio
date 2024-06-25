import React from 'react'

const Tooltip = ({ text }: { text: string }) => {
  return (
    <div
      className={`absolute left-[50%] bottom-[-3.125rem] w-tooltip h-[2.5rem] before:content:''before:bg-transparent before:rotate-180 before:border-t-blue before:border-t-[0.625rem] before:border-x-[0.625rem] before:border-x-transparent before:absolute before:top-[-0.625rem] before:left-[2.375rem] box-border rounded-sm translate-x-[-50%] text-sm leading-xl bg-blue text-white shadow-xl`}
    >
      {text}
    </div>
  )
}

export default Tooltip
