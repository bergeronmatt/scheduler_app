import React from 'react'
import Login from '../Login'
import LandingPage from '../LandingPage'
import Calendar from '../Calendar'

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'

export default function Nav() {
  return (
    <div className='wrapper'>
      <BrowserRouter>

        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/calendar'>Calendar</Link>

        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/calendar' element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
