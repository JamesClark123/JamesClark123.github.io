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
    return (
      (document.getElementById("main")?.clientHeight || Infinity) +
      (document.getElementById("footer")?.clientHeight || Infinity)
    )
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
    const screenWidth =
      document.body.scrollWidth < document.body.clientWidth
        ? document.body.scrollWidth
        : document.body.clientWidth
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
    const totalOffset = Math.min(
      20 + i * 40 + ratioToCutoff,
      window.innerHeight - 70 - 20 - 40 * (icons.length - 1 - i)
    )
    return !state.onScreen
      ? "-30px"
      : state.bottom
      ? "40px"
      : `${totalOffset}px`
  }

  return (
    <footer id="footer" className="flx-col jc-fe ai-c pb-s">
      <div className="footer">
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
      </div>
      <a href="https://www.cindychendesigns.com/" className="designed-by">
        Website designed by Cindy Chen Designs
      </a>
    </footer>
  )
}

export default typeof window !== "undefined" ? Footer : () => null
