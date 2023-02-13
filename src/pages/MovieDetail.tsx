import React from "react";
import { useParams } from "react-router-dom";
import { createAxiosInstance } from "../components/api/AxiosInstance";
import AppLayout from "../components/partials/Layouts/AppLayout";
import MovieDetailCard from "../features/movie/components/MovieDetailCard";
import { Movie } from "../models/dto/movie";

const MovieDetail = () => {
    const { id } = useParams();
    const axiosInstance = createAxiosInstance();
    const [movie, setMovie] = React.useState<Movie>({})
    const imageBaseUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face'

    React.useEffect(() => {
        axiosInstance.get(`/movie/${id}?api_key=${import.meta.env.VITE_APP_TMDB_API_KEY}`)
        .then((result) => {
            console.log(result);
            setMovie(result.data)
        }).catch((err) => {
            console.log(err);
        });
    }, [id])

    return ( 
        <AppLayout>
            <MovieDetailCard
            title={movie.original_title!}
            description={movie.overview!}
            src={imageBaseUrl + movie.poster_path!}
            />
        </AppLayout>
     );
}
 
export default MovieDetail;
