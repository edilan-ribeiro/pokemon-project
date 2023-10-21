import styled from "styled-components"

export const Header = styled.header`
    max-width: 1440px;
    display: flex;
    align-items:center;
    justify-content:center;
    margin: 0 auto -20px auto;
    position: relative;
    padding: 1rem;
    flex-direction: column;

        img {
            width:310px;
            margin-top: 50px;
        }

        p{            
            margin-bottom: 50px;
            color: ${props => props.theme.color};
            font-size: 14px;
        }

        @media (min-width: 780px){
            width: 750px;
        }
`
