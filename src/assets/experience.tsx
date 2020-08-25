enum Tech {
  CPP,
  Javascript,
  TypeScript,
  Express,
  Axios,
  Jest,
  React,
  CSS,
  SASS,
  MobX,
  OpenGL,
  StyledComponents,
}

interface Bullets {
  description: string
  techUsed?: Array<Tech>
}

export interface Experience {
  positionTitle: string
  company: string
  timeAt: string
  info: Array<Bullets>
}

const carbon: Experience = {
  company: "Carbon",
  positionTitle: "Software Engineer",
  timeAt: "October 2019 - July 2020",
  info: [
    {
      description:
        "Improved the runtime of the patch selection tool, an internal tool used for selecting subsets of 3D geometries, by ~80% through the implementation of a Union-Find algorithm",
      techUsed: [Tech.CPP],
    },
    {
      description:
        "Implemented a generic cancel functionality for the server-side job infrastructure, eliminating long user wait times of 20+ minutes",
      techUsed: [Tech.Javascript, Tech.TypeScript, Tech.Express, Tech.Axios],
    },
    {
      description:
        "Unified testing frameworks by setting up the Jest framework and converting server-side unit tests",
      techUsed: [Tech.Javascript, Tech.TypeScript, Tech.Jest],
    },
    {
      description:
        "Refreshed icon library and style sheets to bring better consistency to user experience across the many different user interfaces",
      techUsed: [
        Tech.React,
        Tech.SASS,
        Tech.CSS,
        Tech.Javascript,
        Tech.TypeScript,
      ],
    },
    {
      description:
        "Developed a new user interface that allows users to view information by hovering over rendered 3D geometries, improving UX",
      techUsed: [
        Tech.TypeScript,
        Tech.React,
        Tech.MobX,
        Tech.SASS,
        Tech.OpenGL,
      ],
    },
  ],
}

const conscioux: Experience = {
  company: "Conscioux",
  positionTitle: "Freelance Frontend Engineer",
  timeAt: "April - May 2019",
  info: [
    {
      description: "Prototype and design pages for web applications",
      techUsed: [Tech.React, Tech.Javascript, Tech.StyledComponents],
    },
  ],
}

const consciouxIntern: Experience = {
  company: "Conscioux",
  positionTitle: "Frontend Engineer Intern",
  timeAt: "Summer 2018",
  info: [
    {
      description:
        "Worked under the technical co-founder to help design company website and develop new components",
      techUsed: [Tech.React, Tech.Javascript, Tech.StyledComponents],
    },
  ],
}

export default [carbon, conscioux, consciouxIntern]
