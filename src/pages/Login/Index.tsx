import { MdPets } from 'react-icons/md'
import GoogleButton from '../../components/GoogleLoginButton/Index';
import { Container, BackgroundLogo, LoginContainer, Title } from './styles'
import { Link} from 'react-router-dom'
import {linkStyle} from '../../styles/linkStyle'

const Login = () => {

    return (
        <Container>
            <LoginContainer>
                <Title>
                    <MdPets size={64} />
                    Pet Care
                </Title>
                <Link to='/home' style={linkStyle}>
                    <GoogleButton/>
                </Link>
            </LoginContainer>
            <BackgroundLogo
                src='https://i.ibb.co/MVWwnN6/weimaraner-1381186-1920.jpg'
            />
        </Container>
    )
}

export default Login;