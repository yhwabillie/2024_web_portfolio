import * as React from 'react'

export default function Footer(props: any) {
  return (
    <footer ref={props.footerRef} className="opacity-0 sticky bottom-0 left-0 z-4 py-[15vh] bg-white dark:bg-black flex justify-center items-center">
      <h2 className="text-[100px]">Footer</h2>
    </footer>
  )
}
