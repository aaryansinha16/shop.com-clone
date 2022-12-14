import {Routes, Route} from 'react-router-dom'
import Cart from './Cart'
import CheckOut from './CheckOut/CheckOut'
import Home from './Home/Home'
import Login from './Login/Login'
import Reset from './Login/Reset'
import PrivateRoute from './PrivateRoute'
import Products from './Products/Products'
import SignUp from './SignUp/SignUp'
import SingleProduct from './SingleProductPage/SingleProduct'

export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/products/:product_id' element={<SingleProduct/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/reset' element={<Reset/>} />
            <Route path='/checkout' element={
                <PrivateRoute>
                    <CheckOut/>
                </PrivateRoute>
            }/>
        </Routes>
    )
};
