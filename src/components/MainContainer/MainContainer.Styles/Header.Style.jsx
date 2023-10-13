import styled from "styled-components"

export const Header = styled.header`
    display:flex;
    align-items:center;
    justify-content:center;
    width: 100%;
    position: relative;
    padding: 20px;

        img {
            width:310px;
            margin-bottom: 50px;
        }

        @media (min-width: 830px){
            width: 750px;
        }
`
