import { useEffect, useCallback, memo } from 'react'
import { Container } from './styles'
import { VaccineProgress } from '../../components/VaccineProgress'
import { useDates } from '../../hooks/useDates'
import { Header } from '../../components/Header'
import { MdPets } from 'react-icons/md'
import { formatDate, formatNumber } from '../../utils/formats'



const HomeComponent = () => {
    const {
        createVaccine,
        vaccines,
        daysToNextVaccine,
        watchVaccineDays,
        listVaccines
    } = useDates()

    useEffect(() => {
        watchVaccineDays()
        listVaccines()
        //eslint-disable-next-line
    }, [])


    useCallback(() => {
        watchVaccineDays()
    }, [watchVaccineDays])


    return (
        <Container>
            <Header />
            <main>
                <ul>
                    <h3>Próxima vacina:</h3>
                    <div>
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
                    </div>
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


const Home = memo(HomeComponent, (prevProps, nextProps) => {
    return Object.is(prevProps, nextProps)
} )

export default Home;