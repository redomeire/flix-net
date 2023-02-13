import { createAxiosInstance } from "../../../components/api/AxiosInstance"

const axiosInstance = createAxiosInstance()

const logout = async (sessionId: string) => {
    try {
        const result = await axiosInstance.delete('/authentication/session?api_key=' + import.meta.env.VITE_APP_TMDB_API_KEY, {
            data: {
                session_id: sessionId
            }
        })

        return result
        
    } catch (error) {
        console.error(error);
    }
}

export { logout }
