import React from "react";

const getInitialValue = (key: string, initialValue: string | Function) => {
    const value = window.localStorage.getItem(key);
    if(value) return value
    if(initialValue instanceof Function) return initialValue()

    return initialValue
}

const useLocalStorage = (key: string, initialValue: string) => {
    const [value, setValue] = React.useState(() => {
        return getInitialValue(key, initialValue)
    });

    React.useEffect(() => {
        window.localStorage.setItem(key, value)
    }, [value])

    return [value, setValue]
}
 
export default useLocalStorage;
