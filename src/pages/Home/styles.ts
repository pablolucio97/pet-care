import styled from "styled-components";
import { palletColors } from "../../styles/palletColors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  `;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100vw;
  height: 64px;
  background: linear-gradient(to right, ${palletColors.primary}, ${palletColors.secondary});
  box-shadow: rgba(10, 10, 10, .1) 0px 8px 16px 4px,
    rgba(10, 10, 10, .2) 0px 0px 2px 1px;
`;

export const CardsContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  padding: 2rem;
`;


export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin: 2rem;
  width: 240px;
`;

export const Button = styled.button`
    width: 80px;
`

export const NewPetButton = styled.button`
    width: 120px;
    text-transform: uppercase;
    color: ${palletColors.tertiary};
    font-weight: 500;
    border: 1px solid ${palletColors.tertiary};
    padding: .4rem;
    border-radius: 4px;
`