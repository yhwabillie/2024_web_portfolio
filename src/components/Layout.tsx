import * as React from 'react'
import Header from './Header'
import Footer from './Footer'

interface ILayoutProps {
  children: React.ReactNode
  title: string
}

export default function Layout({ children, title }: ILayoutProps) {
  return (
    <>
      <Header />
      <main className="container m-auto">{children}</main>
      <Footer />
    </>
  )
}
