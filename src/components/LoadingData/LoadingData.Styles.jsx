import styled from "styled-components";

export const LoadingWrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.color};
    
    
    @media (max-width: 445px) {
       transform: scale(0.9);
       width: 260px;
       text-align: center;
       flex-wrap: wrap;
    }

`