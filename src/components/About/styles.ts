import styled from "styled-components";

export const AboutBox = styled.section `
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 600px;
    padding:  10%;

    img{
        width: 300px;
        height: 300px;
    }


`;

export const Infos = styled.main `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        font: Medium 36px 'Roboto Condensed', sans-serif;
        width: 242px;
        heigth: 62px;
        color: #FF6EC7;
    }

    p{
        font: normal normal 14px;
        width: 633px;
        heigth: 165px;
        text-align: center;
    }
`;
