import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import Button from "../../../components/button/Button";
import Typography from "../../../components/typography/Typography";

interface Props {
    type?: 'album' | 'track'
    imageUrl?: string | null
    title?: string
    description?: string,
    id?: number
}

const CardMusic = ({
    type,
    imageUrl,
    title,
    description,
    id
}: Props) => {
    const [hovered, setHovered] = React.useState(false);
    const alternatelink = 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80'

    return (
        <a
            href={`/movie/${id}`}
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="m-1 cursor-pointer p-4 rounded-lg hover:bg-[#1f1f1f] bg-[#101010] text-white flex flex-col md:min-w-[180px] md:max-w-[180px] transition duration-200">
            <div className="relative w-full h-[150px] bg-cover bg-center rounded-lg min-w-[130px]" style={{ backgroundImage: `url(${imageUrl !== undefined && !imageUrl?.includes('null') ? imageUrl : alternatelink})` }} >
                {
                    type === 'track' ?
                        <Button className={`absolute right-2 bottom-2 transition duration-500 rounded-full bg-green-500 border-transparent text-black ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
                            <BsFillPlayFill size={20} />
                        </Button>
                        :
                        ''
                }
            </div>
            <div className="mt-3">
                <Typography variant="paragraph2" thickness="bold" className="mb-3">{title !== undefined && title.length > 13 ? `${title?.substring(0, 13)}...` : title || 'contoh judul'}</Typography>
                <Typography className="text-[13px] leading-6 text-gray-400" thickness="normal">{description !== undefined && description.length > 30 ? `${description.substring(0, 30)}...` : description || 'contoh deskripsi'}</Typography>
            </div>
        </a>
    )
}

export default CardMusic;
