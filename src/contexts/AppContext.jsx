import React, { useEffect, useState } from "react";
import { addToCart, deleteCart, getCart } from "../API/api";

export const AppContext = React.createContext()

export default function AppContextProviderComponent({children}) {

    const [cart, setCart] = useState([])

    // const [cartTotal, setCartTotal] = useState(0)

    function getData (){
        getCart().then((res) => setCart(res.data))
    }

    const handleDelete = (id) => {
        deleteCart(id).then((res) => {
            getData()
        })
    }

    // var sum = 0
    const handleAddCart = (name, brand,price, description ,rating ,number_of_reviews,available, image) => {
        addToCart(name, brand,price, description ,rating ,number_of_reviews,available, image)
        .then((res) => getData())
    }

    return (
        <AppContext.Provider value={{cart, setCart , getData, handleDelete, handleAddCart}}>
            {children}
        </AppContext.Provider>
    )
};
