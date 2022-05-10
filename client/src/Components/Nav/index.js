import React from 'react'
// import axios from 'axios'
// import Login from '../Login'
import Calendar from '../Calendar'

import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,
  // Outlet
} from 'react-router-dom'

export default function Nav() {

  /** This is the authentication code  */

  // const [allowed, setAllowed] = useState(false)

  // const ProtectedRoute = ({isAllowed, redirectPath = '/',children }) => {
  //   if(isAllowed === false){
  //     return <Navigate to={redirectPath} replace />
  //   }
  //   return children ? children : <Outlet />
  // }

  // function verifyUser(token) {
  //   axios.get('http://localhost:8080/api/validate', {headers: {Authorization: token}})
  //     .then(res => {
  //       if(res.status !== 200) {
  //         console.error();
  //         return;
  //       }
  //       setAllowed(true)
  //     })
  // }

  // useEffect(() => {
  //   const token = localStorage.getItem('auth')
  //   verifyUser(token)
  // }, [allowed])

  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>

        <Route path='/' element={<Calendar/>}/>

          {/* 
            This is the original route build with a login page and 
            protected path to the calendar. Keep this and reuse if
            there is a need for authentication
          */}

          {/* <Route path='/' element={<Login allowed={allowed} />}/>
          <Route path='/calendar' element={
            <ProtectedRoute
              redirectPath="/"
              isAllowed={allowed}
            >
              <div style={{width: "100%", margin: '0', height: '850px', padding: '0'}}>
                <Calendar />
              </div>
            </ProtectedRoute>
          } /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}
