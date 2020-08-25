import React from "react"
import PropTypes from "prop-types"

import "../styles/full-page.scss"

FullPage.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

interface Props {
  children: React.ReactNode
  className?: string
}

function FullPage({ children, className }: Props) {
  const styles = "full-page " + className
  return <div className={styles}>{children}</div>
}

export default FullPage
