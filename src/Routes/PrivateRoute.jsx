import { Navigate } from "react-router-dom"

export default function PrivateRoute({children}) {

    const state = false

    if(!state){
        return <Navigate to='/login' />
    }

    return children

};
