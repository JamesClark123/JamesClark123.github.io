import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import "../styles/button.scss"

Button.propTypes = {
  border: PropTypes.bool,
}

interface Props extends React.PropsWithoutRef<JSX.IntrinsicElements["div"]> {
  children?: React.ReactElement
  border?: boolean
  text?: string
  inactive?: boolean
}

function Button(props: Props) {
  const {
    children,
    className = "",
    border = false,
    text = "button",
    inactive,
    onClick,
    ...rest
  } = props
  return (
    <div
      {...rest}
      onClick={inactive ? () => {} : onClick}
      className={classNames(className, "button", {
        border: border,
        inactive: inactive,
      })}
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
