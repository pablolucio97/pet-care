import { RegisterContainer, Container, HeaderContainer, Title, Button, Input, NewPetButton, Span, SubTitle, Select } from './styles'
import { MdArrowBack } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

const Register = () => {

    const history = useHistory()

    return (
        <Container>
            <HeaderContainer>
                <Title>
                    Novo Pet
                </Title>
                <Button>
                <MdArrowBack size={32} onClick={() => history.goBack()} />
                </Button>
            </HeaderContainer>
            <RegisterContainer>
                <SubTitle>
                    Cadastrar Novo Pet
                </SubTitle>
                <Span>Nome: </Span>
                <Input
                    type='text'
                    placeholder='Nome do seu pet'
                    required
                />
                <Span>Pet: </Span>
                <Select>
                    <option value="dog">Cachorro</option>
                    <option value="cat">Gato</option>
                </Select>
                <Span>Raça: </Span>
                <Input
                    type='text'
                    placeholder='Nome'
                    required
                />
                <Span>Idade: </Span>
                <Input
                    type='text'
                    placeholder='Nome'
                    required
                />
                <NewPetButton>
                    Registrar Pet
                </NewPetButton>
            </RegisterContainer>
        </Container>
    )
}

export default Register;