import { Button, CardsContainer, Container, HeaderContainer, NewPetButton, Title, ButtonContainer } from './styles'
import PetCard from '../../components/PetCard/Index'
import { MdArrowBack } from 'react-icons/md'

const Home = () => {
    return (
        <Container>
            <HeaderContainer>
                <Title>
                    Meus Pets
                </Title>
                <Button>
                    <MdArrowBack size={32} />
                </Button>
            </HeaderContainer>
            <CardsContainer>
                <PetCard />
                <PetCard />
            </CardsContainer>
            <ButtonContainer>
                <NewPetButton>
                    Registrar Pet
                </NewPetButton>
            </ButtonContainer>
        </Container>
    )
}

export default Home;