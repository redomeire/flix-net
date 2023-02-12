import { SiNetflix } from "react-icons/si";
import Typography from "../../typography/Typography";
import { useNavigate } from "react-router-dom";
import { FaCompass, FaRegHeart, FaSearch } from "react-icons/fa";
import { GoCalendar } from "react-icons/go";
import TMDB from "../../../assets/tmdb.svg";

const sidebarData = [
    {
        name: 'home',
        icon: <FaSearch size={25} />,
        path: '/'
    },
    {
        name: 'browse',
        icon: <FaCompass size={25} />,
        path: '/search'
    },
    {
        name: 'watchlist',
        icon: <FaRegHeart size={25} />,
        path: '/watch-list'
    },
    {
        name: 'coming soon',
        icon: <GoCalendar size={25} />,
        path: '/collection'
    },
]

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <nav className="md:min-w-[250px] fixed top-0 bottom-0 left-0 text-white bg-black p-5 z-40">
            <div className="mb-14 flex items-center cursor-pointer" onClick={() => { navigate('/') }}>
                <SiNetflix className="text-red-600" size={25}/>
                <Typography className="ml-2 capitalize text-2xl" thickness="bold">FlixNet</Typography>
            </div>
            <div>
                {
                    sidebarData.map((data, index) => {
                        return (
                            <div key={index} className={`flex pl-10 items-center my-6 hover:text-white transition duration-200 border-l-2 ${window.location.pathname === data.path ? 'text-white border-l-red-600' : 'text-gray-400 border-l-transparent'}`}>
                                <div className={`${window.location.pathname === data.path ? 'text-red-500' : ''}`}>{data.icon}</div>
                                <a href={data.path} className="ml-3">
                                    <Typography
                                        thickness="bold"
                                        className="capitalize text-[15px]"
                                    >{data.name}</Typography>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
            <div className="mt-20 w-full flex justify-center items-center flex-col">
                <Typography className="text-xl mb-3 font-semibold">Powered by</Typography>
                <a href="https://www.themoviedb.org">
                    <img src={TMDB} alt="the movie db" className="md:w-[80px]"/>
                </a>
            </div>
        </nav>
    );
}

export default Sidebar;
