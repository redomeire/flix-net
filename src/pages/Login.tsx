import React from "react";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import AppLayout from "../components/partials/Layouts/AppLayout";
import Typography from "../components/typography/Typography";

import { SiNetflix } from "react-icons/si";
import useLocalStorage from "../hooks/useLocalStorage";
import axios from "axios";
import { createAxiosInstance } from "../components/api/AxiosInstance";
import { useCookies } from "react-cookie";

// cookie management

const Login = () => {
    const [tab, setTab] = React.useState<"login" | "register">('login');
    const [session, setSession] = useLocalStorage('session_id', '');
    const axiosInstance = createAxiosInstance();
    const [cookie, setCookie] = useCookies(['request_token']);

    const [login, setLogin] = React.useState({
        username: '',
        password: ''
    })

    React.useEffect(() => {
        axiosInstance.get('/authentication/token/new?api_key=' + `${import.meta.env.VITE_APP_TMDB_API_KEY}`)
            .then((result) => {
                setCookie('request_token', result.data.request_token, {
                    expires: new Date(result.data.expires_at)
                })
            }).catch((err) => {
                console.error(err);
                alert(err.message)
            });
    }, [])

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        axiosInstance.post('/authentication/token/validate_with_login?api_key=' + import.meta.env.VITE_APP_TMDB_API_KEY, {
            username: login.username,
            password: login.password,
            request_token: cookie.request_token,
        })
            .then((result) => {
                console.log(result);
                setCookie('request_token', result.data.request_token, {
                    expires: new Date(result.data.expires_at)
                })

                axiosInstance.post('/authentication/session/new?api_key=' + import.meta.env.VITE_APP_TMDB_API_KEY, {
                    request_token: result.data.request_token
                })
                    .then((result) => {
                        console.log(result)

                        setSession(result.data.session_id)

                        setTimeout(() => {
                            window.location.reload()
                        }, 1000);

                    }).catch((err) => {
                        console.error(err);
                    });
            }).catch((err) => {
                console.error(err);
            });
    }

    return (
        <AppLayout>
            <div className="flex items-center justify-center">
                <form onSubmit={handleSubmit} className="mt-10 md:min-w-[400px] rounded-xl p-10 bg-[#1b1b1b] flex flex-col justify-center">
                    <div className="mb-5 flex items-center justify-center cursor-pointer">
                        <SiNetflix className="text-red-600" size={25} />
                        <Typography className="ml-2 capitalize text-2xl text-white" thickness="bold">FlixNet</Typography>
                    </div>
                    <div className="tabs flex items-center justify-center mb-5 text-white">
                        <Button type="button" onClick={() => { setTab('login') }}>
                            <Typography className={`hover:border-b-red-500 ${tab === 'login' ? 'border-b-red-500' : 'border-b-transparent'} border-b-2 pb-2`}>Login</Typography>
                        </Button>
                        <Button type="button" onClick={() => { setTab('register') }}>
                            <Typography className={`hover:border-b-red-500 ${tab === 'register' ? 'border-b-red-500' : 'border-b-transparent'} border-b-2 pb-2`}>Register</Typography>
                        </Button>
                    </div>
                    {
                        tab === 'login' ?
                            <div>
                                <Input
                                    name="login-username"
                                    type="text"
                                    placeholder="username"
                                    className="bg-white w-full mb-5 text-black"
                                    onChange={e => {
                                        setLogin(prev => {
                                            return { ...prev, username: e.target.value }
                                        })
                                    }}
                                />
                                <Input
                                    name="login-password"
                                    type="password"
                                    placeholder="password"
                                    className="bg-white w-full text-black"
                                    onChange={e => {
                                        setLogin(prev => {
                                            return { ...prev, password: e.target.value }
                                        })
                                    }}
                                />
                                <Button type="submit" className="w-full bg-red-500 text-white mt-5">
                                    <Typography thickness="bold" className="text-sm">Sign in</Typography>
                                </Button>
                            </div>
                            :
                            <a href="https://www.themoviedb.org/signup">
                                <Button type="button" className="w-full bg-red-500 text-white mt-5">
                                    <Typography thickness="bold" className="text-sm">Sign up from IMDB</Typography>
                                </Button>
                            </a>
                    }
                </form>
            </div >
        </AppLayout >
    );
}

export default Login;
