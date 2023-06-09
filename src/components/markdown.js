import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Link } from './link'

/*
 * this object defines a map:
 *    DOM elements --> React components.
 * this allows us to align markdown content
 * styling with that of other content.
 */
const componentMap = {
  // replace links (<a /> tags) with our "smart" Link component.
  a: ({ href, ...props }) => (
    <Link to={ href } { ...props } />
  ),
}

export const Markdown = props => {
  return (
    <ReactMarkdown
      { ...props }
      components={ componentMap }
      remarkPlugins={ [remarkGfm] }
    />
  )
}