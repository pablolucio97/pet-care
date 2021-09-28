import styled from "styled-components";
import { palletColors } from "../../styles/palletColors";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.2rem;
  width: 100vw;
  height: 64px;
  background: linear-gradient(
    to right,
    ${palletColors.primary},
    ${palletColors.secondary}
  );
  box-shadow: rgba(10, 10, 10, 0.1) 0px 8px 16px 4px,
    rgba(10, 10, 10, 0.2) 0px 0px 2px 1px;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    margin: 2rem;
    width: 240px;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: .8rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  padding: 2rem;

  button {
    width: 80px;
    margin-bottom: 1.6rem;
  }
`;
