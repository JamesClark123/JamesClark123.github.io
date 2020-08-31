import React, { useRef, useState, useCallback, useEffect } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Icon from "./icon"
import { Icons } from "../types"

import "../styles/header.scss"

interface Props {
  navOptions?: JSX.Element | null
}

Header.propTypes = {
  navOptions: PropTypes.node,
}

Header.defaultProps = {
  navOptions: null,
}

function Header({ navOptions }: Props) {
  const [state, setState] = useState({
    hidden: false,
    showOnMouse: false,
    showHamburger: false,
  })
  const lastVal = useRef(0)

  const handleScroll = useCallback(() => {
    if (lastVal.current < window.scrollY - 30) {
      setState({ showHamburger: false, showOnMouse: false, hidden: true })
      lastVal.current = window.scrollY
    } else if (window.scrollY === 0 || lastVal.current >= window.scrollY + 60) {
      setState({ ...state, hidden: false })
      lastVal.current = window.scrollY
    }
  }, [state])

  const handleEnter = useCallback(() => {
    setState({ ...state, showOnMouse: true })
  }, [state])

  const handleLeave = useCallback(() => {
    setState({
      ...state,
      showOnMouse: false,
    })
  }, [state])

  const handleClickOut = useCallback(
    event => {
      const navOptions = document.getElementById("nav-options")
      if (!navOptions?.contains(event.target)) {
        setState({ ...state, showOnMouse: false, showHamburger: false })
      }
    },
    [state]
  )

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("click", handleClickOut)
    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      document
        .getElementById("header-area")
        ?.addEventListener("mouseover", handleEnter)
      document
        .getElementById("header-area")
        ?.addEventListener("mouseout", handleLeave)
    }
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("click", handleClickOut)
      if (
        !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        document
          .getElementById("header-area")
          ?.removeEventListener("mouseover", handleEnter)
        document
          .getElementById("header-area")
          ?.removeEventListener("mouseout", handleLeave)
      }
    }
  }, [state])

  return (
    <>
      <div className="header-area" id="header-area">
        <header
          className={classNames("flx-row jc-sb ai-c header p-s", {
            hidden: state.hidden && !state.showOnMouse,
          })}
          id="header"
        >
          <Icon icon={Icons.Logo} className="header-logo" size="xlarge" />
          <div id="nav-options" className="flx-row ai-c options-container">
            {navOptions &&
              React.cloneElement(navOptions, {
                className: classNames(
                  "header-content",
                  { visible: state.showHamburger },
                  navOptions.props.className
                ),
              })}
            <Icon
              className={classNames("hamburger", {
                "hamburger-active": state.showHamburger,
              })}
              onClick={() => {
                setState({ ...state, showHamburger: !state.showHamburger })
              }}
              icon={Icons.Hamburger}
              size="xlarge"
              hoverType="none"
            />
          </div>
        </header>
      </div>
    </>
  )
}

export default typeof window !== "undefined" ? Header : () => null
