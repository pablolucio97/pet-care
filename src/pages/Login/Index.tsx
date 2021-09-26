import { MdPets } from 'react-icons/md'
import GoogleButton from '../../components/GoogleLoginButton/Index';
import { Container, Title } from './styles'
import { Link } from 'react-router-dom'
import { linkStyle } from '../../styles/linkStyle'
import { useLogin } from '../../hooks/useLogin';

const Login = () => {

    const { signInWithGoogleFirebase, user } = useLogin()



    return (
        <Container>
            <Title>
                <MdPets size={64} />
                Pet Care
            </Title>
            {1 + 1 === 3 ?
                <Link to='/home' style={linkStyle}>
                    <GoogleButton
                        action={signInWithGoogleFirebase}
                    />
                </Link>
                :

                (
                    <div>
                        <img src={user?.avatar} alt="PetCare" />
                        <span>Olá, {user?.name}</span>

                        <Link to='/home' style={linkStyle}>
                            <button>Consultar vacinas</button>
                        </Link>
                    </div>
                )
            }
        </Container>
    )
}

export default Login;