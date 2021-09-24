import { Line } from 'rc-progress'
import { Container } from './styles'

type VaccineProgressProps = {
    daysLakes: number;
    strokeColor: '#5286FF' | '#FF9A52'
}

const VaccineProgress = ( {daysLakes, strokeColor} :  VaccineProgressProps) => {
    return (
        <Container>
            <strong>Faltam {daysLakes} dias para a próxima vacina</strong>
            <Line
                percent={daysLakes * 1.113}
                strokeWidth={2}
                strokeColor={strokeColor}
                trailWidth={16}
                trailColor='#FF9A52'
                style={{
                    width: '100%',
                    height: 8.8,
                    borderRadius: 0
                }}
            />
        </Container>
    )
}

export { VaccineProgress }