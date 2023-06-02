import { Route, Redirect } from 'react-router-dom' 
import { useAuth } from "../AuthContext/AuthContext"

export const PrivateRoute = ({component: Component, ...rest}) =>{

    const {user} = useAuth()

    return(
        <Route
        {...rest}
            render={(props)=>
                user? <Component {...props}></Component> :
                <Redirect to='/login'></Redirect>
            }>

        </Route>
    )
}