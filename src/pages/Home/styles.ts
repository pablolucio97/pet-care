import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;

    button {
      background: var(--primary);
      color: var(--white);
      height: 40px;
      border-radius: 0.25rem;
      width: 440px;

      @media (max-width: 720px) {
        width: 80%;
      }
    }

    button:disabled {
      background: var(--gray2);
      cursor: not-allowed;
    }

    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      background: var(--white);
      width: 640px;
      padding: 1.2rem;
      border-radius: 0.25rem;
      margin: 2.4rem auto;
      border-bottom: 2px solid var(--white);
      box-shadow: rgba(10, 10, 10, 0.1) 0px 8px 16px -2px,
        rgba(10, 10, 10, 0.02) 0px 0px 0px 1px;

      @media (max-width: 720px) {
        width: 82%;
      }

      h3 {
        margin: 0 auto;
      }

      li {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0.8rem;
        border-bottom: 1px solid var(--gray1);

        span {
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--black1);
        }
      }
    }
  }
`;

export const CardsContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
`;
