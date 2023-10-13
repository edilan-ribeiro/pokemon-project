import styled from "styled-components"
import { typeBgColor } from "../../TypesList/TypesList"



export const CardsFace = styled.li`
    position: relative;
    width: 240px;
    height: 280px;
    padding: 20px;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all .2s ease-in-out;
    border-radius: 25px;
   
   &:hover{
    box-shadow: 0px 0px 15px 1px ${props => props.theme.shadow};
    transform: scale(1.05);
   } 

     background-color: ${props => typeBgColor[props.type] || 'beige' };

        h1 {
            position: absolute;
            top: 3%;
            left: 3%;
            color: #ffffffa0;
        }

`
