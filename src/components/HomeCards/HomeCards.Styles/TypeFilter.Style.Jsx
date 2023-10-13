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
    background-color: ${props => typeBgColor[props.type] || '#8c9494d7' };
    padding: 5px 10px;
    border-radius: 15px;
    cursor: pointer;
    color: #FFFFFF;
    transition: all .2s ease-in-out;

    &:hover{
        box-shadow: 0px 0px 10px 1px ${props => props.theme.shadow};
        transform: scale(1.05);
    }
`