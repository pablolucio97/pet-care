import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`

    :root{
        --primary: #FF526C;
        --secondary: #5286FF;
        --tertiary: #FF9A52;
        --gray1: #E5E5E5;
        --gray2: #C4C4C4;
        --black1: #111;
        --black2: #222;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body{
        width: 100%;
        height: 100vh;
        background: var( --white);
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: none;
        outline: none;
        background: transparent;
    }

    button:hover{
        cursor: pointer;
    }

`