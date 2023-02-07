import useLocalStorage from "../../hooks/useLocalStorage";
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = () => {
    const [token,] = useLocalStorage('Authorization', '');

    if(token) return <Outlet/>

    return <Navigate to="/login"/>
}
 
export default PrivateRoute;
