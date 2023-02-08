import useLocalStorage from "../../hooks/useLocalStorage";
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = () => {
    const [token,] = useLocalStorage('session_id', '');

    if(token) return <Outlet/>

    return <Navigate to="/login"/>
}
 
export default PrivateRoute;
