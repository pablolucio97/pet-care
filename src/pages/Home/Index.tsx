import { useCallback, useEffect, useState } from 'react'
import { Container } from './styles'
import { VaccineCard } from '../../components/VaccineCard'
import { VaccineProgress } from '../../components/VaccineProgress'
import usePersistDaysLakes from '../../utils/usePersistDaysLakes'
import { useDates } from '../../hooks/useDates'
import { Header } from '../../components/Header/intex'

const Home = () => {

    const {
        howManyDaysLakes,
        updateVaccineDate,
        calcHowManyDaysLakesToNextVaccine,
        daysLakesToNextVaccine,
        lastVaccineDay,
        lastVaccineMonth,
        lastVaccineYear,
        nextVacineDate
    } = useDates()

    const [daysLakes, setDaysLakes] = usePersistDaysLakes('@petcare:dayslakes', daysLakesToNextVaccine)

    const [isWaitPeriod, setIsWaitPeriod] = useState(true)

    useEffect(() => {
        howManyDaysLakes < 1 ? setIsWaitPeriod(false) : setIsWaitPeriod(true)
        calcHowManyDaysLakesToNextVaccine()

        setDaysLakes(daysLakesToNextVaccine)
    }, [howManyDaysLakes, updateVaccineDate, calcHowManyDaysLakesToNextVaccine, setDaysLakes])

    useCallback(
        () => {
            updateVaccineDate()
        }
        , [updateVaccineDate, daysLakesToNextVaccine])


    return (
        <Container>
            <Header/>
            <main>
                <VaccineCard
                    lastVaccineDate={` 
                        ${lastVaccineDay < 10 ?
                            '0' + lastVaccineDay :
                            lastVaccineDay}/${lastVaccineMonth < 10 ?
                                '0' + lastVaccineMonth :
                                lastVaccineMonth}/${lastVaccineYear}
                    `}
                    nextVaccineDate={
                        String(Intl.DateTimeFormat('pt-BR').format(nextVacineDate))
                    }
                />
                <VaccineProgress
                    daysLakes={daysLakesToNextVaccine}
                    strokeColor={daysLakesToNextVaccine < 2 ? '#FF9A52' : '#5286FF'}
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