import axios from "axios"

export const getProducts = (page=1, limit=6, filter) => {
    return axios.get(`https://powerful-savannah-88617.herokuapp.com/products?_page=${page}&_limit=${limit}&_sort=price&_order=${filter}`)
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

export const getCart = () => {
    return axios.get(`https://powerful-savannah-88617.herokuapp.com/cart`)
}

export const deleteCart = (id) => {
    return axios.delete(`https://powerful-savannah-88617.herokuapp.com/cart/${id}`)
}