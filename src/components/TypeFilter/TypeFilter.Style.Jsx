import styled from "styled-components"
import { typeBgColor } from "../TypesList/TypesList"

export const TypeFormWrapper = styled.form`
    display: flex;
    text-transform: capitalize;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 850px;
`

export const FilterList = styled.label`
    background-color: ${props => typeBgColor[props.$typecolor] || '#8c9494d7' };
    padding: 5px 10px;
    border-radius: 15px;
    cursor: pointer;
    color: #FFFFFF;
    transition: all .2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: ${props => props.$selectedtype === props.htmlFor ? 'scale(1.25)' : 'scale(1)'};
    text-decoration: ${props => props.$selectedtype === props.htmlFor ? 'underline' : 'none'};

    &:hover{
        box-shadow: 0px 0px 10px 1px ${props => props.theme.shadow};
        transform: scale(1.05);
    }

    input{
        cursor: pointer;
        appearance: none;
    }
`