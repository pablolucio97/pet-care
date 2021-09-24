import { Container } from "./styles";
import { MdPets } from 'react-icons/md'

const VaccineCard = () => {
    return (
        <Container>
            <MdPets size={24} />
            <strong>Última vacina recebida em:
                <span></span>
            </strong>
            <strong>Próxima vacina deve ser aplicada em:
                <span></span>
            </strong>
        </Container>
    )
}

export { VaccineCard }