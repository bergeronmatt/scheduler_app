import React from 'react'
import Login from '../Login'
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

        <Link to='/'>Login</Link>
        <Link to='/calendar'>Calendar</Link>

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/calendar' element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
