import React, { useState, useEffect, useCallback } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import { Experience } from "../types"
import XpIcons from "./xp-icons"
import Button from "./button"

import "../styles/experience-table.scss"

ExperienceTableCard.propTypes = {
  experience: PropTypes.object.isRequired,
}

interface CardProps extends React.ComponentProps<any> {
  experience: Experience
}

function ExperienceTableCard({ experience, ...props }: CardProps) {
  return (
    <div {...props}>
      <h3 className="mb-n">{experience.positionTitle}</h3>
      <h4>{experience.timeAt}</h4>
      <div className="flx-col bullet">
        {experience.info.map(bullet => (
          <div key={bullet.description} className="flx-row">
            <span className="mr-s">•</span>
            <span className="mb-s">{bullet.description}</span>
          </div>
        ))}
      </div>
      {experience.techUsed && (
        <XpIcons className="xp-icons" xpIcons={experience.techUsed} />
      )}
    </div>
  )
}

///////////
///////////

ExperienceTable.propTypes = {
  experience: PropTypes.arrayOf(PropTypes.object).isRequired,
}

ExperienceTable.defaultProps = {
  experience: [],
}

interface Props extends React.ComponentProps<any> {
  experience: Array<Experience>
}

function ExperienceTable({ experience, ...props }: Props) {
  const [state, _setState] = useState({ selected: 0, firstLoad: false })

  function setState(property: string, value: any) {
    return () => {
      _setState({ ...state, [property]: value })
    }
  }

  const calcOnScreenChange = useCallback(() => {
    _setState({ ...state, firstLoad: !state.firstLoad })
  }, [state])

  useEffect(() => {
    window.addEventListener("resize", calcOnScreenChange)
    return () => window.removeEventListener("resize", calcOnScreenChange)
  }, [calcOnScreenChange])

  // This is a hacky work around
  useEffect(() => {
    _setState({ ...state, firstLoad: true })
  }, [])

  function tabButtons() {
    return (
      <>
        <span id="table-buttons" className="tab-buttons">
          {experience.map((xp, i) => {
            return (
              <button
                key={i}
                className="filter-button"
                onClick={setState("selected", i)}
              >
                {xp.company}
              </button>
            )
          })}
          <span
            className="highlight-tab"
            style={{
              left: `calc(
            var(--current-width) * ${state.selected}
          )`,
            }}
          />
        </span>
      </>
    )
  }

  function makeExperienceCards() {
    const height = document.getElementById(`experience-card-${state.selected}`)
      ?.clientHeight
    return (
      <div
        className="experience-card-container flx-row"
        style={{
          width: `calc(var(--current-width) * ${experience.length})`,
          height: height,
        }}
      >
        {experience.map((xp, i) => (
          <ExperienceTableCard
            id={`experience-card-${i}`}
            key={i}
            experience={xp}
            className="experience-card flx-col"
            style={{
              left: `calc(calc(var(--current-width) * ${experience.length}) * calc(${i} - ${state.selected}))`,
              opacity: i === state.selected ? "1" : "0",
            }}
          />
        ))}
      </div>
    )
  }

  function getMaxHeight() {
    const tableButtonHeight =
      (document.getElementById(`table-buttons`)?.clientHeight || 0) + 30
    const downloadButtonHeight =
      document.getElementById(`experience-download`)?.clientHeight || 0
    return experience.reduce((largest, _xp, i) => {
      let height =
        document.getElementById(`experience-card-${i}`)?.clientHeight || 0
      height += tableButtonHeight + downloadButtonHeight
      return height > largest ? height : largest
    }, 0)
  }

  // If this is to be made generic the component can take in children then clone the children with the refs and keys attached
  // This would allow this table to be used for any type of data display - call it Filter Table
  return (
    <div
      {...props}
      className={classNames(props.className, "filter-table flx-col ai-b")}
      style={{ height: getMaxHeight() }}
    >
      {tabButtons()}
      {makeExperienceCards()}
      <Button id="experience-download" className="xp-download" border>
        <a href={require("../assets/James_Clark_Resume.pdf")} download>
          Download Resume
        </a>
      </Button>
    </div>
  )
}

export default ExperienceTable
