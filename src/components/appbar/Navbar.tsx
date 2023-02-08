import Button from "../button/Button";
import { BsChevronLeft, BsChevronRight, BsSearch, BsChatDots } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GiBalaclava } from "react-icons/gi";
import Input from "../input/Input";

import useLocalStorage from "../../hooks/useLocalStorage";
import Typography from "../typography/Typography";
import { createAxiosInstance } from "../api/AxiosInstance";

const Navbar = () => {
    const [session_id] = useLocalStorage('session_id', '')
    const axiosInstance = createAxiosInstance(session_id);

    const handleLogout = () => {
        axiosInstance.delete('/authentication/session?api_key=' + import.meta.env.VITE_APP_TMDB_API_KEY, {
            data: {
                session_id: session_id
            }
        })
        .then((result) => {
            window.localStorage.removeItem('session_id')
            console.log(result);
            
            setTimeout(() => {
                window.location.reload()
            }, 2000);
        }).catch((err) => {
            console.error(err);
        });
    }

    return (
        <nav className="fixed top-0 z-40 w-full flex items-center justify-between p-5 bg-black text-white md:pl-[300px]">
            <div className="flex items-center">
                <Button className="">
                    <BsChevronLeft />
                </Button>
                <Button className="mr-10">
                    <BsChevronRight />
                </Button>
                <Input
                    type="text"
                    placeholder="Search everything"
                    className="bg-black"
                    beginningIcon={<BsSearch />}
                />
            </div>
            <div className="flex items-center">
                <Button>
                    <BsChatDots size={20} />
                </Button>
                <Button>
                    <IoMdNotificationsOutline size={20} />
                </Button>
                {
                    session_id ?
                        <Button className="bg-red-500 text-sm" onClick={handleLogout}>
                            <GiBalaclava size={20} />
                            <Typography className="ml-3" thickness="bold">logout</Typography>
                        </Button>
                        :
                        <a href="/login">
                            <Button className="text-sm bg-red-500 min-w-[80px]">
                                Login
                            </Button>
                        </a>
                }
            </div>
        </nav>
    );
}

export default Navbar;
