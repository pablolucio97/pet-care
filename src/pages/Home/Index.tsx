import { Button, Container, HeaderContainer, Title } from './styles'
import { MdArrowBack } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { VaccineCard } from '../../components/VaccineCard'

const Home = () => {

    const history = useHistory()

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
                <VaccineCard />
            </main>
        </Container>
    )
}

export default Home;