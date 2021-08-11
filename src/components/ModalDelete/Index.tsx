import { ModalContainer, SubTitle, Title, ConfirmDeleteButton, CancelDeleteButton } from './styles'

const ModalDelete = () => {
    return (
        <ModalContainer>
            <Title>
                Confirmar exclusão
            </Title>
            <SubTitle>
                Tem certeza que deseja remover o registro de Luck?
            </SubTitle>
            <ConfirmDeleteButton>
                Sim, Confirmar
            </ConfirmDeleteButton>
            <CancelDeleteButton>
                Cancelar
            </CancelDeleteButton>
        </ModalContainer>
    )
}

export default ModalDelete