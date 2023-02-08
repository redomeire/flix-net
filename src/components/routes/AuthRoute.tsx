import useLocalStorage from "../../hooks/useLocalStorage";
import { Navigate, Outlet } from "react-router-dom"

const AuthRoute = () => {
    const [token,] = useLocalStorage('session_id', '');

    if(token) return <Navigate to="/watch-list"/>

    return <Outlet/>
}
 
export default AuthRoute;
