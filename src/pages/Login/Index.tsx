import { MdPets } from 'react-icons/md'
import GoogleButton from '../../components/GoogleLoginButton/Index';
import { Container, Title } from './styles'
import { Link} from 'react-router-dom'
import {linkStyle} from '../../styles/linkStyle'

const Login = () => {

    return (
        <Container>
                <Title>
                    <MdPets size={64} />
                    Pet Care
                </Title>
                <Link to='/home' style={linkStyle}>
                    <GoogleButton/>
                </Link>
        </Container>
    )
}

export default Login;