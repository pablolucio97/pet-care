import styled from 'styled-components'
import { palletColors } from '../../styles/palletColors'

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 640px;
    background: ${palletColors.white};
    box-shadow: rgba(10, 10, 10, 0.1) 0px 8px 16px 4px,
    rgba(10, 10, 10, 0.2) 0px 0px 2px 1px;
    border-radius: 4px;
    margin: 2rem auto;
`

export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin: 2rem auto -6.2rem;
  width: 240px;
`

export const SubTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin: 120px 0 0 0;
  width: 280px;
  text-align: center;
`;

export const ConfirmDeleteButton = styled.button`
  width: 240px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ea4335;
  color: #fff;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  padding: .4rem;
  margin: 1rem;
  border: none;
  outline: none;
  &:hover {
      cursor: pointer;
    }
    @media (max-width: 720px) {
        margin: 1rem;
    }
    `;


export const CancelDeleteButton = styled.button`
  width: 240px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${palletColors.black2};
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  padding: .4rem;
  margin: 1rem;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 720px) {
    margin: 1rem;
  }
`;