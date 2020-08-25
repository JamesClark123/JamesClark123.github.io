import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

Image.propTypes = {
  fileName: PropTypes.string.isRequired,
}

interface Props extends React.ComponentProps<any> {
  fileName: string
}

function Image({ fileName, className }: Props) {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fluid(maxWidth: 400, maxHeight: 400) {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const edge = data.allImageSharp.edges.find(
    (edge: any) => edge.node.fluid.originalName === fileName
  )

  if (!edge) return null

  return <Img className={className} fluid={edge.node.fluid} />
}

export default Image
