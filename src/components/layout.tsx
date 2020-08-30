import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

import "../styles/layout.scss"

Layout.propTypes = {
  children: PropTypes.node,
  navOptions: PropTypes.node,
}
interface Props extends React.ComponentProps<any> {
  children: React.ReactNode
  navOptions?: JSX.Element | null
}

function Layout({ children, navOptions = null }: Props) {
  return (
    <>
      <Header navOptions={navOptions} />
      <main id="main" className="main-container">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
