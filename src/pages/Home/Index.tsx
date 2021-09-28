import { useEffect, useState } from 'react'
import { Container } from './styles'
import { VaccineProgress } from '../../components/VaccineProgress'
import { useDates } from '../../hooks/useDates'
import { Header } from '../../components/Header/intex'
import { MdPets } from 'react-icons/md'
import { database } from '../../services/firebase'
import { formatDate, formatNumber } from '../../utils/formats'

type VaccineProps = {
    id?: string;
    lastVaccineDay?: number;
    lastVaccineMonth?: number;
    lastVaccineYear?: number;
}

const Home = () => {

    const {
        lastVaccineDay,
        lastVaccineMonth,
        lastVaccineYear,
        nextVacineDate,
        createVaccine
    } = useDates()

    const [vaccines, setVaccines] = useState<VaccineProps[]>([])
    const [daysToNextVaccine, setDaysToNextVaccine] = useState(0)

    const dbRef = database.ref('vaccines')

    useEffect(() => {
        dbRef.on("value", (snapshot) => {
            const vaccines = snapshot.val()
            const vaccinesList = []
            for (let vaccine in vaccines) {
                vaccinesList.push(vaccines[vaccine])
                vaccinesList.reverse()
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

            const initialDate = new Date(lastVaccineYear, Number(lastVaccineMonth) + 2, lastVaccineDay)
            const finalDate = new Date(nextVacineDate)
            setDaysToNextVaccine(Number(initialDate.getTime() - finalDate.getTime()) / (1000 * 3600 * 24) / 2)



        })
    }, [vaccines, daysToNextVaccine])




    return (
        <Container>
            <Header />
            <main>
                <ul>
                    <h3>Próxima vacina:</h3>
                    {vaccines.map(vaccine => (
                        <li key={vaccine.id}>
                            <MdPets size={24} />
                            <span>
                                {formatDate(new Date(Number(vaccine.lastVaccineYear),
                                    Number(vaccine.lastVaccineMonth) - 1,
                                    vaccine.lastVaccineDay))}
                            </span>
                        </li>
                    ))}
                </ul>
                <VaccineProgress
                    daysLakes={Number(formatNumber(daysToNextVaccine))}
                    strokeColor={daysToNextVaccine < 2 ? '#FF9A52' : '#5286FF'}
                />
                <button
                    onClick={createVaccine}
                    disabled={daysToNextVaccine > 1}
                >
                    APLICAR VACINA
                </button>
            </main>
        </Container>
    )
}

export default Home;