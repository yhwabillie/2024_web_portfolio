import * as ReactDOM from 'react-dom/client'

const browserHydrateFunction = () => {
  return (element: any, container: any) => {
    const root = ReactDOM.createRoot(container)
    root.render(element)
  }
}

export default browserHydrateFunction
