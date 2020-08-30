import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import "../styles/button.scss"

Button.propTypes = {
  border: PropTypes.bool,
}

interface Props extends React.ComponentProps<any> {
  children?: React.ReactElement
  onClick?: () => any
  border?: boolean
  text?: string
}

function Button({
  children,
  className = "",
  border = false,
  text = "button",
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={classNames(className, "button", { border: border })}
    >
      {children ? (
        React.Children.map(children, child =>
          React.cloneElement(child, {
            className: classNames(
              "button-content",
              child.props?.className || ""
            ),
          })
        )
      ) : (
        <span className="button-content">{text}</span>
      )}
    </div>
  )
}

export default Button
