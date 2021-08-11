import styled from "styled-components";
import { palletColors } from "../../styles/palletColors";

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


export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin: 2rem;
  width: 240px;
`;

export const Button = styled.button`
    width: 80px;
`
