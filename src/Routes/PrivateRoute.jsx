import { useAuthState } from "react-firebase-hooks/auth"
import { Navigate } from "react-router-dom"
import { auth } from "../Authentication/firebase"

export default function PrivateRoute({children}) {


    const [user, loading ] = useAuthState(auth)

    console.log('this is private Route', user)

    if(!user){
        return <Navigate to='/login' />
    }

    return children

};
