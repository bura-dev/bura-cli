/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import Preloader from "./Preloader"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [loader, setLoader] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => setLoader(false), 1500)
  }, [])

  return (
    <div className="bg-bios-header w-full">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="bg-bios-bg w-full overflow-y-auto">{children}</main>
      {loader ? <Preloader /> : null}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
