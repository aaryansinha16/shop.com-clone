import { useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { addToCart, deleteCart, getCart } from "../API/api";

export const AppContext = React.createContext()

export default function AppContextProviderComponent({children}) {

    const [cart, setCart] = useState([])
    const toast = useToast()

    // const [cartTotal, setCartTotal] = useState(0)

    function getData (){
        getCart().then((res) => setCart(res.data))
    }

    const handleDelete = (id) => {
        deleteCart(id).then((res) => {
            getData()
        }).then(() => toast({
            title: 'Item Deleted',
            description: "We've deleted the item for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          }))
    }

    // var sum = 0
    const handleAddCart = (name, brand,price, description ,rating ,number_of_reviews,available, image) => {
        addToCart(name, brand,price, description ,rating ,number_of_reviews,available, image)
        .then((res) => getData()).then(() => toast({
            title: 'Item Added.',
            description: "Item is successfully added to cart.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          }))
        .catch((err) => toast({
            title: "Something's wrong.",
            description: "Something went wrong.",
            status: 'error',
            duration: 9000,
            isClosable: true,
          }))

    }

    return (
        <AppContext.Provider value={{cart, setCart , getData, handleDelete, handleAddCart}}>
            {children}
        </AppContext.Provider>
    )
};
