import React, { useState } from "react"

import "../styles/collapsable-button.scss"
import Button from "./button"

interface Props extends React.PropsWithChildren<JSX.IntrinsicElements["div"]> {
  buttonHeader: string
}

function CollapsableButton(props: Props) {
  const { children, buttonHeader } = props
  const [hidden, setHidden] = useState(true)
  return (
    <div className="flx-col jc-c ai-c collapsable-button-container">
      <Button
        text={buttonHeader}
        border={!hidden}
        onClick={() => setHidden(!hidden)}
        className="collapsable-button-header"
      />
      {!hidden && children}
    </div>
  )
}

export default CollapsableButton
