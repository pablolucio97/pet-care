import { useState, createContext, ReactNode } from 'react'
import { database } from '../services/firebase'

type DatesContextProps = {
    lastVaccineDay: number | undefined;
    lastVaccineMonth: number | undefined;
    lastVaccineYear: number | undefined;
    currentDate: number;
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

    const [currentDate] = useState(new Date().getTime())
    const [lastVaccineDay] = useState<number>(new Date().getDate())
    let [lastVaccineMonth] = useState<number>(new Date().getMonth() + 4)
    let [lastVaccineYear] = useState<number>(new Date().getFullYear())
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
            lastVaccineMonth: 
            lastVaccineMonth > 12 ? (new Date().getMonth() + 4) - 12 : lastVaccineMonth,
            lastVaccineYear: lastVaccineMonth > 12 ? lastVaccineYear + 1 : lastVaccineYear
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
            const nextVaccine = parsedVaccines.reverse()[0][1] as VaccineProps
            const nextVaccineVaccineMonth = nextVaccine.lastVaccineMonth
            const nextVaccineVaccineDay = nextVaccine.lastVaccineDay
            const nextVaccineVaccineYear = nextVaccine.lastVaccineYear


            const dateToVaccine = new Date(nextVaccineVaccineYear as any, Number(nextVaccineVaccineMonth), nextVaccineVaccineDay).getTime()

            let result = ((dateToVaccine - currentDate) / 86400000) - 30


            if (result < 5) {
                newVaccineNotification()
            }

            if (result < 1) {
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
            currentDate,
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