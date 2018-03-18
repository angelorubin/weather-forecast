import axios from 'axios'
import { apiUrl } from '../../config'
axios.defaults.trailingSlash = true

export const http = axios.create({
    baseURL: apiUrl,
    params: {
        format : 'json',
    }
})