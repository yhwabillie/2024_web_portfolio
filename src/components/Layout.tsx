import React from 'react'
import Header from './Header'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: any) {
  //refs 정의
  const nodeRef = React.useRef<HTMLElement>(null)

  return (
    <div className="default-layout">
      <Header />
      {children}
    </div>
  )
}
