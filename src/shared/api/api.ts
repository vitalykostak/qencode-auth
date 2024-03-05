import axios from 'axios'

export const $api = axios.create({
    baseURL: AUTH_API_ENDPOINT,
    headers: {
        'Content-Type': 'application/json'
    }
})
