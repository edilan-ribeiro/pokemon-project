import styled from "styled-components"

export const Switch = styled.label`
    display: flex;
    width: 55px;
    height: 25px;
    border-radius: 15px;
    position: absolute;
    right: 3%;
    top: 15%;
    margin: 10px;
    align-items: center;
    padding: 5px;
    background-color: ${props => props.theme.buttonColor};    
    border: solid 1px ${props => props.theme.border};    
    cursor: pointer;
`

export const TogglerInput = styled.input`
    appearance: none;

`
export const Moon = styled.span`
    position: absolute;
    left: 1;
    color: #FFF;  
    transform: ${props => props.theme.color === '#FFFFFF' ? 'scale(1)' : 'scale(0)  translateX(55px)'};
    transition: 0.2s ease-in-out;
`

export const Sun = styled.span`
    position: absolute;
    right: 5px;
    color: gold;
    transform: ${props => props.theme.color === '#000000' ? 'scale(1)' : 'scale(0) translateX(-55px)'};
    transition: 0.2s ease-in-out;
`