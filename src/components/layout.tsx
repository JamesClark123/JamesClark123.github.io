import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

import "../styles/alignments.scss"
import "../styles/spacings.scss"
import "../styles/basic.scss"
import "../styles/layout.scss"

Layout.propTypes = {
  children: PropTypes.node,
  navOptions: PropTypes.node,
  showFooter: PropTypes.bool,
}
interface Props extends React.ComponentProps<any> {
  children: React.ReactNode
  navOptions?: JSX.Element | null
  showFooter?: boolean
}

function Layout({ children, navOptions = null, showFooter = true }: Props) {
  return (
    <>
      <Header navOptions={navOptions} />
      <main id="main" className="main-container">
        {children}
      </main>
      {showFooter && <Footer />}
    </>
  )
}

export default Layout
