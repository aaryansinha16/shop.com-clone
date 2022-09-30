import axios from "axios"

export const getProducts = (page=1, limit=6, filter) => {
    return axios.get(`https://shop-api-gqqn.onrender.com/products?_page=${page}&_limit=${limit}&_sort=price&_order=${filter}`)
}

export const getTotalPages = () => {
    return axios.get(`https://shop-api-gqqn.onrender.com/products`)
}

export const addToCart = (name, brand,price, description ,rating ,number_of_reviews,available, image) => {
    return axios.post(`https://shop-api-gqqn.onrender.com/cart`, {
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
    return axios.get(`https://shop-api-gqqn.onrender.com/cart`)
}

export const deleteCart = (id) => {
    return axios.delete(`https://shop-api-gqqn.onrender.com/cart/${id}`)
}
