import styled from "styled-components"

export const Header = styled.header`
    max-width: 1440px;
    display: flex;
    align-items:center;
    justify-content:center;
    margin: 0 auto -20px auto;
    position: relative;
    padding: 1rem;

        img {
            width:310px;
            margin: 50px 0;
        }

        @media (min-width: 780px){
            width: 750px;
        }
`
