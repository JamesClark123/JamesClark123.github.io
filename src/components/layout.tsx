import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

import "../styles/layout.scss"

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  navOptions: PropTypes.node,
}
interface Props extends React.ComponentProps<any> {
  children: React.ReactNode
  navOptions?: JSX.Element | null
}

function Layout({ children, navOptions = null }: Props) {
  // useEffect(() => {
  //   let cov = document.getElementById("load-cover")
  //   if (cov) cov.className += " visible"
  // }, [])

  return (
    <>
      {/* <div id="load-cover" className="hidden" /> */}
      <Header navOptions={navOptions} />
      {/* <div
        style={{
          margin: `0 auto`,
          width: "90%",
        }}
      > */}
      <main id="main" className="main-container">
        {children}
      </main>
      {/* </div> */}
      <Footer />
    </>
  )
}

export default Layout
