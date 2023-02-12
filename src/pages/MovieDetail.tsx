import React from "react";
import { useParams } from "react-router-dom";
import { createAxiosInstance } from "../components/api/AxiosInstance";
import AppLayout from "../components/partials/Layouts/AppLayout";

const MovieDetail = () => {
    const { id } = useParams();
    const axiosInstance = createAxiosInstance();

    // React.useEffect(() => {
    //     axiosInstance.get(`/movie/${id}?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}`)
    //     .then((result) => {
    //         console.log(result);
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    // }, [id])

    return ( 
        <AppLayout>
            
        </AppLayout>
     );
}
 
export default MovieDetail;
