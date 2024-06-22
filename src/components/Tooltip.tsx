import React from 'react'

const Tooltip = ({ text }: { text: string }) => {
  return (
    <div className="shadow-xl before:content:'' before:rotate-[180deg] before:border-t-[1rem] before:border-t-primary before:border-x-[1rem] before:border-x-transparent before:absolute before:top-[-1rem] before:left-[3.8rem] box-border absolute left-[50%] bottom-[-5rem] w-[10rem] h-[4rem] rounded-[2rem] translate-x-[-50%] bg-primary text-white text-sm leading-[4rem]">
      {text}
    </div>
  )
}

export default Tooltip
