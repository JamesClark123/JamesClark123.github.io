import React from "react"
import PropTypes from "prop-types"

import "../styles/full-page.scss"

FullPage.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

interface Props extends React.ComponentProps<any> {
  children: React.ReactNode
  className?: string
}

function FullPage({ children, className, ...props }: Props) {
  const styles = "full-page " + className
  return (
    <div {...props} className={styles}>
      {children}
    </div>
  )
}

export default FullPage
