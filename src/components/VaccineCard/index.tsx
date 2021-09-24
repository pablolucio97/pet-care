import { Container } from "./styles";
import { MdPets } from 'react-icons/md'


type VaccineProps = {
    lastVaccineDate: string;
    nextVaccineDate: string ;
}

const VaccineCard = ({lastVaccineDate, nextVaccineDate} : VaccineProps) => {
    return (
        <Container>
            <MdPets size={24} />
            <strong>Última vacina recebida em:  
                <span> {lastVaccineDate}</span>
            </strong>
            <strong>Próxima aplicação em:  
                <span> {nextVaccineDate}</span>
            </strong>
        </Container>
    )
}

export { VaccineCard }