import { Routes, Route } from 'react-router-dom'
import {
  AgendaView,
  HomeView,
  NotFoundView,
} from './views'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={ <HomeView /> } />
      <Route path="/agenda" element={ <AgendaView /> } />
      <Route path="*" element={ <NotFoundView /> } />
    </Routes>
  )
}