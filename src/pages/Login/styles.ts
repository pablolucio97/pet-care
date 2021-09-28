import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    width: 100%;
    
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    button{
        background: var(--primary);
        padding: .4rem;
        color: var(--white);
        border-radius: 4px;
    }

    img{
        width: 48px;
        height: 48px;
        border-radius: 50%;
        margin: 0 auto;
    }

    span{
        margin: .8rem auto;
    }

`

export const Title = styled.h1`
    font-size: 3rem;
    font-weight: 500;
    margin: 8rem auto 4rem;
`

