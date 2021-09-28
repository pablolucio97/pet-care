import { useState, createContext, ReactNode} from 'react'
import { database } from '../services/firebase'

type DatesContextProps = {
    currentDay: number;
    currentMonth: number;
    currentYear: number
    howManyDaysLakes: number;
    lastVaccineDay: number;
    lastVaccineMonth: number;
    lastVaccineYear: number;
    daysLakesToNextVaccine: number;
    calcHowManyDaysLakesToNextVaccine: () => void;
    updateVaccineDate: () => void;
    nextVacineDate: Date;
    createVaccine: () => void;


}

type ChildrenProps = {
    children: ReactNode
}

export const DatesContext = createContext({} as DatesContextProps)

export const DatesProvider = ({ children }: ChildrenProps) => {

    const [howManyDaysLakes, setHowManyDaysLakes] = useState(0)

    const [currentDay] = useState<number>(new Date().getDate())
    const [currentMonth] = useState<number>(new Date().getMonth() + 1)
    const [currentYear] = useState<number>(new Date().getFullYear())


    const [nextVacineDate, setNextVacineDate] = useState(new Date())

    const [lastVaccineDay, setLastVaccineDay] = useState<number>(new Date().getDate())
    const [lastVaccineMonth, setLastVaccineMonth] = useState<number>(new Date().getMonth() -1)
    const [lastVaccineYear, setLastVaccineYear] = useState<number>(new Date().getFullYear())

    const [daysLakesToNextVaccine, setDaysLakesToNextVaccine] = useState<number>(0)

    
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

    
    function updateVaccineDate() {
        setLastVaccineDay(currentDay)
        setLastVaccineMonth(currentMonth)
        setLastVaccineYear(currentYear)
        setNextVacineDate(new Date(currentYear, currentMonth + 3, currentDay))
    }
   
  
    function calcHowManyDaysLakesToNextVaccine() {
        const initialDate = new Date(lastVaccineYear, lastVaccineMonth, lastVaccineDay)
        const finalDate = new Date(nextVacineDate)
        setHowManyDaysLakes(Number(finalDate.getTime() - initialDate.getTime()) / (1000 * 3600 * 24))
        setDaysLakesToNextVaccine(Number(howManyDaysLakes.toFixed(0)))
    }

    return (
        <DatesContext.Provider value={{
            currentDay,
            currentMonth,
            currentYear,
            howManyDaysLakes,
            calcHowManyDaysLakesToNextVaccine,
            lastVaccineDay,
            lastVaccineMonth,
            lastVaccineYear,
            updateVaccineDate,
            daysLakesToNextVaccine,
            nextVacineDate,
            createVaccine

 }}>
            {children}
        </DatesContext.Provider>
    )
}