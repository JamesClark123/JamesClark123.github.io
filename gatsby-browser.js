import React from "react"
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "./src/styles/alignments.scss"
import "./src/styles/spacings.scss"
import "./src/styles/basic.scss"

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <div className="loading-cover" id="loading-cover" />
      {element}
    </>
  )
}
