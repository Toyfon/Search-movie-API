import axios from "axios"


const BASE_URL =  'https://www.omdbapi.com/'


const configOMB = {
    baseURL: BASE_URL
}

export const instance = axios.create(configOMB)