import * as React from 'react'
import { useFooterRefStore } from '../store/storehooks'

type FooterPropsType = {
  footerRef: React.RefObject<HTMLElement>
}

export default function Footer({ footerRef }: FooterPropsType) {
  //zustand state
  const { setFooterRef } = useFooterRefStore()

  React.useEffect(() => {
    setFooterRef(footerRef)
  }, [])

  return (
    <footer id="contact" ref={footerRef} className="sticky bottom-0 left-0 z-4 py-[15vh] flex justify-center items-center">
      <h2 className="text-[100px]">Footer</h2>
    </footer>
  )
}
