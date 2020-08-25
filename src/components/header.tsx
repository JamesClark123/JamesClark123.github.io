import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../styles/header.scss"

interface Props {
  siteTitle: string
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

function Header({ siteTitle }: Props) {
  return (
    <header className="flx-row jc-sb ai-c header p-s">
      <span>My logo here</span>
      <div>nav here</div>
    </header>
  )
}

export default Header
