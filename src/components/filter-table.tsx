import React, { useState } from "react"
import PropTypes from "prop-types"

import { Experience } from "../assets/experience"

import "../styles/filter-table.scss"

ExperienceTableCard.propTypes = {
  experience: PropTypes.object.isRequired,
}

interface CardProps extends React.ComponentProps<any> {
  experience: Experience
}

function ExperienceTableCard({ experience, ...props }: CardProps) {
  return (
    <div {...props}>
      <h3 className="mb-n">
        {experience.positionTitle + " - " + experience.company}
      </h3>
      <h4>{experience.timeAt}</h4>
      {experience.info.map(bullet => (
        <span className="mb-s">{"• " + bullet.description}</span>
      ))}
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

function ExperienceTable({ experience }: Props) {
  const [state, _setState] = useState({ selected: 0 })

  function setState(property: string, value: any) {
    return () => {
      _setState({ ...state, [property]: value })
    }
  }

  function tabButtons() {
    return (
      <span className="tab-buttons">
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
        <div
          className="highlight-tab"
          style={{
            left: `calc(
            var(--current-width) * ${state.selected}
          )`,
          }}
        />
      </span>
    )
  }

  function makeExperienceCards() {
    return (
      <div
        className="experience-card-container flx-row"
        style={{ width: `calc(var(--current-width) * ${experience.length})` }}
      >
        {experience.map((xp, i) => (
          <ExperienceTableCard
            key={i}
            experience={xp}
            className="experience-card flx-col"
            style={{
              left: `calc(calc(var(--current-width) * ${experience.length}) * calc(${i} - ${state.selected}))`,
            }}
          />
        ))}
      </div>
    )
  }

  // If this is to be made generic the component can take in children then clone the children with the refs and keys attached
  // This would allow this table to be used for any type of data display - call it Filter Table
  return (
    <div className="filter-table flx-col">
      {tabButtons()}
      {makeExperienceCards()}
    </div>
  )
}

export default ExperienceTable
