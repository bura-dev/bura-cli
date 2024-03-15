import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Page from "../components/tab/page"

function IndexPage() {
  return (
      <Layout>
        <Seo
          title="Bura DEV"
          meta={{
            name: "google-site-verification",
            content: "4Dv4eL_df6alEtT2BQT_JSuNHAgf52X_bA0t4Nu7ymw",
          }}
        />
        <div className="bg-bios-bg w-full min-h-screen p-6">
          <div className="w-full min-h-screen border-spacing-4 border-4 border-bios-header rounded-4 p-6">
            <Page />
          </div>
        </div>
      </Layout>
  )
}

export default IndexPage
