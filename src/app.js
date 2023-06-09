import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/header'
import { Footer } from './components/footer'
import {
  AgendaView,
  HomeView,
  NotFoundView,
} from './views'

// 

const menuItems = [
  {
    path: '/',
    label: 'Home',
    view: <HomeView />,
  },
  {
    path: '/agenda',
    label: 'Agenda',
    view: <AgendaView />,
  },
]

//

export const App = () => {
  return (
    <Fragment>
      <Header
        title="Pathways"
        menuItems={ menuItems }
      />
      
      <main>
        <Routes>
          {
            menuItems.map(({ label, path, view }) => (
              <Route
                key={ `route-${ label }` }
                path={ path }
                element={ view }
              />
            ))
          }
          <Route path="*" element={ <NotFoundView /> } />
        </Routes>
      </main>

      <Footer />
    </Fragment>
  )
}
