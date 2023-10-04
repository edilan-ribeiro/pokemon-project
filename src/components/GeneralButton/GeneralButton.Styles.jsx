import styled from "styled-components"

export const BaseButton = styled.button`

    appearance: none;
    backface-visibility: hidden;
    outline: none;
    border-style: none;
    box-shadow: none;
    background-color: #30a7d7;
    border-radius: 10px;
    color: #fff;
    display: inline-block;
    font-size: 20px;
    overflow: hidden;
    padding: 20px 50px;
    margin: 5px;
    transition: all .3s;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
    background-color: #1366d6;
    box-shadow: rgba(0, 0, 0, .05) 0 5px 30px, rgba(0, 0, 0, .05) 0 1px 4px;
    opacity: 1;
    transform: translateY(0);
    transition-duration: .35s;
        &:after {
            opacity: .5;
        }
    }

    &:active {
        box-shadow: rgba(0, 0, 0, .1) 0 3px 6px 0, rgba(0, 0, 0, .1) 0 0 10px 0, rgba(0, 0, 0, .1) 0 1px 4px -1px;
        transform: translateY(2px);
        transition-duration: .35s;
            &:active:after {
                opacity: 1;
            }
    }
`