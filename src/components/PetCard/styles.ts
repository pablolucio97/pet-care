import styled from "styled-components";
import { palletColors } from "../../styles/palletColors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
  margin: .6rem;
  width: 480px;
  background: ${palletColors.primary};
  border-radius: 4px;
  box-shadow: rgba(10, 10, 10, 0.1) 0px 8px 16px -2px,
    rgba(10, 10, 10, 0.02) 0px 0px 0px 1px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: transparent;
  width: 100%;
  padding-bottom: .6rem;
  border-bottom: 1px solid ${palletColors.gray2};
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Image = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

export const DataText = styled.span`
  font-size: 1.12rem;
  font-weight: 300;
  margin: 0.2rem;
  color: ${palletColors.white};
`;



export const AlertText = styled.span`
  font-size: 1.12rem;
  font-weight: 500;
  margin: 0.2rem;
  color: ${palletColors.black2};
  background:  ${palletColors.tertiary};
  padding: .2rem;
`;
