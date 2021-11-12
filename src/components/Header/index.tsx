import { MdArrowBack } from 'react-icons/md'
import { useHistory } from 'react-router'
import { ButtonContainer, HeaderContainer } from './styles'
import {useLogin} from '../../hooks/useLogin'


const Header = () => {


    const {user, signOut} = useLogin()

    const history = useHistory()

    return (
        <HeaderContainer>
            {user ?
                (
                    <div>
                        <img src={user?.avatar} alt="PetCare" />
                    </div>
                )

                :
                null
            }
            <button onClick={signOut}>
               Sair
            </button>
            <ButtonContainer>
                <button>
                    <MdArrowBack size={24} onClick={() => history.goBack()} />
                </button>
            </ButtonContainer>
        </HeaderContainer>
    )
}

export { Header }