import React, { useState, useEffect, useCallback } from "react"
import classNames from "classnames"

import Icon from "./icon"
import { Icons } from "../types"

import "../styles/footer.scss"

const icons = [
  {
    icon: Icons.Github,
    link: "https://github.com/JamesClark123",
  },
  {
    icon: Icons.LinkedIn,
    link: "www.linkedin.com/in/jamesclark123",
  },
  {
    icon: Icons.Mail,
    link: "mailto:jamesloganclark@gmail.com",
  },
]

function Footer() {
  const [state, setState] = useState({
    bottom: true,
    onScreen: false,
  })

  function isWideEnough() {
    return window.innerWidth > 600
  }

  function getBottomOfWindow() {
    return window.scrollY + window.innerHeight
  }

  function getBottomOfPage() {
    return document.getElementById("main")?.clientHeight || Infinity
  }

  function getBottomCutOff() {
    return (
      getBottomOfPage() - window.innerHeight * (isWideEnough() ? 0.35 : 0.1)
    )
  }

  const checkBottom = useCallback(() => {
    const bottomOfWindow = getBottomOfWindow()
    const bottomCutOff = getBottomCutOff()

    if (bottomOfWindow > bottomCutOff && isWideEnough()) {
      setState({ onScreen: true, bottom: true })
    } else if (bottomOfWindow > bottomCutOff) {
      setState({ onScreen: true, bottom: true })
    } else if (isWideEnough()) {
      setState({ onScreen: true, bottom: false })
    } else {
      setState({ onScreen: false, bottom: true })
    }
  }, [state])

  useEffect(() => {
    checkBottom()
    window.addEventListener("scroll", checkBottom)
    window.addEventListener("resize", checkBottom)
    return () => {
      window.removeEventListener("scroll", checkBottom)
      window.removeEventListener("resize", checkBottom)
    }
  }, [])

  function calcLeft(i: number) {
    const screenWidth = document.body.scrollWidth
    const offsetByIndex = i - Math.ceil((icons.length - 1) / 2)
    const bottomArea = getBottomOfPage() - getBottomCutOff()
    const areaOffScreen = getBottomOfWindow() - getBottomCutOff()
    const offsetByRatio = isWideEnough()
      ? (((bottomArea - areaOffScreen) / bottomArea) * screenWidth) / 2
      : 0
    const additionalOffset = 10 /* half width of icon */ + offsetByRatio
    const totalOffset = Math.max(
      screenWidth / 2 + offsetByIndex * 40 - additionalOffset,
      (i + 1) * 25 + i * 10
    )
    return state.bottom ? `${totalOffset}px` : "25px"
  }

  function calcBottom(i: number) {
    const totalAboveCutoff = getBottomCutOff()
    const distanceToCutoff = getBottomCutOff() - getBottomOfWindow()
    const ratioToCutoff =
      (distanceToCutoff / totalAboveCutoff) * window.innerHeight
    const totalOffset = 20 + i * 40 + ratioToCutoff
    return !state.onScreen
      ? "-30px"
      : state.bottom
      ? "20px"
      : `${totalOffset}px`
  }

  return (
    <footer className="footer">
      {icons.map((icon, i) => (
        <Icon
          key={i}
          icon={icon.icon}
          target="_self"
          link={icon.link}
          size="medium"
          hoverType="primary"
          style={{
            left: calcLeft(i),
            bottom: calcBottom(i),
          }}
          iconClasses={classNames("footer-icon")}
        />
      ))}
    </footer>
  )
}

export default Footer
