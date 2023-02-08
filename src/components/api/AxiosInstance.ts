import axios from "axios";

const createAxiosInstance = (token?: string) => {
    const baseUrl = 'https://api.themoviedb.org/3'

    const axiosInstance = axios.create({
        baseURL: baseUrl,
        headers: token ? {
            Authorization: `Bearer ${token}`
        } : {}
    })

    return axiosInstance
}

export { createAxiosInstance };
