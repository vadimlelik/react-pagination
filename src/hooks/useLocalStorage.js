import {useEffect, useState} from "react";

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const jsonData = localStorage.getItem(key)
        if (jsonData == null) {
            if (typeof initialValue === "function") {
                return initialValue()
            } else {
                return initialValue
            }
        } else {
            return JSON.parse(jsonData)
        }
    })
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value,key])

    return [value, setValue]
}