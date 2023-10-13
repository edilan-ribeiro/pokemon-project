import styled from "styled-components"

export const Switch = styled.label`
    display: flex;
    width: 55px;
    height: 25px;
    border-radius: 15px;
    position: absolute;
    right: 0;
    top: 0;
    margin: 10px;
    align-items: center;
    padding: 5px;
    background-color: #858282;
    cursor: pointer;
    border: solid 1px ${props => props.theme.border};
`

export const TogglerInput = styled.input`
    appearance: none;

`
export const Moon = styled.span`
    position: absolute;
    left: 1;
    color: #FFF;
`

export const Sun = styled.span`
    position: absolute;
    right: 5px;
    color: gold;
`
