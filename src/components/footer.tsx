import React, { useState, useEffect, useCallback } from "react"
import classNames from "classnames"

import { useIsMobile } from "../hooks"
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
    link: "https://www.linkedin.com/in/jamesclark123",
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

  const isMobile = useIsMobile()

  function isWideEnough() {
    return window.innerWidth > 600 && !isMobile
  }

  // The pixel location of the bottom of screen relative total screen height
  function bottomOfWindow() {
    return window.scrollY + window.innerHeight
  }

  // The total height of the page content. Header isn't included since it uses absolute positioning
  function totalPageHeight() {
    return (
      (document.getElementById("main")?.clientHeight || Infinity) +
      (document.getElementById("footer")?.clientHeight || Infinity)
    )
  }

  // The pixel height where the footer transitions between position left and position bottom
  function bottomCutOff() {
    return (
      totalPageHeight() - window.innerHeight * (isWideEnough() ? 0.35 : 0.1)
    )
  }

  const checkBottom = useCallback(() => {
    if (bottomOfWindow() > bottomCutOff() && isWideEnough()) {
      setState({ onScreen: true, bottom: true })
    } else if (bottomOfWindow() > bottomCutOff()) {
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
    const bottomArea = totalPageHeight() - bottomCutOff()
    const areaOffScreen = bottomOfWindow() - bottomCutOff()
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
    const totalAboveCutoff = bottomCutOff()
    const distanceToCutoff = bottomCutOff() - bottomOfWindow()
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
            target="_blank"
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
