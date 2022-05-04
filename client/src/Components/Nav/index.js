import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Login from '../Login'
import Calendar from '../Calendar'

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet
} from 'react-router-dom'

export default function Nav() {

  const [allowed, setAllowed] = useState(false)

  const ProtectedRoute = ({isAllowed, redirectPath = '/',children }) => {
    if(isAllowed === false){
      return <Navigate to={redirectPath} replace />
    }
    return children ? children : <Outlet />
  }

  function verifyUser(token) {
    axios.get('http://localhost:8080/api/validate', {headers: {Authorization: token}})
      .then(res => {
        // console.log('Validate User Response: ', res)
        if(res.status !== 200) {
          console.error();
          return;
        }
        // console.log('Access Granted')
        setAllowed(true)
      })
  }

  useEffect(() => {
    const token = localStorage.getItem('auth')
    verifyUser(token)
  }, [allowed])

  return (
    <div className='wrapper'>
      <BrowserRouter>
<<<<<<< HEAD
=======
{/* 
        <Link to='/'>Login</Link>
        <Link to='/calendar'>Calendar</Link> */}

>>>>>>> 626ccf7a38847a1b05024cb13c1d7b7a42d0ca12
        <Routes>
          <Route path='/' element={<Login allowed={allowed} />}/>
          <Route path='/calendar' element={
            <ProtectedRoute
              redirectPath="/"
              isAllowed={allowed}
            >
              <div style={{width: "90%", margin: 'auto'}}>
                <Calendar />
              </div>
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
