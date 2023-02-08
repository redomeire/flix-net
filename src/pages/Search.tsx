import React from "react";
import { useSearchParams } from "react-router-dom";
import { createAxiosInstance } from "../components/api/AxiosInstance";
import CardMusic from "../components/card/CardMusic";
import AppLayout from "../components/partials/Layouts/AppLayout";

type movie = {
    overview?: string, 
    poster_path?: string, 
    title?: string
}[]

const Search = () => {
    // const { value } = React.useContext(SearchContext)
    const [movies, setMovies] = React.useState<movie>([])
    const [searchParams] = useSearchParams();
    const imageBaseUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face/'
    const axiosInstance = createAxiosInstance();

    React.useEffect(() => {
        axiosInstance.get('/search/movie?api_key=' + import.meta.env.VITE_APP_TMDB_API_KEY + `&query=${searchParams.get("q")}&include_adult=false`)
        .then((result) => {
            console.log(result);
            
            setMovies(result.data.results)
        }).catch((err) => {
            console.error(err);
        });
    }, [searchParams.get('q')])
    
    return ( 
        <AppLayout>
            <div className="flex items-center flex-wrap">
                {
                    movies.map((movie, index) => {
                        return(
                            <CardMusic
                            key={index}
                            description={movie.overview}
                            imageUrl={imageBaseUrl + movie.poster_path}
                            title={movie.title}
                            />
                        )
                    })
                }
            </div>
        </AppLayout>
     );
}
 
export default Search;
