import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import { Icons } from "../types"
import Icon from "./icon"

import "../styles/xp-icons.scss"

XpIcons.propTypes = {
  xpIcons: PropTypes.arrayOf(function (
    icons,
    key,
    componentName,
    _location,
    propFullName
  ) {
    if (!(Icons[icons[key]] in Icons)) {
      return new Error(
        `Invalid prop ${propFullName} supplied to ${componentName}. Validation failed.`
      )
    }
    return null
  }),
}

interface Props extends React.ComponentProps<any> {
  xpIcons: Array<Icons>
}

function XpIcons({ xpIcons, ...props }: Props) {
  return (
    <div {...props} className={classNames("xp-grid", props.className)}>
      {xpIcons.map((xpIcon, i) => {
        return <Icon icon={xpIcon} size="large" key={xpIcon} />
      })}
    </div>
  )
}

export default XpIcons
