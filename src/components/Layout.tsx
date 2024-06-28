import React from 'react'
import MainHeader from '@components/MainHeader'
import SubHeader from '@components/SubHeader'
import Footer from '@components/Footer'

export default function Layout(props: any) {
  return (
    <div className="min-h-full base-layout">
      {props.path === '/' ? <MainHeader /> : <SubHeader {...props} />}
      {props.children}
      <Footer />
    </div>
  )
}
