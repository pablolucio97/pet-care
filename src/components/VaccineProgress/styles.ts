import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 2.4rem;

    strong{
        margin-bottom: .8rem;
    }

    button{
        background: var(--primary);
        color: var(--white);
        margin-top: 1.2rem;
        height: 32px;
        border-radius: .25rem;
       
    }
`