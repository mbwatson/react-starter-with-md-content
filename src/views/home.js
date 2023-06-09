import { Fragment } from 'react'
import { Markdown } from '../components/markdown'
import about from '../content/home/about.md'
import mission from '../content/home/mission.md'

export const HomeView = () => {
  return (
    <Fragment>
      <h1>Welcome to Pathways!</h1>
      <h2>by NCDS</h2>
      
      <h3>About</h3>
      <Markdown>{ about }</Markdown>

      <h3>Mission</h3>
      <Markdown>{ mission }</Markdown>
    </Fragment>
  )
}