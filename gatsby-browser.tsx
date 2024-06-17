import './src/styles/global.css'

import browserHydrateFunction from './src/utilities/gatsby/browser-hydrate-function'
export const replaceHydrateFunction = browserHydrateFunction

// export const wrapRootElement = ({ element }) => (
//     //Root Element
//     <div>
//         {element}
//     </div>
//   )
