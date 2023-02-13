import { createAxiosInstance } from "../../../components/api/AxiosInstance";

const axiosInstance = createAxiosInstance();

type Login = {
    username: string,
    password: string
}

type Cookie = {
    request_token?: string
}

type Result = {
    data: {
        request_token: string
    }
}

const apiKey = import.meta.env.VITE_APP_TMDB_API_KEY;

const getRequestToken = async () => {
    try {
        const result = await axiosInstance.get('/authentication/token/new?api_key=' + `${apiKey}`)

        return result
    } catch (error) {
        console.error(error);
    }
}

const validateToken = async (login: Login, cookie: Cookie) => {
    try {
        const result = await axiosInstance.post('/authentication/token/validate_with_login?api_key=' + apiKey, {
            username: login.username,
            password: login.password,
            request_token: cookie.request_token,
        })
        
        return result;
    } catch (error) {
        console.error(error);
    }
}

const getSessionId = async (result: Result) => {
    try {
        const res = await axiosInstance.post('/authentication/session/new?api_key=' + apiKey, {
            request_token: result.data.request_token
        })

        return res
    } catch (error) {
        console.error(error);
    }
}

export {
    getRequestToken,
    validateToken,
    getSessionId
}
