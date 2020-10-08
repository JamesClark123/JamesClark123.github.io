import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import "../styles/full-page.scss"

FullPage.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  borderBox: PropTypes.bool,
  fixedHeight: PropTypes.bool,
}

interface Props extends React.ComponentProps<any> {
  children: React.ReactNode
  className?: string
  borderBox?: boolean
  fixedHeight?: boolean
}

function FullPage({
  children,
  className,
  borderBox,
  fixedHeight,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={classNames("full-page", className, {
        "border-box": borderBox,
        "fixed-height": fixedHeight,
      })}
    >
      {children}
    </div>
  )
}

export default FullPage
