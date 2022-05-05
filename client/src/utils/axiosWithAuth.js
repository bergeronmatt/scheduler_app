// middleware to handle auth headers automaticallly
import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('auth');

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: process.env.REACT_APP_BASE_URL
    })
}