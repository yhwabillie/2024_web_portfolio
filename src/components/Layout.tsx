import * as React from 'react'
import Header from './Header'
import Footer from './Footer'
import { TransitionGroup, Transition } from 'react-transition-group'

interface ILayoutProps {
  children: React.ReactNode
  pathname?: string
}

export default function Layout({ children, pathname }: ILayoutProps) {
  return (
    <>
      <Header />

      {/* <main className="container m-auto">{children}</main> */}
      <Footer />
    </>
  )
}
