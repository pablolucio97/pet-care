import { useEffect, useState } from 'react'
import { MdArrowBack } from 'react-icons/md'
import { useHistory } from 'react-router-dom'

import { Button, Container, HeaderContainer, Title } from './styles'
import { VaccineCard } from '../../components/VaccineCard'
import { VaccineProgress } from '../../components/VaccineProgress'

const Home = () => {

    const history = useHistory()


    const [nextVacineDate, setNextVacineDate] = useState(new Date())
    const [daysLakesToNextVaccine, setDaysLakesToNextVaccine] = useState(0)

    const [lastVaccineDay, setLastVaccineDay] = useState<number>(new Date().getDate())
    const [lastVaccineMonth, setLastVaccineMonth] = useState<number>(new Date().getMonth())
    const [lastVaccineYear, setLastVaccineYear] = useState<number>(new Date().getFullYear())

    const [currentDay, setCurrentDay] = useState<number>(new Date().getDate())
    const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth() + 1)
    const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear())
    const [isWaitPeriod, setIsWaitPeriod] = useState(true)


    function updateVaccineDates(date: number) {
        setLastVaccineDay(currentDay)
        setLastVaccineMonth(currentMonth)
        setLastVaccineYear(currentYear)
        setNextVacineDate(new Date(currentYear, currentMonth + 3, currentDay))
    }

    useEffect(() => {
        const initialDate = new Date(lastVaccineYear, lastVaccineMonth, lastVaccineDay)
        const finalDate = new Date(nextVacineDate)
        const howManyDaysLakes = Number(finalDate.getTime() - initialDate.getTime()) / (1000 * 3600 * 24)

        setDaysLakesToNextVaccine(
            howManyDaysLakes < 1 ? 0 : Number(howManyDaysLakes.toFixed(0)) - 2
        )

        howManyDaysLakes < 1 ? setIsWaitPeriod(false) : setIsWaitPeriod(true)

        if (daysLakesToNextVaccine < 0) {
            setDaysLakesToNextVaccine(0)
        }


        //eslint-disable-next-line
    }, [nextVacineDate])


    //90-100
    //30-x


    return (
        <Container>
            <HeaderContainer>
                <Title>
                    Home
                </Title>
                <Button>
                    <MdArrowBack size={32} onClick={() => history.goBack()} />
                </Button>
            </HeaderContainer>
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
                    onClick={() => updateVaccineDates(Number(nextVacineDate))}
                    disabled={isWaitPeriod}
                >
                    APLICAR VACINA
                </button>
            </main>
        </Container>
    )
}

export default Home;