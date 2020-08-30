import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import { Icons } from "../types"

import CPP from "../assets/icons/cpp.svg"
import Javascript from "../assets/icons/javascript.svg"
import Typescript from "../assets/icons/typescript.svg"
import Express from "../assets/icons/express.svg"
import Node from "../assets/icons/node.svg"
import Jest from "../assets/icons/jest.svg"
import ReactIc from "../assets/icons/react_ic.svg"
import Css3 from "../assets/icons/css3.svg"
import Sass from "../assets/icons/sass.svg"
import Mobx from "../assets/icons/mobx.svg"
import StyledComponents from "../assets/icons/styled_components.svg"
import Github from "../assets/icons/github.svg"
import ExternalLink from "../assets/icons/external_link.svg"
import Gatsby from "../assets/icons/gatsby.svg"
import Ocaml from "../assets/icons/ocaml.svg"
import MaterialUI from "../assets/icons/material_ui.svg"
import MongoDB from "../assets/icons/mongo_db.svg"
import LinkedIn from "../assets/icons/linkedin.svg"
import Mail from "../assets/icons/mail.svg"
import Logo from "../assets/icons/logo.svg"
import Hamburger from "../assets/icons/hamburger.svg"

import "../styles/icon.scss"

Icon.propTypes = {
  hoverType: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.number,
  link: PropTypes.string,
  target: PropTypes.string,
}

Icon.defaultProps = {
  hoverType: "grayscale",
  size: "medium",
  icon: null,
  link: undefined,
  target: "_blank",
}

export interface Props extends React.ComponentProps<any> {
  hoverType?: "grayscale" | "primary" | "none"
  size?: "medium" | "large" | "xlarge"
  icon: Icons
  link?: string
  target?: "_blank" | "_self" | "_parent" | "_top"
  iconClasses?: string
}

function Icon({
  hoverType,
  icon,
  size,
  link,
  target,
  className,
  iconClasses,
  ...props
}: Props) {
  function make(Icon: React.FC<React.SVGProps<React.ReactSVGElement>> | null) {
    if (Icon === null) return null
    if (link) {
      return (
        <a href={link} target={target} className={className}>
          <Icon
            {...props}
            className={classNames(iconClasses, hoverType, size)}
          />
        </a>
      )
    } else {
      return (
        <Icon {...props} className={classNames(className, hoverType, size)} />
      )
    }
  }

  function getIcon(icon: Icons): JSX.Element | null {
    switch (icon) {
      case Icons.CPP:
        return make(CPP)
      case Icons.Javascript:
        return make(Javascript)
      case Icons.TypeScript:
        return make(Typescript)
      case Icons.Express:
        return make(Express)
      case Icons.Node:
        return make(Node)
      // case Icons.Axios: -- axios has no logo?
      //   return ""
      case Icons.Jest:
        return make(Jest)
      case Icons.React:
        return make(ReactIc)
      case Icons.CSS:
        return make(Css3)
      case Icons.SASS:
        return make(Sass)
      case Icons.MobX:
        return make(Mobx)
      case Icons.StyledComponents:
        return make(StyledComponents)
      case Icons.Github:
        return make(Github)
      case Icons.ExternalLink:
        return make(ExternalLink)
      case Icons.Gatsby:
        return make(Gatsby)
      case Icons.Ocaml:
        return make(Ocaml)
      case Icons.MaterialUI:
        return make(MaterialUI)
      case Icons.MongoDB:
        return make(MongoDB)
      case Icons.LinkedIn:
        return make(LinkedIn)
      case Icons.Mail:
        return make(Mail)
      case Icons.Logo:
        return make(Logo)
      case Icons.Hamburger:
        return make(Hamburger)
      default:
        return make(null)
    }
  }

  return getIcon(icon)
}

export default Icon
