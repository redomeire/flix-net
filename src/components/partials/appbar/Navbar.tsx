import React from "react";
import Button from "../../button/Button";
import { BsChevronLeft, BsChevronRight, BsSearch, BsChatDots } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GiBalaclava } from "react-icons/gi";
import Input from "../../input/Input";

import useLocalStorage from "../../../hooks/useLocalStorage";
import Typography from "../../typography/Typography";
import { SearchContext } from "../../../context/SearchContext";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../features/auth/service/logout";

const Navbar = () => {
    const [session_id] = useLocalStorage('session_id', '')
    const { setValue, value } = React.useContext(SearchContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const result = await logout(session_id);

            if(!result) return

            window.localStorage.removeItem('session_id')

            setTimeout(() => {
                window.location.reload()
            }, 1000);
        } catch (error) {
            console.error(error);
        }
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
                <form onSubmit={(e) => { 
                    e.preventDefault()
                    navigate(`/search?q=${value}`) 
                    }}>
                    <Input
                        type="text"
                        placeholder="Search everything"
                        className="bg-black"
                        beginningIcon={<BsSearch />}
                        onChange={e => { setValue(e.target.value) }}
                    />
                </form>
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
