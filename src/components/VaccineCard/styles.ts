import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: var(--secondary);
  width: 480px;
  padding: 1.2rem;
  border-radius: .25rem;
  margin: 2.4rem auto;
  border-bottom: 2px solid var(--primary);

  @media(max-width: 720px){
    width: 80%
  }

  span {
    font-size: 1.2rem;
    font-weight: 500;
  }

  strong {
    font-size: .88rem;
    font-weight: 500;
    margin: 1.2rem .4rem 0;
    width: 160px;
  }
`;
