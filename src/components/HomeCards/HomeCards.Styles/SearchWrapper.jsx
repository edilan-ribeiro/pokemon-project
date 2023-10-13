import styled from "styled-components";

export const FilterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    gap: 20px;

    p{
        font-size: 25px;
        font-weight: 700;
        color: ${props => props.theme.color};
        text-align: center;
    }
`