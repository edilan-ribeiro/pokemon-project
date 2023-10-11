import styled from "styled-components";
import { typeBgColor } from "../../TypesList/TypesList";

export const TypeFilter = styled.ul`
    display: flex;
    text-transform: capitalize;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const ItemListFilter = styled.li`
    background-color: ${props => typeBgColor[props.type] || 'beige' };
    padding: 5px 10px;
    border-radius: 15px;
    cursor: pointer;

    &:hover{
        box-shadow: 0px 0px 15px 1px rgba(255, 255, 255, 0.75);
        transform: scale(1.05);
    }
`