import styled from "styled-components"
import { typeBgColor } from "../../TypesList/TypesList"
import pokeball from "/images/project/openball.png"

export const MainImage = styled.div`

    background-color: ${props => typeBgColor[props.type] || 'gray' };
    
    display: flex;
    align-items: center;
    width: 300px;    
    position: relative;
    

    img{
        position: relative;
        max-width: 100%;
        max-height: 100%;
        left: 25%;
    }

    &:before {
        content: '';
        background: url(${pokeball}) no-repeat;
        opacity: 0.2;
        top: 0;
        left: 0;
        bottom: 25%;
        right: 0;
        position: absolute;
        z-index: 0;   
        background-size: 300%;
        background-position: bottom ;
        overflow: visible;        
    }

    @media (max-width:575px) {
        width: auto;

        img{
            margin: 0 auto;
            left: 0;
            padding: 30px;
            width: 80%;
        }
        

            &:before {
                    content: '';
                    background: url(${pokeball}) no-repeat;
                    opacity: 0.2;
                    top: 0;
                    left: -35%;
                    bottom: 0;
                    right: 0;
                    position: absolute;
                    z-index: 0;
                    transform: rotate(360deg);
                }

    }
`
