import * as React from 'react'
import { useFooterRefStore } from '@store/storehooks'

export default function Footer() {
  //zustand state
  // const { setFooterRef } = useFooterRefStore()

  // React.useEffect(() => {
  //   setFooterRef(footerRef)
  // }, [])

  return (
    <footer className="relative h-800" style={{ clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0 100%' }}>
      {/* Sticky Area */}
      <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
        {/* Content */}
        <div className="items-center h-full bg-blue-1">
          <div className="sticky top-[calc(100vh-800px)] h-800">
            <div className="container h-full">
              <h2 className="text-60">Footer</h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
