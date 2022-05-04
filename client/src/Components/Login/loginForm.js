import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import axios from 'axios'
import Swal from 'sweetalert2'

export const LoginForm = (props) => {

    const loginAlert = async () => {
        await Swal.fire({
        title: 'Login Successful!',
        text: 'You will be redirected momentarily, or click the ok button',
        timer: 5000,
        icon: 'success',
    }).then(() =>{
        window.location.reload()
    })
}

    const auth = async (email, password) => {
        try {
            await axios.post('http://localhost:8080/api/auth', {email: email, password: password})
                .then(res => {
                    const {token} = res.data;
                    localStorage.setItem('auth', token);
                })
                .catch(err => console.error(err))
        } catch (err) { 
            console.error()
        }
    }

    return (
    <div className='loginForm'>
        <h1>Login</h1>
        <Formik
            initialValues={{email: '', password: ''}}
            validate={values => {
                const errors = {};
                if(!values.email) {
                    errors.email = "Required";
                } else if(
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                } else if(!values.password) {
                    errors.password = "Required"
                }
                return errors
            }}
            onSubmit={(values, {setSubmitting}) => {
                let email = values.email;
                let password = values.password;
                auth(email, password)
                loginAlert()
                setSubmitting(false);
                // window.location.reload();
            }}
        >
            {({isSubmitting}) => (
                <Form className='form' >
                    <div>
                        <Field 
                            type='email' 
                            name='email' 
                            placeholder="Email"
                            style={{
                                width:'20%',
                                margin:".2%"
                            }}
                        />
                        <ErrorMessage name='email' component='div'/>
                    </div>
                    <div>
                        <Field 
                            type='password' 
                            name='password' 
                            placeholder='Password'
                            style={{
                                width:'20%',
                                margin:".2%"
                            }} 
                        />
                        <ErrorMessage name='password' component='div' />
                    </div>
                    <button type='submit' disabled={isSubmitting} 
                        style={{
                            width: '20.5%',
                            margin:".2%"
                        }}
                    >Submit</button>
                </Form>
            )}
        </Formik>
    </div>
    )
}

export default LoginForm