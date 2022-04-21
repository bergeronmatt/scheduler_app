import React from 'react'
import LoginForm from './loginForm'

export default function Login() {

    // const [user, setUser] = useState({
    //     username: '',
    //     password: ''
    // })

    // const handleChange = (e) => {
    //     e.preventDefault()

    //     setUser({
    //         ...user,
    //         [e.target.name]: e.target.value
    //     });
    // }

    // const handleClick = (e) => {
    //     e.preventDefault()
    //     axios.post(process.env.REACT_APP_LOGIN, {username: user.username, password: user.password})
    //         .then(res => {
    //             console.log('response: ', res.data)
    //         })
    // }

    return (
    <div>
      <LoginForm />
    </div>
  )
}
