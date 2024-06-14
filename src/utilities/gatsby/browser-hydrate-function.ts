import * as ReactDOM from 'react-dom/client'
import { ReactElement } from 'react'

const browserHydrateFunction = () => {
  return (element: ReactElement, container: HTMLElement) => {
    const root = ReactDOM.createRoot(container)
    root.render(element)
  }
}

export default browserHydrateFunction
