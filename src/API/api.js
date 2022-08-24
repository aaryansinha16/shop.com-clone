import axios from "axios"

export const getProducts = (page=1, limit=6) => {
    return axios.get(`https://62ca7a463e924a012859e5ff.mockapi.io/api/v1/Products?page=${page}&limit=${limit}`)
}