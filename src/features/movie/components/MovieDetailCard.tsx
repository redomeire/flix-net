import { BsFillBookmarkFill, BsSave } from "react-icons/bs";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import Button from "../../../components/button/Button";
import Typography from "../../../components/typography/Typography";

interface Props {
    title: string,
    description: string,
    src: string
}

const MovieDetailCard = ({ title, description, src }: Props) => {
    return (
        <div className="rounded-xl p-5 bg-[#060d17] text-[#b4b4b4] min-h-[400px] mx-auto w-[90%] flex items-start">
            <div className="md:w-[40%]">
                <div className={`poster w-full bg-cover min-h-[300px]`} style={{ backgroundImage: `url('${src}')` }} />
                <div className="poster-action flex items-center justify-between bg-[#1c252f] text-sm">
                    <Button>
                        <div className="flex flex-col items-center">
                            <BsFillBookmarkFill size={15} />
                            <Typography>Watchlist</Typography>
                        </div>
                    </Button>
                    <Button>
                        <div className="flex flex-col items-center">
                            <AiFillLike size={15} />
                            <Typography>Like</Typography>
                        </div>
                    </Button>
                    <Button>
                        <div className="flex flex-col items-center">
                            <AiFillDislike size={15} />
                            <Typography>Dislike</Typography>
                        </div>
                    </Button>
                </div>
            </div>
            <div className="poster ml-10">
                <Typography className="text-2xl text-white" thickness="bold">{title}</Typography>
                <Typography className="text-lg my-5">Synopsis</Typography>
                <Typography className="text-[13px] my-5">{description}</Typography>
            </div>
        </div>
    );
}

export default MovieDetailCard;
