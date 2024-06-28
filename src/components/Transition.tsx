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
          gsap.to(container.current, {
            opacity: 1,
          })
        })
    }
  }, [props.children])

  return <div ref={container}>{displayChildren}</div>
}
