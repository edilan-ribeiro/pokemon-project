import styled from "styled-components";

export const DetailsCardContainer = styled.div`

    display: flex;
    max-width: 750px;
    background-color: ${props => props.theme.cardBg};
    text-transform: capitalize;
    border-radius: 20px;
    overflow: hidden;
    color: ${props => props.theme.cardInfo};

    @media (max-width:575px) {
        flex-direction: column;
    }

`