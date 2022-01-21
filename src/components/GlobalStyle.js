import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media screen and (max-width: 768px){
            font-size: 75%;
        }
    }
    body {
        background: #1b1b1b;
        color: rgb(193, 201, 204);
        font-family: 'Montserrat', sans-serif;
    }
    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        &:hover {
            color: white;
        }
    }
    h1 {
        text-shadow: 1px 2px 2px rgba(255, 161, 79, 0.733);
    }
`;

export default GlobalStyle;