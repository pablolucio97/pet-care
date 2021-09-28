import { useState, createContext, ReactNode } from 'react'
import { database } from '../services/firebase'

type DatesContextProps = {
    lastVaccineDay: number;
    lastVaccineMonth: number;
    lastVaccineYear: number;
    nextVacineDate: Date;
    createVaccine: () => void;
    listVaccines: () => void;
    watchVaccineDays: () => void;
    vaccines: VaccineProps[]
    daysToNextVaccine: number;
}

type VaccineProps = {
    id?: string;
    lastVaccineDay?: number;
    lastVaccineMonth?: number;
    lastVaccineYear?: number;
}

type ChildrenProps = {
    children: ReactNode
}

export const DatesContext = createContext({} as DatesContextProps)

export const DatesProvider = ({ children }: ChildrenProps) => {

    const [nextVacineDate] = useState(new Date())
    const [lastVaccineDay] = useState<number>(new Date().getDate())
    const [lastVaccineMonth] = useState<number>(new Date().getMonth() + 4)
    const [lastVaccineYear] = useState<number>(new Date().getFullYear())
    const [vaccines, setVaccines] = useState<VaccineProps[]>([])
    const [daysToNextVaccine, setDaysToNextVaccine] = useState(0)


    function requestNotification() {
        Notification.requestPermission();
    }

    function newVaccineNotification() {
        if (Notification.permission === 'granted') {
            new Notification('PetCare 🐾', {
                body: `Faltam poucos dias para a próxima vacina. Clique aqui para verificar.`
            })
        }

    }

    requestNotification()


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

    const listVaccines = async () => {

        const dbRef = await database.ref('vaccines')
        dbRef.on("value", (snapshot) => {
            const vaccines = snapshot.val()
            const vaccinesList = []
            for (let vaccine in vaccines) {
                vaccinesList.push(vaccines[vaccine])
                vaccinesList.reverse()
            }
            setVaccines(vaccinesList)
        })

    }


    const watchVaccineDays = async () => {
        const dbRef = await database.ref('vaccines')
        dbRef.on("value", (snapshot) => {
            const vaccines = snapshot.val()
            const parsedVaccines = Object.entries(vaccines)
            const lastVaccine = parsedVaccines.reverse()[0][1] as VaccineProps
            const lastVaccineMonth = lastVaccine.lastVaccineMonth

            const initialDate = new Date(lastVaccineYear, Number(lastVaccineMonth) + 1, lastVaccineDay)
            const finalDate = new Date(nextVacineDate)
            let result = Number(initialDate.getTime() - finalDate.getTime()) / (1000 * 3600 * 24) / 2
            
            if(result < 5){
                newVaccineNotification()
            }

            if(result < 1){
                result = 0
            }

            setDaysToNextVaccine(result)
       })
    }


    return (
        <DatesContext.Provider value={{
            lastVaccineDay,
            lastVaccineMonth,
            lastVaccineYear,
            nextVacineDate,
            createVaccine,
            listVaccines,
            vaccines,
            watchVaccineDays,
            daysToNextVaccine
        }}>
            {children}
        </DatesContext.Provider>
    )
}