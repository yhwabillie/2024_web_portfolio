import React from 'react'
import MainHeader from '@components/MainHeader'
import SubHeader from '@components/SubHeader'
import Footer from '@components/Footer'
import Transition from './Transition'

export default function Layout(props: any) {
  return (
    <div className="min-h-full base-layout">
      {/* Header */}
      {props.path === '/' ? <MainHeader /> : <SubHeader {...props} />}

      {/* Transition Area */}
      <Transition>{props.children}</Transition>

      {/* Footer */}
      <Footer />
    </div>
  )
}
