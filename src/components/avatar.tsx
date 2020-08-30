import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Image from "./image"

import "../styles/avatar.scss"

Avatar.propTypes = {
  fileName: PropTypes.string.isRequired,
}

interface Props extends React.ComponentProps<any> {
  fileName: string
}

function Avatar({ fileName }: Props) {
  return (
    <div className="bounding-box">
      <Image className="avatar-image" fileName={fileName} />
    </div>
  )
}

export default Avatar
