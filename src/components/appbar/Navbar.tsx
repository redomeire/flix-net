import Button from "../button/Button";
import { BsChevronLeft, BsChevronRight, BsSearch, BsChatDots } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GiBalaclava } from "react-icons/gi";
import Input from "../input/Input";

import useLocalStorage from "../../hooks/useLocalStorage";
import Typography from "../typography/Typography";

const Navbar = () => {
    const [token] = useLocalStorage('Authorization', '')

    const handleLogout = () => {
        window.localStorage.removeItem('Authorization')

        setTimeout(() => {
            window.location.reload()
        }, 1200);
    }

    return (
        <nav className="fixed top-0 w-full flex items-center justify-between p-5 bg-black text-white md:pl-[300px]">
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
                    token ?
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
