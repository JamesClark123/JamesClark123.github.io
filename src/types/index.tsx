export enum Icons {
  CPP,
  Javascript,
  TypeScript,
  Express,
  Node,
  Axios,
  Jest,
  React,
  CSS,
  SASS,
  MobX,
  OpenGL,
  StyledComponents,
  Github,
  ExternalLink,
  Gatsby,
  Ocaml,
  MaterialUI,
  MongoDB,
  LinkedIn,
  Mail,
  Logo,
  Hamburger,
}

interface Bullets {
  description: string
}

export interface Experience {
  positionTitle: string
  company: string
  timeAt: string
  info: Array<Bullets>
  techUsed?: Array<Icons>
}

interface Link {
  icon: Icons
  link: string
}

export interface Project {
  title: string
  github: Link
  externalLink?: Link
  description: string
  tech: Array<Icons>
}
