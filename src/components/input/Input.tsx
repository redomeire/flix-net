import { ChangeEventHandler, ReactNode } from "react";

interface Props {
    placeholder?: string
    onChange?: ChangeEventHandler<HTMLInputElement>,
    type: 'text' | 'email' | 'password',
    beginningIcon?: ReactNode,
    className?: string,
    name?: string
}

const Input = ({ 
    placeholder, 
    onChange, 
    type, 
    beginningIcon, 
    className,
    name
}: Props) => {
    return (
        <div className="relative flex items-center w-full">
            <div className="absolute left-3">
                {beginningIcon}
            </div>
            <input 
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                name={name}
                className={`outline-none border-[1.5px] border-gray-800 p-3 rounded-full text-sm ${beginningIcon !== undefined ? 'pl-10' : ''} ${className}`}
            />
        </div>
    );
}

export default Input;
