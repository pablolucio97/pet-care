import styled from "styled-components";
import { palletColors } from "../../styles/palletColors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const RegisterContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  width: 100vw;
  height: 64px;
  background: linear-gradient(
    to right,
    ${palletColors.primary},
    ${palletColors.secondary}
  );
  box-shadow: rgba(10, 10, 10, 0.1) 0px 8px 16px 4px,
    rgba(10, 10, 10, 0.2) 0px 0px 2px 1px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin: 2rem;
  width: 240px;
`;

export const SubTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  margin: 120px 0 0 0;
  width: 280px;
  text-align: center;
`;

export const Button = styled.button`
  width: 80px;
`;

export const Input = styled.input`
  width: 240px;
  height: 32px;
  margin: 0.4rem;
  border-radius: 4px;
  padding: 0.4rem;
  border: 1px solid ${palletColors.black2};
  background: ${palletColors.gray1};
  font-size: 0.8rem; ;
`;

export const Select = styled.select`
  width: 240px;
  height: 32px;
  margin: 0.4rem;
  border-radius: 4px;
  padding: 0.4rem;
  border: 1px solid ${palletColors.black2};
  background: ${palletColors.gray1};
  font-size: 0.8rem; ;
`;

export const Span = styled.span`
  font-size: 0.88rem;
  font-weight: 400;
  margin: 0.8rem 188px 0.4rem 0.6rem;
  text-align: start;
`;

export const NewPetButton = styled.button`
  width: 240px;
  text-transform: uppercase;
  color: ${palletColors.tertiary};
  font-weight: 500;
  border: 1px solid ${palletColors.tertiary};
  padding: 0.4rem;
  border-radius: 4px;
  margin: 1rem;
`;
