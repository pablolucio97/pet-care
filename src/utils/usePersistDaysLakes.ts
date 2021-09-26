
import {useState, useEffect} from 'react'

export default function usePersistDaysLakes (key: string, initialState: any) {

    const [daysLakes, setDaysLakes] = useState(() => {
        const storedDays = localStorage.getItem('@petcare:dayslakes')
        if(storedDays){
            return JSON.parse(storedDays)
        }else{
            return initialState
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(daysLakes))
    }, [key, daysLakes, setDaysLakes])
    return [daysLakes, setDaysLakes]
}