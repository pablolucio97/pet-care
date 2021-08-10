import { Container, ImageContainer, Image, DataText, DataContainer, AlertText } from './styles'
import { MdClose } from 'react-icons/md'

const PetCard = () => {
    return (
        <Container>
            <ImageContainer>
                <Image
                    src='https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80'
                />
                <button>
                    <MdClose />
                </button>
            </ImageContainer>
            <DataContainer>
                <DataText>Nome: Jhenny</DataText>
                <DataText>Pet: Gato</DataText>
                <DataText>Sexo: Fêmea</DataText>
                <DataText>Idade: 3 anos</DataText>
                <DataText>Data da última vacina: 20/05/2021</DataText>
                <DataText>Data da próxima vacina: 16/11/2021</DataText>
            </DataContainer>
            <AlertText>Faltam 123 dias para a próxima vacina.</AlertText>
        </Container>
    )
}

export default PetCard