import * as React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(useGSAP)

export default function Transition(props: any) {
  const [displayChildren, setDisplayChildren] = React.useState(props.children)
  const container = React.useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (props.children.props.path !== displayChildren.props.path) {
      gsap
        .to(container.current, {
          opacity: 0,
        })
        .then(() => {
          setDisplayChildren(props.children)

          // window.scrollTo(0, 0)
          gsap.to(container.current, {
            opacity: 1,
          })
        })
    }
  }, [props.children])

  useGSAP(() => {
    gsap.to(container.current, {
      opacity: 1,
    })
  })

  return (
    <div ref={container} className="opacity-0 min-h-layout bg-blue-1">
      {displayChildren}
    </div>
  )
}
