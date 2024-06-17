import * as React from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, PageProps } from 'gatsby'

interface ILayoutProps {
  children: React.ReactNode
  location: {
    pathname: string
  }
}

const timeout = 500
const getTransitionStyles: any = {
  entering: {
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
}

export default function Layout(props: PageProps) {
  const nodeRef = React.useRef(null)
  return (
    <>
      <Header />
      <TransitionGroup>
        <Transition
          key={props.location.pathname}
          nodeRef={nodeRef}
          in={true}
          out={true}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
        >
          {(status) => {
            console.log(status, '///')
            return (
              <main
                ref={nodeRef}
                style={{
                  ...getTransitionStyles[status],
                }}
              >
                {props.children}
              </main>
            )
          }}
        </Transition>
      </TransitionGroup>

      <Footer />
    </>
  )
}
