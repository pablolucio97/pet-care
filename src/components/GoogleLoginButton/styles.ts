import styled from "styled-components";

export const GoogleLoginButton = styled.button`
  width: 240px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ea4335;
  color: #fff;
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