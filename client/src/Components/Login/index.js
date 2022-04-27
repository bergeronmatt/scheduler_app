import React, {useEffect} from 'react'
import LoginForm from './loginForm'
import { useNavigate } from 'react-router-dom'

export default function Login(props) {

  const navigate = useNavigate();

  useEffect(() => {
    if(props.allowed === true) {
      navigate('/calendar')
    }
  },[props.allowed, navigate])

  return (
    <div>
      <LoginForm />
    </div>
  )
}
