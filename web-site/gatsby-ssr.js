/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */


 import * as React from "react"
 import { Provider } from "react-redux"
 import store from "./src/store/store"
 
 export const wrapRootElement = ({ element }) => (
     <Provider store={store}>
       {element}
     </Provider>
   );

// exports.onRenderBody = ({ setHtmlAttributes }) => {
//   setHtmlAttributes({ lang: `en` })
// }
