import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: var(--secondary);
  width: 400px;
  padding: 1.2rem;
  border-radius: .25rem;
  margin: 2rem auto;
  border-bottom: 2px solid var(--primary);

  span {
    font-size: 1.2rem;
    font-weight: 500;
  }

  strong {
    font-size: .92rem;
    font-weight: 500;
    margin: 1.2rem .4rem 0;
  }
`;
