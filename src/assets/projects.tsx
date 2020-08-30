import { Project, Icons } from "../types"

const dealsMate: Project = {
  title: "DEALSMATE",
  github: {
    icon: Icons.Github,
    link: "https://github.com/JamesClark123/Deals-Mate",
  },
  externalLink: {
    icon: Icons.ExternalLink,
    link: "https://www.dealsmatefinder.com/login",
  },
  description:
    "Dealsmate is an Amazon price watching website that will notify you, by email, when the price drops on a product",
  tech: [Icons.React, Icons.MongoDB, Icons.Node, Icons.MaterialUI],
}

const portfolio: Project = {
  title: "PORTFOLIO",
  github: {
    icon: Icons.Github,
    link: "https://github.com/JamesClark123/Portfolio",
  },
  description:
    "This website! Designed by the superb designer (and my wife) Cindy Chen. Hope you like it :)",
  tech: [Icons.React, Icons.SASS, Icons.Gatsby, Icons.TypeScript],
}

const hamt: Project = {
  title: "HAMT",
  github: {
    icon: Icons.Github,
    link: "https://github.com/JamesClark123/hamt",
  },
  description:
    "An independent study from my time in college, I implemented a persistent & functional hash map. Read more about it on my github.",
  tech: [Icons.Ocaml],
}

export default [portfolio, dealsMate, hamt]