import React, { useState, useEffect, useCallback, useLayoutEffect } from "react"
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
  const [state, setState] = useState({
    selected: 0,
    selectedHeight: 0,
    maxHeight: 0,
  })

  function getHeights() {
    const height =
      document.getElementById(`experience-card-${state.selected}`)
        ?.clientHeight || 0
    const tableButtonHeight =
      (document.getElementById(`table-buttons`)?.clientHeight || 0) + 30
    const downloadButtonHeight =
      document.getElementById(`experience-download`)?.clientHeight || 0
    const maxExperienceHeight = experience.reduce((largest, _xp, i) => {
      let height =
        document.getElementById(`experience-card-${i}`)?.clientHeight || 0
      return height > largest ? height : largest
    }, 0)
    const maxHeight =
      tableButtonHeight + downloadButtonHeight + maxExperienceHeight
    return { height, maxHeight }
  }

  const calcOnScreenChange = useCallback(() => {
    const { height, maxHeight } = getHeights()
    setState({
      ...state,
      maxHeight: maxHeight,
      selectedHeight: height,
    })
  }, [state])

  useEffect(() => {
    window.addEventListener("resize", calcOnScreenChange)
    return () => window.removeEventListener("resize", calcOnScreenChange)
  }, [calcOnScreenChange])

  useLayoutEffect(() => {
    const { height, maxHeight } = getHeights()
    if (
      state.selectedHeight === 0 ||
      state.selectedHeight !== height ||
      state.maxHeight !== maxHeight
    )
      setState({ ...state, maxHeight: maxHeight, selectedHeight: height })
  }, [state])

  function tabButtons() {
    return (
      <>
        <span id="table-buttons" className="tab-buttons">
          {experience.map((xp, i) => {
            return (
              <button
                key={i}
                className="filter-button"
                onClick={() => {
                  const { height } = getHeights()
                  setState({
                    ...state,
                    selectedHeight: height,
                    selected: i,
                  })
                }}
              >
                {xp.company}
              </button>
            )
          })}
          <span
            className="highlight-tab"
            style={{
              left: `calc(calc(
            var(--table-width) / 3) * ${state.selected}
          )`,
            }}
          />
        </span>
      </>
    )
  }

  function makeExperienceCards() {
    return (
      <div
        className="experience-card-container flx-row"
        style={{
          height: state.selectedHeight,
        }}
      >
        {experience.map((xp, i) => (
          <ExperienceTableCard
            id={`experience-card-${i}`}
            key={i}
            experience={xp}
            className="experience-card flx-col"
            style={{
              left: `calc(var(--table-width) * calc(${i} - ${state.selected}))`,
              opacity: i === state.selected ? "1" : "0",
            }}
          />
        ))}
      </div>
    )
  }

  // If this is to be made generic the component can take in children then clone the children with the refs and keys attached
  // This would allow this table to be used for any type of data display - call it Filter Table
  return (
    <div
      {...props}
      className={classNames(props.className, "filter-table flx-col ai-b")}
      style={{ height: state.maxHeight }}
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

export default typeof window !== "undefined" ? ExperienceTable : () => null
