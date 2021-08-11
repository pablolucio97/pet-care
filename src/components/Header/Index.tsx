import { MdArrowBack } from 'react-icons/md'
import { HeaderContainer, Button, Title } from './styles'

const Header = () => {
    return (
        <HeaderContainer>
            <Title>
                Meus Pets
            </Title>
            <Button>
                <MdArrowBack size={32} />
            </Button>
        </HeaderContainer>
    )
}

export default Header