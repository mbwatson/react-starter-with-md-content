import { Markdown } from '../components/markdown'
import content from '../content/agenda.md'

export const AgendaView = () => {
  return (
    <Markdown>{ content }</Markdown>
  )
}