import { Button, CardsContainer, Container, HeaderContainer, NewPetButton, Title, ButtonContainer } from './styles'
import PetCard from '../../components/PetCard/Index'
import { MdArrowBack } from 'react-icons/md'
import { useHistory, Link } from 'react-router-dom'
import { linkStyle } from '../../styles/linkStyle'

const Home = () => {

    const history = useHistory()

    return (
        <Container>
            <HeaderContainer>
                <Title>
                    Meus Pets
                </Title>
                <Button>
                    <MdArrowBack size={32} onClick={() => history.goBack()} />
                </Button>
            </HeaderContainer>
            <CardsContainer>
                <PetCard />
                <PetCard />
            </CardsContainer>
            <ButtonContainer>
                <Link to='/new-pet' style={linkStyle}>
                    <NewPetButton>
                        Registrar Pet
                    </NewPetButton>
                </Link>
            </ButtonContainer>
        </Container>
    )
}

export default Home;