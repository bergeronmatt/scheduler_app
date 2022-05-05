// middleware to handle auth headers automaticallly
import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('auth');

    return axios.create({
        header: {
            Authorization: token
        },
        baseURL: process.env.BASE_URL
    })
}