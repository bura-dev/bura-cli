/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import './src/styles/global.css'
import './src/assets/css/boxicons.min.css'
import * as React from "react"
import { Provider } from "react-redux"
import store from "./src/store/store"

export const wrapRootElement = ({ element }) => (
    <Provider store={store}>
      {element}
    </Provider>
  );