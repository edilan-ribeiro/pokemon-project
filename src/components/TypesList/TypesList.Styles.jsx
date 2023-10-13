import styled from "styled-components";
import { whiteTextTypes, typeBgColor } from "./TypesList";

export const TypesList = styled.li`

    padding: 5px 10px;
    border-radius: 10px;
    text-align: center;
    font-size: 13px;
    border: 2px solid white;

    background: ${props => 
        props.type === 'dragon' ? 'linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)'
        : props.type === 'ground' ? 'linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)'
        :  props.type === 'flying' ? 'linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)'
        : 'none'};

    background-color: ${props => typeBgColor[props.type] || 'gray' };
    
    color: ${props => 
        whiteTextTypes.includes(props.type) ? '#FFFFFF' : '#000000'
    };
`