import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import Swal from 'sweetalert2'

export const RegisterForm = () => {

    const registerAlert = async () => {
        await Swal.fire({
            title: 'New User Added',
            text: 'The user has been registered. YOu can refresh your page.',
            timer: 5000,
            icon: 'success'
        }).then(() => {
            window.location.reload()
        })
    }

    const register = async (user) => {
        try {
            await axiosWithAuth().post()
        } catch (err) {
            console.error()
        }
    }

  return (
    <div>RegisterForm</div>
  )
}
