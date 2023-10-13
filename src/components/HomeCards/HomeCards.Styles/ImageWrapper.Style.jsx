import styled from "styled-components";
import pokeball from "../../../../public/images/project/Pokeball-bg.png"


export const ImageWrapper = styled.div`
    background: transparent;
    position: relative;
    

    &:before {
        content: '';
        background: url(${pokeball}) no-repeat;
        opacity: 0.5;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: 0;   
        background-size: 120%;
        background-position: -25%;
    }

    width: 230px;
    height: 166px;
    display: flex;
    justify-content: center;
    align-items: center;


        img {
            opacity: 1;
            max-width: 55%;
            max-height: 100%;
            z-index: 1;
        }

`

