import { Navigate } from "react-router-dom"

export default function PrivateRoute({children}) {

    const state = true

    if(!state){
        return <Navigate to='/login' />
    }

    return children

};
