import { MouseEventHandler } from "react";

interface Props {
    children: React.ReactNode,
    className?: string,
    outlined?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    type?: 'button' | 'submit'
}

const Button = ({ 
    children, 
    outlined, 
    onClick, 
    className,
    type
}: Props) => {
    return (
        <button
        type={type}
            onClick={onClick}
            className={`rounded-full flex items-center justify-center p-3 hover:opacity-70 transition duration-200
            ${outlined ? 'bg-transparent border-[1.5px]' : ''}
            ${className}
        `}
        >{children}</button>
    );
}

export default Button;
