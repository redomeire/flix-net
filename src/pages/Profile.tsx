import React from "react";
import { createAxiosInstance } from "../components/api/AxiosInstance";
import AppLayout from "../components/partials/Layouts/AppLayout";
import useLocalStorage from "../hooks/useLocalStorage";

const Profile = () => {
    const [sessionId] = useLocalStorage('session_id', '')
    const apiToken = import.meta.env.VITE_APP_TMDB_API_KEY;
    const axiosInstance = createAxiosInstance();

    React.useEffect(() => {
        axiosInstance.get(`/account?api_key=${apiToken}&session_id=${sessionId}`)
        .then((result) => {
            console.log(result)
        }).catch((err) => {
            console.error(err);
        });
    }, [])

    return ( 
        <AppLayout>
            
        </AppLayout>
     );
}
 
export default Profile;
