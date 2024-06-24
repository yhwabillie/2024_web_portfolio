import React, { useEffect } from 'react'
import { PageProps } from 'gatsby'
import MainHeader from '@components/MainHeader'
import SubHeader from '@components/SubHeader'

export default function Layout(props: any) {
  return (
    <div className="base-layout">
      {props.path === '/' ? <MainHeader /> : <SubHeader {...props} />}

      {props.children}
    </div>
  )
}
