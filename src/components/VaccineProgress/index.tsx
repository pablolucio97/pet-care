import { Line } from 'rc-progress'
import { Container } from './styles'


const VaccineProgress = () => {
    return (
        <Container>
            <strong>Faltam 34 dias para a próxima vacina</strong>
            <Line
                percent={10}
                strokeWidth={4}
                strokeColor="green"
                trailWidth={8}
                trailColor='red'
                style={{
                    width: '100%',
                    height: 4,
                    borderRadius: 0
                }}
            />
            <button>APLICAR VACINA</button>
        </Container>
    )
}

export { VaccineProgress }