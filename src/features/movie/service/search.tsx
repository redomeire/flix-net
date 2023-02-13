import axios from "axios";
import { createAxiosInstance } from "../../../components/api/AxiosInstance";

const axiosInstance = createAxiosInstance();

const GET = async (searchParams: string) => {
    try {
        const result = await axiosInstance.get('/search/movie?api_key=' + import.meta.env.VITE_APP_TMDB_API_KEY + `&query=${searchParams}&include_adult=false`);

        return result
    } catch (err) {
        console.error(err);
    }
}

export { GET }
