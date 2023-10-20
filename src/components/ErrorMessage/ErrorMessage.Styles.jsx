import styled from "styled-components";

export const DetailsOfError = styled.h1`
    margin-top: 100px;
    color: ${props => props.theme.color};
    letter-spacing: 1px;
    font-size: 30px;
    text-align: center;    

    p {
        font-size: 20px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 80px;
        }
    }
`