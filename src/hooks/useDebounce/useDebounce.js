import {useCallback, useEffect, useRef} from "react";


function useDebounce(cb, ms) {

    const timeoutRef = useRef()

    const clearTimer = useCallback(() => {

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = undefined
        }
    }, [])

    useEffect(() => clearTimer, [])

    return useCallback((...args) => {
        clearTimer()
        timeoutRef.current = setTimeout(() => cb(...args), ms)

    }, [cb, ms])
}



export  default useDebounce