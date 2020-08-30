import { Experience, Icons } from "../types"

const carbon: Experience = {
  company: "CARBON",
  positionTitle: "Software Engineer",
  timeAt: "OCTOBER 2019 - JULY 2020",
  techUsed: [
    Icons.CPP,
    Icons.Javascript,
    Icons.TypeScript,
    Icons.Express,
    Icons.Node,
    Icons.Axios,
    Icons.Jest,
    Icons.React,
    Icons.SASS,
    Icons.CSS,
    Icons.MobX,
    Icons.OpenGL,
  ],
  info: [
    {
      description:
        "Improved the runtime of the patch selection tool, an internal tool used for selecting subsets of 3D geometries, by ~80% through the implementation of a Union-Find algorithm (C++)",
    },
    {
      description:
        "Implemented a generic cancel functionality for the server-side job infrastructure, eliminating long user wait times of 20+ minutes (JavaScript & TypeScript, Express & Axios)",
    },
    {
      description:
        "Unified testing frameworks by setting up the Jest framework and converting server-side unit tests (JavaScript & TypeScript, Jest, Node)",
    },
    {
      description:
        "Refreshed icon library and style sheets to bring better consistency to user experience across the many different user interfaces (React, CSS & Sass, Javascript & Typescript)",
    },
    {
      description:
        "Developed a new user interface that allows users to view information by hovering over rendered 3D geometries, improving UX (TypeScript, React, MobX, Sass, OpenGL)",
    },
  ],
}

const conscioux: Experience = {
  company: "CONSCIOUX",
  positionTitle: "Freelance Frontend Engineer",
  timeAt: "APRIL 2019 - MAY 2019",
  techUsed: [Icons.React, Icons.Javascript, Icons.StyledComponents],
  info: [
    {
      description: "Prototype and design pages for web applications",
    },
  ],
}

const consciouxIntern: Experience = {
  company: "CONSCIOUX",
  positionTitle: "Frontend Engineer Intern",
  timeAt: "SUMMER 2018",
  techUsed: [Icons.React, Icons.Javascript, Icons.StyledComponents],
  info: [
    {
      description:
        "Worked under the Iconsnical co-founder to help design company website and develop new components",
    },
  ],
}

export default [carbon, conscioux, consciouxIntern]
