import React, { useState, useCallback, useEffect } from "react"
import classNames from "classnames"

import Icon from "./icon"
import { Icons } from "../types"

import "../styles/sidebar.scss"

interface Props extends React.PropsWithChildren<JSX.IntrinsicElements["div"]> {
  side?: "right" | "left"
  collapsable?: boolean
}

SideBar.defaultProps = {
  side: "left",
  collapsable: false,
}

function SideBar(props: Props) {
  const { children, collapsable } = props
  const [hidden, setHidden] = useState(true)

  const handleClickOut = useCallback(
    (event: any) => {
      const sideBar = document.getElementById("sidebar")
      if (!sideBar?.contains(event.target) && !hidden) {
        setHidden(true)
      }
    },
    [hidden, setHidden]
  )

  useEffect(() => {
    window.addEventListener("click", handleClickOut)
    return () => window.removeEventListener("click", handleClickOut)
  }, [setHidden, hidden])

  return (
    <>
      <Icon
        icon={Icons.Hamburger}
        className={classNames("sidebar-icon", {
          hidden: !hidden || !collapsable,
        })}
        onClick={() => setHidden(!hidden)}
      />
      <div
        className={classNames("flx-col ai-c jc-fs sidebar", {
          hidden: hidden && collapsable,
          collapsable: collapsable,
        })}
        id="sidebar"
      >
        {children}
      </div>
    </>
  )
}

export default SideBar
