import axios from "axios"

export const getProducts = (page=1, limit=6) => {
    return axios.get(`https://powerful-savannah-88617.herokuapp.com/products?_page=${page}&_limit=${limit}`)
}

export const getTotalPages = () => {
    return axios.get(`https://powerful-savannah-88617.herokuapp.com/products`)
}

export const addToCart = (name, brand,price, description ,rating ,number_of_reviews,available, image) => {
    return axios.post(`https://powerful-savannah-88617.herokuapp.com/cart`, {
        name, 
        brand,
        price,
        description,
        rating,
        number_of_reviews,
        available,
        image
    })
}