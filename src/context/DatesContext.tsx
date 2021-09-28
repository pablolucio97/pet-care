import { useState, createContext, ReactNode } from 'react'
import { database } from '../services/firebase'

type DatesContextProps = {
    lastVaccineDay: number;
    lastVaccineMonth: number;
    lastVaccineYear: number;
    nextVacineDate: Date;
    createVaccine: () => void;


}

type ChildrenProps = {
    children: ReactNode
}

export const DatesContext = createContext({} as DatesContextProps)

export const DatesProvider = ({ children }: ChildrenProps) => {

    const [nextVacineDate] = useState(new Date())
    const [lastVaccineDay] = useState<number>(new Date().getDate())
    const [lastVaccineMonth] = useState<number>(new Date().getMonth() +4)
    const [lastVaccineYear] = useState<number>(new Date().getFullYear())

    const createVaccine = async () => {
        const dbRef = await database.ref('vaccines')
        const newVaccine = {
            id: String(Math.random() * 999),
            lastVaccineDay: lastVaccineDay,
            lastVaccineMonth: lastVaccineMonth,
            lastVaccineYear: lastVaccineYear
        }
        await dbRef.push(newVaccine)
    }

    return (
        <DatesContext.Provider value={{
            lastVaccineDay,
            lastVaccineMonth,
            lastVaccineYear,
            nextVacineDate,
            createVaccine
        }}>
            {children}
        </DatesContext.Provider>
    )
}