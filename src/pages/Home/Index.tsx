import { useEffect, useState } from 'react'
import { Container } from './styles'
import { VaccineProgress } from '../../components/VaccineProgress'
import usePersistDaysLakes from '../../utils/usePersistDaysLakes'
import { useDates } from '../../hooks/useDates'
import { Header } from '../../components/Header/intex'
import { MdPets } from 'react-icons/md'
import { database } from '../../services/firebase'
import { formatNumber } from '../../utils/formats'



type VaccineProps = {
    id?: string;
    lastVaccineDay?: number;
    lastVaccineMonth?: number;
    lastVaccineYear?: number;
}

type VaccinesListPrpops = {
    data: VaccineProps[]
}




const Home = () => {

    const {
        updateVaccineDate,
        lastVaccineDay,
        lastVaccineMonth,
        lastVaccineYear,
        nextVacineDate,
    } = useDates()

    const [isWaitPeriod, setIsWaitPeriod] = useState(false)
    const [vaccines, setVaccines] = useState<VaccineProps[]>([])
    const [daysToNextVaccine, setDaysToNextVaccine] = useState(0)

    const dbRef = database.ref('vaccines')

    useEffect(() => {
        dbRef.on("value", (snapshot) => {
            const vaccines = snapshot.val()
            const vaccinesList = []
            for (let vaccine in vaccines) {
                vaccinesList.push(vaccines[vaccine])
            }
            setVaccines(vaccinesList)
        })
    }, [])


    useEffect(() => {

        dbRef.on("value", (snapshot) => {
            const vaccines = snapshot.val()
            const parsedVaccines = Object.entries(vaccines)
            const lastVaccine = parsedVaccines.reverse()[0][1] as VaccineProps
            const lastVaccineMonth = lastVaccine.lastVaccineMonth

            const initialDate = new Date(lastVaccineYear, Number(lastVaccineMonth) - 1, lastVaccineDay)
            const finalDate = new Date(nextVacineDate)
            setDaysToNextVaccine(Number(finalDate.getTime() - initialDate.getTime()) / (1000 * 3600 * 24))

            console.log(daysToNextVaccine)

            
            if (daysToNextVaccine < 1) {
                setIsWaitPeriod(false)
            }
        })
    }, [vaccines, daysToNextVaccine])
    

    return (
        <Container>
            <Header />
            <main>
                <ul>
                    <h3>Últimas vacinas:</h3>
                    {vaccines.map(vaccine => (
                        <li key={vaccine.id}>
                            <MdPets size={24} />
                            <span>
                                {`${vaccine.lastVaccineDay}/${vaccine.lastVaccineMonth}/${vaccine.lastVaccineYear}`}
                            </span>
                        </li>
                    ))}
                </ul>
                <VaccineProgress
                    daysLakes={Number(formatNumber(daysToNextVaccine))}
                    strokeColor={daysToNextVaccine < 2 ? '#FF9A52' : '#5286FF'}
                />
                <button
                    onClick={updateVaccineDate}
                    disabled={isWaitPeriod}
                >
                    APLICAR VACINA
                </button>
            </main>
        </Container>
    )
}

export default Home;