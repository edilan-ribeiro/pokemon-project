import styled from "styled-components";

export const DetailsCardContainer = styled.div`

    display: flex;
    max-width: 750px;
    background-color: white;
    text-transform: capitalize;
    border-radius: 20px;
    overflow: hidden;

    @media (max-width:575px) {
        flex-direction: column;
    }

`