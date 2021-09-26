import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;

    button{
        background: var(--primary);
        color: var(--white);
        height: 40px;
        border-radius: .25rem;
        width: 440px;

        @media(max-width: 720px){
          width: 80%;
        }
       
    }

    button:disabled{
      background: var(--gray2);
      cursor: not-allowed;
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