import { createGlobalStyle } from 'styled-components'; 

export default createGlobalStyle`
    * {
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.colors.background};
        font-size: 14px;
        color: ${ props => props.theme.colors.text};
        font-family: sans-serif;
    }

    main {
        background: ${props => props.theme.colors.background};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 36px;
    }
`;