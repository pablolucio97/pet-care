import { CardsContainer, Container } from './styles'
import PetCard from '../../components/PetCard/Index'
import Header from '../../components/Header/Index'

const Home = () => {
    return (
        <Container>
            <Header/>
            <CardsContainer>
                <PetCard />
                <PetCard />
            </CardsContainer>
        </Container>
    )
}

export default Home;