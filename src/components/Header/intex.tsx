import { MdArrowBack } from 'react-icons/md'
import { useHistory } from 'react-router'
import { ButtonContainer, HeaderContainer } from './styles'


const Header = () => {

    const history = useHistory()

    return (
        <HeaderContainer>
            <h1>
                Home
            </h1>
            <ButtonContainer>
                <button>
                    <MdArrowBack size={32} onClick={() => history.goBack()} />
                </button>
            </ButtonContainer>
        </HeaderContainer>
    )
}

export { Header }