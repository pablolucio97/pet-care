import styled from "styled-components";
import { palletColors } from "../../styles/palletColors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  width: 720px;
  background: ${palletColors.primary};
  border-radius: 4px;
  box-shadow: rgba(10, 10, 10, 0.1) 0px 8px 16px -2px,
    rgba(10, 10, 10, 0.02) 0px 0px 0px 1px;
`;
