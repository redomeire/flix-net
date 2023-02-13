import React from "react";
import { useSearchParams } from "react-router-dom";
import CardMusic from "../features/movie/components/CardMusic";
import AppLayout from "../components/partials/Layouts/AppLayout";
import { GET } from "../features/movie/service/search";

type movie = {
    overview?: string, 
    poster_path?: string, 
    title?: string,
    id?: number
}[]

const Search = () => {
    const [movies, setMovies] = React.useState<movie>([])
    const [searchParams] = useSearchParams();
    const imageBaseUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face/'

    React.useEffect(() => {
        const getData = async () => {
            const result = await GET(searchParams.get('q')!)
            setMovies(result?.data.results)
        }

        getData()
    }, [searchParams.get('q')])
    
    return ( 
        <AppLayout>
            <div className="flex items-center flex-wrap">
                {
                    movies.map((movie, index) => {
                        return(
                            <CardMusic
                            key={index}
                            id={movie.id}
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
