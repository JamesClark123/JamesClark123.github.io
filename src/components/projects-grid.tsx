import React from "react"
import PropTypes from "prop-types"

import { Project } from "../types"
import XpIcons from "./xp-icons"
import Icon from "./icon"
import Button from "./button"

import "../styles/projects-grid.scss"

ProjectsGrid.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
}

interface Props extends React.ComponentProps<any> {
  projects: Array<Project>
}

function ProjectsGrid({ projects }: Props) {
  function makeProject(project: Project) {
    return (
      <div key={project.title} className="project">
        <h2 className="title">{project.title}</h2>
        <p className="description pr-m">{project.description}</p>
        <XpIcons className="tech" xpIcons={project.tech} />
        {project.externalLink && (
          <Icon
            link={project.externalLink.link}
            target="_blank"
            icon={project.externalLink.icon}
            hoverType="primary"
            size="medium"
            className="external-link"
          />
        )}
        <Button border className="github">
          <a href={project.github.link}>View Code</a>
        </Button>
      </div>
    )
  }

  return (
    <div className="projects">
      {projects.map(project => makeProject(project))}
    </div>
  )
}

export default ProjectsGrid
