import React from "react";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import AppLayout from "../components/partials/Layouts/AppLayout";
import Typography from "../components/typography/Typography";

import { SiNetflix } from "react-icons/si";
import useLocalStorage from "../hooks/useLocalStorage";
import axios from "axios";

const Login = () => {
    const [tab, setTab] = React.useState<"login" | "register">('login');
    const [, setToken] = useLocalStorage('Authorization', '');

    const [login, setLogin] = React.useState({
        email: '',
        password: ''
    })

    const [register, setRegister] = React.useState({
        username: '',
        email: '',
        password: ''
    })

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()

        if (tab === 'login') {

            axios.post('https://reqres.in/api/login', {
                email: login.email,
                password: login.password
            })
                .then((result) => {
                    setToken(result.data.token)
                    setTimeout(() => {
                        window.location.reload()
                    }, 1000);
                }).catch((err) => {
                    console.error(err);
                });
        } else {
            axios.post('https://reqres.in/api/register', {
                email: register.email,
                password: register.password
            })
                .then((result) => {
                    console.log(result);
                }).catch((err) => {
                    console.error(err);
                });
        }
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
                                name="login-email"
                                    type="email"
                                    placeholder="email"
                                    className="bg-white w-full mb-5 text-black"
                                    onChange={e => {
                                        setLogin(prev => {
                                            return { ...prev, email: e.target.value }
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
                                <Button className="w-full bg-red-500 text-white mt-5">
                                    <Typography thickness="bold" className="text-sm">Sign in</Typography>
                                </Button>
                            </div>
                            :
                            <div>
                                <Input
                                name="register-username"
                                    type="text"
                                    placeholder="username"
                                    className="bg-white w-full mb-5 text-black"
                                    onChange={e => {
                                        setRegister(prev => {
                                            return { ...prev, username: e.target.value }
                                        })
                                    }}
                                />
                                <Input
                                name="register-email"
                                    type="email"
                                    placeholder="email"
                                    className="bg-white w-full mb-5 text-black"
                                    onChange={e => {
                                        setRegister(prev => {
                                            return { ...prev, email: e.target.value }
                                        })
                                    }}
                                />
                                <Input
                                name="register-password"
                                    type="password"
                                    placeholder="password"
                                    className="bg-white w-full text-black"
                                    onChange={e => {
                                        setRegister(prev => {
                                            return { ...prev, password: e.target.value }
                                        })
                                    }}
                                />
                                <Button className="w-full bg-red-500 text-white mt-5">
                                    <Typography thickness="bold" className="text-sm">Sign up</Typography>
                                </Button>
                            </div>
                    }
                </form>
            </div>
        </AppLayout>
    );
}

export default Login;
