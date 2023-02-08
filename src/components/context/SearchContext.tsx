import React from "react";

interface Ctx {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
}

export const SearchContext = React.createContext<Ctx>({
    value: '',
    setValue: () => { },
})

const SearchWrapper = ({ children }: { children: React.ReactNode }) => {
    const [value, setValue] = React.useState('')

    return(
        <SearchContext.Provider value={{ value, setValue }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchWrapper;


