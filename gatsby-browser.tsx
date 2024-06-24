import * as React from 'react'
import './src/styles/global.css'
import browserHydrateFunction from './src/utilities/gatsby/browser-hydrate-function'
import DefaultLayout from './src/components/Layout'
import { WrapPageElementNodeArgs, WrapRootElementNodeArgs } from 'gatsby'
export const replaceHydrateFunction = browserHydrateFunction

//Root wrap
export const wrapRootElement = ({ element }: WrapRootElementNodeArgs) => {}

//Page wrap
export const wrapPageElement = ({ element, props }: WrapPageElementNodeArgs) => {
  return <DefaultLayout {...props}>{element}</DefaultLayout>
}
